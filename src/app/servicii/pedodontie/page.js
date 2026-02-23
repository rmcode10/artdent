import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Pedodontie = () => {
  const img = services[3].image;
  const otherServices = services.filter(
    (service) => service.title !== "Pedodontie",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Pedodontie" />}>
      <h1>Pedodonție – Îngrijirea dentară pentru cei mici</h1>
      <p>
        Pedodonția se concentrează pe sănătatea orală a copiilor, de la primii
        dinți până la adolescență. În clinica noastră, oferim servicii precum
        controale periodice, sigilări dentare, fluorizare și tratamentul
        cariilor, toate adaptate nevoilor copiilor.
      </p>
      <p>
        Realizăm un mediu prietenos și relaxant pentru micii pacienți,
        ajutându-i să dezvolte obiceiuri sănătoase și să se bucure de un zâmbet
        frumos și sănătos.
      </p>
      <p>
        Programează o consultație pentru copilul tău și oferă-i un start
        excelent în sănătatea orală!
      </p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Pedodontie;
