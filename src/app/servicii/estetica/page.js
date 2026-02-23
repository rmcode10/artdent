import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Estetica = () => {
  const img = services[4].image;
  const otherServices = services.filter(
    (service) => service.title !== "Estetică dentară",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Estetică dentară" />}>
      <h1>Estetică dentară – Zâmbetul perfect, la îndemâna ta!</h1>
      <p>
        Estetica dentară îmbină arta și știința pentru a oferi zâmbetul dorit.
        În clinica noastră, transformăm zâmbetele prin servicii precum albirea
        dentară, fațetele dentare, bonding-ul estetic și reconturarea gingivală.
      </p>
      <p>
        Folosim tehnologii moderne și materiale de calitate pentru a asigura
        rezultate naturale și de lungă durată. Indiferent de nevoile tale,
        suntem aici să redăm frumusețea și încrederea zâmbetului tău.
      </p>
      <p>Programează-te acum și descoperă cum îți putem transforma zâmbetul!</p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Estetica;
