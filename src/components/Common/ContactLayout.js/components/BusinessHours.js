import React from "react";
import styles from "../ContactLayout.module.scss";

const BusinessHours = () => {
  return (
    <div className={styles.businessHoursContainer}>
      <h4>Program Clinică</h4>
      <ul>
        <li>
          <span>Luni</span>
          <span className={styles.time}>09:00 - 20:00</span>
        </li>
        <li>
          <span>Marți</span>
          <span className={styles.time}>09:00 - 20:00</span>
        </li>
        <li>
          <span>Miercuri</span>
          <span className={styles.time}>09:00 - 20:00</span>
        </li>
        <li>
          <span>Joi</span>
          <span className={styles.time}>09:00 - 20:00</span>
        </li>
        <li>
          <span>Vineri</span>
          <span className={styles.time}>09:00 - 13:00</span>
        </li>
        <li>
          <span>Sâmbătă</span>
          <span className={styles.time}>închis</span>
        </li>
        <li>
          <span>Duminică</span>
          <span className={styles.time}>închis</span>
        </li>
      </ul>
    </div>
  );
};

export default BusinessHours;
