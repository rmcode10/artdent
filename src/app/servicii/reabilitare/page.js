import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Reabilitare = () => {
  const img = services[8].image;
  const otherServices = services.filter(
    (service) =>
      service.title !==
      "Reabilitare implanto-protetica All-on 4/6 by Straumann",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Reabilitare" />}>
      <h1>
        Reabilitare implanto-protetică All-on-4/6 by Straumann – Zâmbet complet,
        într-o singură zi
      </h1>
      <p>
        Sistemul All-on-4/6 by Straumann este o soluție revoluționară pentru
        pacienții edentați total sau parțial, care doresc să-și recapete
        zâmbetul și funcționalitatea dentară într-un timp scurt. Această tehnică
        avansată permite fixarea unei lucrări protetice complete pe doar 4 sau 6
        implanturi dentare, utilizând tehnologia de top Straumann pentru
        rezultate sigure, estetice și de lungă durată.
      </p>
      <p>Avantajele reabilitării All-on-4/6 by Straumann:</p>
      <ul>
        <li>
          Timp redus de tratament: O soluție rapidă, care permite restaurarea
          zâmbetului în aceeași zi.
        </li>
        <li>
          Stabilitate excepțională: Implanturi de calitate superioară,
          proiectate pentru o integrare perfectă și o durabilitate remarcabilă.
        </li>
        <li>
          Aspect natural: Protetica realizată cu precizie oferă un zâmbet
          estetic, care imită perfect dinții naturali.
        </li>
        <li>
          Confort și funcționalitate: Redă abilitatea de a mastica și vorbi fără
          disconfort sau limitări.
        </li>
        <li>
          Minimizarea intervențiilor: Tehnică minim invazivă, care reduce
          necesitatea grefelor osoase în majoritatea cazurilor.
        </li>
      </ul>
      <p>
        Echipa noastră de specialiști în implantologie și protetică utilizează
        tehnologia Straumann pentru a crea zâmbete personalizate, oferind o
        experiență sigură și confortabilă.
      </p>
      <p>
        Alege reabilitarea All-on-4/6 by Straumann și bucură-te de un zâmbet
        complet, sănătos și plin de încredere. Programează o consultație și
        începe transformarea zâmbetului tău astăzi!
      </p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Reabilitare;
