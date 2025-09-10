"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import styles from "./AppointmentsPage.module.scss";

const ProgramariPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/api/appointments")
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data.appointments);
      });
  }, []);

  return (
    <AdminLayout>
      <table className={styles.appointmentsTable}>
        <thead>
          <tr>
            <td>Nume</td>
            <td>Telefon</td>
            <td>Mesaj</td>
            <td>Data</td>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className={styles.appointmentRow}>
              <td>{appointment.name}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.message}</td>
              <td>{new Date(appointment.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default ProgramariPage;
