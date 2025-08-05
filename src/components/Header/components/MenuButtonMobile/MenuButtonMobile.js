import React from "react";
import styles from "./MenuButtonMobile.module.scss";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const MenuButtonMobile = ({ isActive, setIsActive }) => {
  return (
    <div className={styles.menuButtonMobileContainer}>
      <button
        className={styles.menuButtonMobile}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <MobileNavbar isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default MenuButtonMobile;
