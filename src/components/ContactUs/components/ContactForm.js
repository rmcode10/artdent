"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "@/components/Common/Button/Button";
import Loader from "@/components/Common/Loader/Loader";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [contactData, setContactData] = useState({
    name: "",
    prenume: "",
    telefon: "",
    mesaj: "",
    confirm: false,
    terms: false,
  });

  const validateForm = () => {
    const newErrors = {};

    if (!contactData.name.trim()) newErrors.name = true;
    if (!contactData.prenume.trim()) newErrors.prenume = true;
    if (
      !contactData.telefon.trim() ||
      !/^[0-9+\s()-]{7,15}$/.test(contactData.telefon)
    ) {
      newErrors.telefon = true;
    }
    if (!contactData.confirm) newErrors.confirm = true;
    if (!contactData.terms) newErrors.terms = true;

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    setSuccessMessage("");
    setErrorMessage("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    setIsLoading(true);

    const formData = {
      name: `${contactData.name} ${contactData.prenume}`,
      phone: contactData.telefon,
      message: contactData.mesaj,
    };

    fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("A apărut o eroare la trimiterea formularului.");
        }
        return response.json();
      })
      .then(() => {
        setContactData({
          name: "",
          prenume: "",
          telefon: "",
          mesaj: "",
          confirm: false,
          terms: false,
        });

        setSuccessMessage(
          "Multumim pentru programare! Un coleg te va contacta curând.",
        );

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        setErrorMessage(error.message || "Ceva nu a mers bine.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Nume</label>
        <input
          type="text"
          id="name"
          name="name"
          className={errors.name ? styles.inputError : ""}
          value={contactData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="prenume">Prenume</label>
        <input
          type="text"
          id="prenume"
          name="prenume"
          className={errors.prenume ? styles.inputError : ""}
          value={contactData.prenume}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="telefon">Numar de telefon</label>
        <input
          type="text"
          id="telefon"
          name="telefon"
          className={errors.telefon ? styles.inputError : ""}
          value={contactData.telefon}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="mesaj">Mesaj (optional)</label>
        <textarea
          id="mesaj"
          name="mesaj"
          value={contactData.mesaj}
          onChange={handleChange}
        />
      </div>
      <div className={styles.checkboxesContainer}>
        <div className={styles.formCheckbox}>
          <input
            type="checkbox"
            id="confirm"
            name="confirm"
            checked={contactData.confirm}
            onChange={handleChange}
            className={errors.confirm ? styles.inputError : ""}
          />
          <label htmlFor="confirm">
            Prin completarea acestui formular îmi dau acordul explicit să fiu
            contactat telefonic în vederea realizării unei programări și
            obținerea mai multor informații despre tratamentul solicitat.
          </label>
        </div>
        <div className={styles.formCheckbox}>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={contactData.terms}
            onChange={handleChange}
            className={errors.terms ? styles.inputError : ""}
          />
          <label htmlFor="terms">
            Sunt de acord și am luat la cunoștință despre Termenii și condițiile
            site-ului și Politica de prelucrare a datelor cu caracter personal.
          </label>
        </div>
      </div>

      {successMessage && (
        <div className={styles.alertSuccess}>{successMessage}</div>
      )}
      {errorMessage && <div className={styles.alertError}>{errorMessage}</div>}

      <Button
        className={styles.submitButton}
        onClick={handleSubmit}
        isDisabled={isLoading}
      >
        {isLoading ? (
          <Loader
            styles={{ background: "white", width: "25px", padding: "5px" }}
          />
        ) : (
          "Trimite formularul"
        )}
      </Button>
    </div>
  );
};

export default ContactForm;
