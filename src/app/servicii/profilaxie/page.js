import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Profilaxie = () => {
  const img = services[0].image;
  const otherServices = services.filter(
    (service) => service.title !== "Profilaxie",
  );

  return (
    <ServicePageLayout
      image={<Image fill src={img} alt="Profilaxie dentară" />}
    >
      <h1>Profilaxia dentară – Primul pas către un zâmbet sănătos</h1>
      <p>
        Profilaxia dentară reprezintă fundația sănătății orale și include o
        serie de proceduri menite să prevină apariția cariilor, a bolilor
        gingivale și a altor probleme dentare. În cadrul clinicii noastre
        stomatologice, ne dedicăm să vă oferim cele mai moderne tehnici de
        prevenție și îngrijire.
      </p>
      <p>Serviciile noastre de profilaxie includ:</p>
      <ul>
        <li>
          Detartraj și periaj profesional: Îndepărtarea plăcii bacteriene și a
          tartrului pentru a menține gingiile sănătoase și dinții curați.
        </li>
        <li>
          Air-flow: Curățarea delicată a petelor și a reziduurilor dentare
          pentru un zâmbet mai strălucitor.
        </li>
        <li>
          Sigilarea dentară: Protecția eficientă împotriva cariilor prin
          aplicarea unui strat special pe suprafața molarilor și premolarilor.
        </li>
        <li>
          Fluorizare: Aplicarea de fluor pentru întărirea smalțului dentar și
          prevenirea demineralizării.
        </li>
        <li>
          Consultații și educație pentru o igienă orală corectă: Sfaturi
          personalizate pentru o îngrijire optimă acasă.
        </li>
      </ul>
      <p>
        Prin vizite regulate și adoptarea unor obiceiuri corecte de igienă
        orală, puteți preveni tratamentele complicate și costisitoare. Echipa
        noastră de profesioniști vă este alături pentru a vă ajuta să mențineți
        un zâmbet sănătos și strălucitor pe termen lung.
      </p>
      <p>
        Programează o consultație acum și descoperă beneficiile profilaxiei
        dentare pentru tine și familia ta!
      </p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Profilaxie;
