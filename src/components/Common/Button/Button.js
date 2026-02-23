import React from "react";
import cx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, className, onClick, isDisabled, ...props }) => {
  return (
    <button
      className={cx(styles.primaryBtn, className)}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
