"use client";
import { useRef, useState } from "react";
import {
  Shield,
  FileHeart,
  Smile,
  Baby,
  Sparkles,
  Crown,
  Scissors,
  Wrench,
  Settings,
} from "lucide-react";
import styles from "./scss/ServicesSection2.module.scss";
import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";
import { useScrollTo } from "@/hooks/useScrollTo";

const services = [
  {
    id: "profilaxie",
    icon: Shield,
    title: "Profilaxie",
    description:
      "Profilaxia dentară reprezintă fundația sănătății orale și include o serie de proceduri menite să prevină apariția cariilor, a bolilor gingivale și a altor probleme dentare. În cadrul clinicii noastre stomatologice, ne dedicăm să vă oferim cele mai moderne tehnici de prevenție și îngrijire.",
    href: "/servicii/profilaxie",
  },
  {
    id: "endodontie",
    icon: FileHeart,
    title: "Endodonție",
    description:
      "Endodonția, cunoscută și sub denumirea de tratament de canal, este o procedură stomatologică esențială pentru salvarea dinților grav afectați de carii profunde sau infecții ale pulpei dentare. Această intervenție presupune curățarea și sigilarea canalelor radiculare pentru a preveni extinderea infecției și a proteja dintelui natural.",
    href: "/servicii/endodontie",
  },
  {
    id: "ortodontie",
    icon: Smile,
    title: "Ortodonție",
    description:
      "Ortodonția este ramura stomatologiei care se ocupă de diagnosticarea, prevenirea și corectarea poziției dinților și a maxilarelor. Un zâmbet aliniat corect nu este doar estetic, ci și esențial pentru sănătatea orală și funcționalitatea ocluziei.",
    href: "/servicii/ortodontie",
  },
  {
    id: "pedodontie",
    icon: Baby,
    title: "Pedodonție",
    description:
      "Pedodonția se concentrează pe sănătatea orală a copiilor, de la primii dinți până la adolescență. În clinica noastră, oferim servicii precum controale periodice, sigilări dentare, fluorizare și tratamentul cariilor, toate adaptate nevoilor copiilor.",
    href: "/servicii/pedodontie",
  },
  {
    id: "estetica",
    icon: Sparkles,
    title: "Estetică Dentară",
    description:
      "Estetica dentară îmbină arta și știința pentru a oferi zâmbetul dorit. În clinica noastră, transformăm zâmbetele prin servicii precum albirea dentară, fațetele dentare, bonding-ul estetic și reconturarea gingivală.",

    href: "/servicii/estetica",
  },
  {
    id: "protetica",
    icon: Crown,
    title: "Protetică",
    description:
      "Protetica dentară se concentrează pe refacerea dinților pierduți sau deteriorați, redând atât funcționalitatea, cât și aspectul natural al zâmbetului. În clinica noastră, oferim soluții personalizate, precum coroane, punți dentare, proteze mobile și lucrări pe implanturi, utilizând materiale de înaltă calitate și tehnologie avansată.",

    href: "/servicii/protetica",
  },
  {
    id: "chirurgie",
    icon: Scissors,
    title: "Chirurgie Orală",
    description:
      "Chirurgia orală include intervenții specializate pentru rezolvarea problemelor dentare complexe, precum extracțiile molarilor de minte, tratamentul chisturilor maxilare, inserarea implanturilor dentare și corectarea anomaliilor orale.",

    href: "/servicii/chirurgie",
  },
  {
    id: "implantologie",
    icon: Wrench,
    title: "Implantologie",
    description:
      "Implantologia orală oferă soluții moderne și eficiente pentru înlocuirea dinților pierduți, iar sistemul Straumann (Elveția) reprezintă standardul de excelență în acest domeniu. Renumit pentru calitatea superioară, precizia și durabilitatea sa, Straumann este lider mondial în implantologie, oferind rezultate sigure și de lungă durată.",

    href: "/servicii/implantologie",
  },
  {
    id: "reabilitare",
    icon: Settings,
    title: "Reabilitare Implanto-Protetică",
    description:
      "Sistemul All-on-4/6 by Straumann este o soluție revoluționară pentru pacienții edentați total sau parțial, care doresc să-și recapete zâmbetul și funcționalitatea dentară într-un timp scurt. Această tehnică avansată permite fixarea unei lucrări protetice complete pe doar 4 sau 6 implanturi dentare, utilizând tehnologia de top Straumann pentru rezultate sigure, estetice și de lungă durată.",

    href: "/servicii/reabilitare",
  },
];

export const ServicesSection2 = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const scrollToServiceDetails = useScrollTo("serviceDetails");

  return (
    <Wrapper>
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.header}>
            <span className={styles.label}>Serviciile Noastre</span>
            <h2 className={styles.title}>Servicii Stomatologice</h2>
            <p className={styles.subtitle}>
              Îngrijire dentară completă adaptată nevoilor tale. De la prevenție
              la tratamente avansate, suntem aici pentru sănătatea ta orală.
            </p>
          </div>

          {/* Services Grid */}
          <div className={styles.grid}>
            {/* Service Buttons */}
            <div className={styles.servicesGrid}>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setActiveService(service);
                      if (window.innerWidth < 1024) {
                        scrollToServiceDetails();
                      }
                    }}
                    className={`${styles.serviceButton} ${
                      activeService.id === service.id ? styles.active : ""
                    }`}
                  >
                    <Icon className={styles.serviceIcon} />
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </button>
                );
              })}
            </div>

            {/* Service Details */}
            <div
              className={styles.details}
              key={activeService.id}
              id="serviceDetails"
            >
              <div className={styles.detailsHeader}>
                <div className={styles.detailsIconWrapper}>
                  <activeService.icon />
                </div>
                <h3 className={styles.detailsTitle}>{activeService.title}</h3>
              </div>

              <p className={styles.detailsDescription}>
                {activeService.description}
              </p>

              <Link href={activeService.href} className={styles.serviceLink}>
                Vezi detalii
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
