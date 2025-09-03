import React from "react";
import cx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={cx(styles.primaryBtn, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
