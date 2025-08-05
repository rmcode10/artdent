import React from "react";
import styles from "./ContactForm.module.scss";
import Button from "@/components/Common/Button/Button";

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Nume</label>
        <input
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="prenume">Prenume</label>
        <input
          type="text"
          id="prenume"
          name="prenume"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="telefon">Numar de telefon</label>
        <input
          type="text"
          id="telefon"
          name="telefon"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="mesaj">Mesaj (optional)</label>
        <textarea
          id="mesaj"
          name="mesaj"
          rows="4"
        ></textarea>
      </div>
      <div className={styles.checkboxesContainer}>
        <div className={styles.formCheckbox}>
          <input type="checkbox" id="confirm" name="confirm" />
          <label htmlFor="confirm">
            Prin completarea acestui formular îmi dau acordul explicit să fiu
            contactat telefonic în vederea realizării unei programări și
            obținerea mai multor informații despre tratamentul solicitat.
          </label>
        </div>
        <div className={styles.formCheckbox}>
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">
            Sunt de acord și am luat la cunoștință despre Termenii și condițiile
            site-ului și Politica de prelucrare a datelor cu caracter personal.
          </label>
        </div>
      </div>
      <Button className={styles.submitButton}>Trimite formularul</Button>
    </div>
  );
};

export default ContactForm;
