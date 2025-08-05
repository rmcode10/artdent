import React from "react";
import styles from "../ContactLayout.module.scss"

const BusinessHours = () => {
  return (
    <div className={styles.businessHoursContainer}>
      <h4>Program Clinica</h4>
      <ul>
        <li>
          <span>Luni</span>
          <span className={styles.time}>08:00 - 20:00</span>
        </li>
        <li>
          <span>Marti</span>
          <span className={styles.time}>08:00 - 20:00</span>
        </li>
        <li>
          <span>Miercuri</span>
          <span className={styles.time}>08:00 - 20:00</span>
        </li>
        <li>
          <span>Joi</span>
          <span className={styles.time}>08:00 - 20:00</span>
        </li>
        <li>
          <span>Vineri</span>
          <span className={styles.time}>08:00 - 20:00</span>
        </li>
        <li>
          <span>Sambata</span>
          <span className={styles.time}>08:00 - 20:00</span>
        </li>
        <li>
          <span>Duminica</span>
          <span className={styles.time}>08:00 - 20:00</span>
        </li>
      </ul>
    </div>
  );
};

export default BusinessHours;
