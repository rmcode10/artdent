"use client";
import React from "react";
import Button from "../../Button/Button";
import styles from "../ContactLayout.module.scss";
import AppointmentIcon from "@/assets/icons/AppointmentIcon";
import { useScrollTo } from "@/hooks/useScrollTo";

const MakeAppointment = () => {
  const scrollToAppointment = useScrollTo("appointment");

  return (
    <div className={styles.makeAppointmentContainer}>
      <AppointmentIcon />
      <h4>Vrei o programare?</h4>
      <p>Te vom contacta imediat</p>
      <Button onClick={scrollToAppointment}>Fă o programare</Button>
    </div>
  );
};

export default MakeAppointment;
