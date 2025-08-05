import React from "react";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
