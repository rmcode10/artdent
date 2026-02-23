"use client";

import { useState } from "react";
import { Clock, MapPin, Phone, Mail, Send } from "lucide-react";
// import receptionImage from "@/assets/clinic-reception.jpg";
import styles from "./Appointment.module.scss";
import cx from "clsx";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
import { EMAIL_ADDRESS, GOOGLE_MAPS_URL, PHONE_NUMBER } from "@/consts/general";

const scheduleData = [
  { day: "Luni - Joi", hours: "9:00 - 20:00" },
  { day: "Vineri", hours: "9:00 - 13:00" },
  { day: "Sâmbătă - Duminică", hours: "Închis" },
];

export const Appointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [contactData, setContactData] = useState({
    name: "",
    telefon: "",
    mesaj: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!contactData.name.trim()) newErrors.name = true;
    if (
      !contactData.telefon.trim() ||
      !/^[0-9+\s()-]{7,15}$/.test(contactData.telefon)
    ) {
      newErrors.telefon = true;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      name: contactData.name,
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
          telefon: "",
          mesaj: "",
        });

        setSuccessMessage(
          "Mulțumim pentru programare! Un coleg te va contacta curând.",
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
    <Wrapper>
      <section id="appointment" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.form}>
              <span className={styles.formLabel}>Programează-te</span>
              <h2 className={styles.formTitle}>Solicită o Programare</h2>
              <p className={styles.formDescription}>
                Completează formularul și te vom contacta în cel mai scurt timp
                pentru confirmare.
              </p>

              <form onSubmit={handleSubmit} className={styles.formFields}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">Nume complet *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Ion Popescu"
                      value={contactData.name}
                      onChange={handleChange}
                      className={cx({
                        [styles.input]: true,
                        [styles.inputError]: errors.name,
                      })}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefon *</label>
                    <input
                      id="phone"
                      type="text"
                      name="telefon"
                      placeholder="+40 123 456 789"
                      value={contactData.telefon}
                      onChange={handleChange}
                      className={cx({
                        [styles.input]: true,
                        [styles.inputError]: errors.telefon,
                      })}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Mesaj (opțional)</label>
                  <textarea
                    id="message"
                    name="mesaj"
                    placeholder="Descrieți pe scurt problema..."
                    rows={4}
                    value={contactData.mesaj}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </div>

                {successMessage && (
                  <div className={styles.alertSuccess}>{successMessage}</div>
                )}
                {errorMessage && (
                  <div className={styles.alertError}>{errorMessage}</div>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Se trimite..."
                  ) : (
                    <>
                      Trimite Formularul
                      <Send />
                    </>
                  )}
                </button>
              </form>
              <p className={styles.formDescription}>
                Prin completarea acestui formular va oferiți acordul explicit să
                fiți contactat telefonic în vederea realizării unei programări
                și obținerii mai multor informații despre tratamentul solicitat.
              </p>
            </div>

            {/* Schedule & Contact */}
            <div className={styles.sidebar}>
              {/* Working Hours */}
              <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                  <div className={styles.scheduleIcon}>
                    <Clock />
                  </div>
                  <h3 className={styles.scheduleTitle}>Program de lucru</h3>
                </div>
                <div className={styles.scheduleList}>
                  {scheduleData.map((item) => (
                    <div key={item.day} className={styles.scheduleItem}>
                      <span className={styles.scheduleDay}>{item.day}</span>
                      <span
                        className={`${styles.scheduleHours} ${
                          item.hours === "Închis" ? styles.closed : ""
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className={styles.contactCard}>
                <h3 className={styles.contactTitle}>Informații de Contact</h3>
                <div className={styles.contactList}>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIcon}>
                      <Phone />
                    </div>
                    <span className={styles.contactText}>{PHONE_NUMBER}</span>
                  </a>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIcon}>
                      <Mail />
                    </div>
                    <span className={styles.contactText}>{EMAIL_ADDRESS}</span>
                  </a>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <MapPin />
                    </div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      className={styles.contactText}
                    >
                      Str. Nufărului 9
                      <br />
                      Valea Lupului, Iași, România
                    </a>
                  </div>
                </div>
              </div>

              {/* Reception Image */}
              {/* <div className={styles.receptionImage}>
              <Image src={receptionImage} alt="Recepție Clinica ArtDent" />
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
