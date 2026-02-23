"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Navigation } from "lucide-react";
import styles from "./scss/ServicesSection2.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { PHONE_NUMBER } from "@/consts/general";
import Link from "next/link";

const services = [
  {
    id: "profilaxie",
    title: "Profilaxie",
    description:
      "Profilaxia dentară reprezintă fundația sănătății orale și include o serie de proceduri menite să prevină apariția cariilor, a bolilor gingivale și a altor probleme dentare. În cadrul clinicii noastre stomatologice, ne dedicăm să vă oferim cele mai moderne tehnici de prevenție și îngrijire.",
    href: "/servicii/profilaxie",
  },
  {
    id: "endodontie",
    title: "Endodonție",
    description:
      "Endodonția, cunoscută și sub denumirea de tratament de canal, este o procedură stomatologică esențială pentru salvarea dinților grav afectați de carii profunde sau infecții ale pulpei dentare. Această intervenție presupune curățarea și sigilarea canalelor radiculare pentru a preveni extinderea infecției și a proteja dintelui natural.",
    href: "/servicii/endodontie",
  },
  {
    id: "ortodontie",
    title: "Ortodonție",
    description:
      "Ortodonția este ramura stomatologiei care se ocupă de diagnosticarea, prevenirea și corectarea poziției dinților și a maxilarelor. Un zâmbet aliniat corect nu este doar estetic, ci și esențial pentru sănătatea orală și funcționalitatea ocluziei.",
    href: "/servicii/ortodontie",
  },
  {
    id: "pedodontie",
    title: "Pedodonție",
    description:
      "Pedodonția se concentrează pe sănătatea orală a copiilor, de la primii dinți până la adolescență. În clinica noastră, oferim servicii precum controale periodice, sigilări dentare, fluorizare și tratamentul cariilor, toate adaptate nevoilor copiilor.",
    href: "/servicii/pedodontie",
  },
  {
    id: "estetica",
    title: "Estetică Dentară",
    description:
      "Estetica dentară îmbină arta și știința pentru a oferi zâmbetul dorit. În clinica noastră, transformăm zâmbetele prin servicii precum albirea dentară, fațetele dentare, bonding-ul estetic și reconturarea gingivală.",

    href: "/servicii/estetica",
  },
  {
    id: "protetica",
    title: "Protetică",
    description:
      "Protetica dentară se concentrează pe refacerea dinților pierduți sau deteriorați, redând atât funcționalitatea, cât și aspectul natural al zâmbetului. În clinica noastră, oferim soluții personalizate, precum coroane, punți dentare, proteze mobile și lucrări pe implanturi, utilizând materiale de înaltă calitate și tehnologie avansată.",

    href: "/servicii/protetica",
  },
  {
    id: "chirurgie",
    title: "Chirurgie Orală",
    description:
      "Chirurgia orală include intervenții specializate pentru rezolvarea problemelor dentare complexe, precum extracțiile molarilor de minte, tratamentul chisturilor maxilare, inserarea implanturilor dentare și corectarea anomaliilor orale.",

    href: "/servicii/chirurgie",
  },
  {
    id: "implantologie",
    title: "Implantologie",
    description:
      "Implantologia orală oferă soluții moderne și eficiente pentru înlocuirea dinților pierduți, iar sistemul Straumann (Elveția) reprezintă standardul de excelență în acest domeniu. Renumit pentru calitatea superioară, precizia și durabilitatea sa, Straumann este lider mondial în implantologie, oferind rezultate sigure și de lungă durată.",

    href: "/servicii/implantologie",
  },
  {
    id: "reabilitare",
    title: "Reabilitare Implanto-Protetică",
    description:
      "Sistemul All-on-4/6 by Straumann este o soluție revoluționară pentru pacienții edentați total sau parțial, care doresc să-și recapete zâmbetul și funcționalitatea dentară într-un timp scurt. Această tehnică avansată permite fixarea unei lucrări protetice complete pe doar 4 sau 6 implanturi dentare, utilizând tehnologia de top Straumann pentru rezultate sigure, estetice și de lungă durată.",

    href: "/servicii/reabilitare",
  },
];

export const ServicesSection3 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMapOptions, setShowMapOptions] = useState(false);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Header */}
            <div className={styles.header}>
              <span className={styles.label}>Servicii Stomatologice</span>
              <h2 className={styles.title}>Serviciile Noastre</h2>
              <p className={styles.description}>
                Îngrijire stomatologică completă adaptată nevoilor tale. De la
                prevenție la tratamente avansate, suntem aici pentru sănătatea
                ta orală.
              </p>
              {/* <div className={styles.contactBox}>
                <p>Aveți alte întrebări?</p>
                <a href={`tel:${PHONE_NUMBER}`}>Sunați-ne: {PHONE_NUMBER}</a>
              </div> */}
            </div>

            {/* Accordion */}
            <div className={styles.accordion}>
              {services.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  <button
                    className={`${styles.accordionTrigger} ${
                      openIndex === index ? styles.open : ""
                    }`}
                    onClick={() => toggleItem(index)}
                  >
                    {item.title}
                    <ChevronDown />
                  </button>
                  {openIndex === index && (
                    <div className={styles.accordionContent}>
                      <p>{item.description}</p>
                      {item.href && (
                        <div className={styles.locationButtonWrapper}>
                          <Link href={item.href} className={styles.ctaSecondary}>Vezi Detalii</Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
