import React from "react";
import cx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, className, onClick, isDisabled }) => {
  return (
    <button
      className={cx(styles.primaryBtn, className)}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
