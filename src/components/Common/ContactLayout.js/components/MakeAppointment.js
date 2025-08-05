import React from "react";
import Button from "../../Button/Button";
import styles from "../ContactLayout.module.scss";
import AppointmentIcon from "@/assets/icons/AppointmentIcon";

const MakeAppointment = () => {
  return (
    <div className={styles.makeAppointmentContainer}>
      <AppointmentIcon />
      <h4>Vrei o programare?</h4>
      <p>Te vom contacta imediat</p>
      <Button>Fa o programare</Button>
    </div>
  );
};

export default MakeAppointment;
