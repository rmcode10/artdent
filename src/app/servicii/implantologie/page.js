import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Implantologie = () => {
  const img = services[7].image;
  const otherServices = services.filter(
    (service) => service.title !== "Implantologie",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Implantologie" />}>
      <h1>
        Implantologie orală Straumann – Excelență și durabilitate pentru
        zâmbetul tău
      </h1>
      <p>
        Implantologia orală oferă soluții moderne și eficiente pentru înlocuirea
        dinților pierduți, iar sistemul Straumann (Elveția) reprezintă
        standardul de excelență în acest domeniu. Renumit pentru calitatea
        superioară, precizia și durabilitatea sa, Straumann este lider mondial
        în implantologie, oferind rezultate sigure și de lungă durată.
      </p>
      <p>De ce să alegi implanturile Straumann?</p>
      <ul>
        <li>
          Biocompatibilitate ridicată: Materiale avansate care se integrează
          perfect cu osul natural.
        </li>
        <li>
          Rezistență excepțională: Implanturi proiectate pentru a rezista
          provocărilor zilnice și a oferi confort pe termen lung.
        </li>
        <li>
          Estetică impecabilă: Restaurări care imită perfect aspectul și funcția
          dinților naturali.
        </li>
        <li>
          Tehnologie avansată: Proceduri predictibile și minim invazive,
          realizate cu cele mai moderne echipamente.
        </li>
      </ul>
      <p>
        În clinica noastră, echipa de specialiști vă oferă planuri personalizate
        de tratament, utilizând sistemul Straumann pentru a asigura un zâmbet
        sănătos, funcțional și estetic.
      </p>
      <p>
        Redescoperă bucuria de a zâmbi alături de o masticație fără griji!
        Programează o consultație și află cum implanturile dentare Straumann pot
        transforma sănătatea și încrederea ta.
      </p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Implantologie;
