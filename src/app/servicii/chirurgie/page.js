import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Chirurgie = () => {
  const img = services[6].image;
  const otherServices = services.filter(
    (service) => service.title !== "Chirurgie orală",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Chirurgie orală" />}>
      <h1>
        Chirurgie orală – Soluții avansate pentru sănătatea zâmbetului tău
      </h1>
      <p>
        Chirurgia orală include intervenții specializate pentru rezolvarea
        problemelor dentare complexe, precum extracțiile molarilor de minte,
        tratamentul chisturilor maxilare, inserarea implanturilor dentare și
        corectarea anomaliilor orale.
      </p>
      <p>
        În clinica noastră, utilizăm tehnologie modernă și tehnici minim
        invazive pentru a asigura tratamente precise, eficiente și confortabile.
        Echipa noastră de specialiști vă oferă îngrijire personalizată, într-un
        mediu sigur și prietenos.
      </p>
      <p>
        Programează o consultație și află cum chirurgia orală poate contribui la
        sănătatea și estetica zâmbetului tău!
      </p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Chirurgie;
