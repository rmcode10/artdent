import React from "react";
import styles from "../ContactLayout.module.scss";
import FacebookPlugin from "../../FacebookPlugin/FacebookPlugin";

const FindOnFacebook = () => {
  return (
    <div className={styles.findOnFacebookContainer}>
      <h4>Găsește-ne pe Facebook</h4>
      <FacebookPlugin />
    </div>
  );
};

export default FindOnFacebook;
