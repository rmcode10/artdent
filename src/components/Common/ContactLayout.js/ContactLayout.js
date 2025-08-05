import React from "react";
import styles from "./ContactLayout.module.scss";
import BusinessHours from "./components/BusinessHours";
import MakeAppointment from "./components/MakeAppointment";
import FindOnFacebook from "./components/FindOnFacebook";

const ContactLayout = () => {
  return (
    <div className={styles.contactLayoutContainer}>
      <BusinessHours />
      <MakeAppointment />
      <FindOnFacebook />
    </div>
  );
};

export default ContactLayout;
