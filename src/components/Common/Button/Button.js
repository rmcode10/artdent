import React from "react";
import cx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, className }) => {
  return (
    <button className={cx(styles.primaryBtn, className)}>{children}</button>
  );
};

export default Button;
