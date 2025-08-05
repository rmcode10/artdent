import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Endodontie = () => {
  const img = services[1].image;
  const otherServices = services.filter(
    (service) => service.title !== "Endodontie",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Endodontie" />}>
      <h1>Endodonție dentară – Salvarea dinților prin tratament de canal</h1>
      <p>
        Endodonția, cunoscută și sub denumirea de tratament de canal, este o
        procedură stomatologică esențială pentru salvarea dinților grav afectați
        de carii profunde sau infecții ale pulpei dentare. Această intervenție
        presupune curățarea și sigilarea canalelor radiculare pentru a preveni
        extinderea infecției și a proteja dintelui natural.
      </p>
      <p>
        În clinica noastră, tratamentele endodontice sunt realizate cu ajutorul
        tehnologiei de ultimă generație, asigurând precizie și confort sporit.
        Echipa noastră de specialiști se asigură că fiecare pacient beneficiază
        de tratamente eficiente, care contribuie la menținerea unui zâmbet
        sănătos și funcțional.
      </p>
      <p>Când este necesar tratamentul de canal?</p>
      <ul>
        <li>
          Durere intensă a unui dinte sau sensibilitate prelungită la cald și
          rece.
        </li>
        <li>Infecții dentare sau abcese.</li>
        <li>Fracturi sau deteriorări severe ale dintelui.</li>
      </ul>
      <p>
        Programează o consultație și află cum endodonția poate salva dintele
        tău, evitând extracția și menținându-l pe arcadă pe termen lung!
      </p>

      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Endodontie;
