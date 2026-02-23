"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Navigation } from "lucide-react";
import styles from "./Faq.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { PHONE_NUMBER } from "@/consts/general";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Clinica+ArtDent+-+Valea+Lupului/@47.1829979,27.5152157,112m/data=!3m1!1e3!4m6!3m5!1s0x40cae5e9f837e2c7:0x94c41c380120a837!8m2!3d47.1829666!4d27.5154243!16s%2Fg%2F11vm7njwk4";
const WAZE_URL = "https://waze.com/ul?ll=47.1829666,27.5154243&navigate=yes";

const faqData = [
  {
    question: "Unde se află Clinica Artdent?",
    answer:
      "Clinica dentară Artdent este situată în Valea Lupului, Județul Iași, pe strada Nufărului numărul 9, bloc Soleia 5, într-o zonă ușor accesibilă. Punct de reper: Restaurant Amis. Indiferent dacă vii cu mașina sau transport public, locația noastră este convenabilă pentru toți pacienții.",
    hasLocationButton: true,
  },
  {
    question: "De ce pot avea încredere în medicii de la Clinica Artdent?",
    answer:
      "La Clinica Artdent, vei fi tratat de o echipă de profesioniști dedicați, pasionați de sănătatea orală. Ne perfecționăm constant în a oferi cele mai bune soluții stomatologice pentru tine.",
  },
  {
    question: "Ce servicii oferă Clinica stomatologică Artdent?",
    answer:
      "Clinica Artdent oferă o gamă completă de servicii stomatologice, incluzând: consultații de rutină, igienizare profesională, endodonție, protetică dentară, ortodonție, implantologie și chirurgie orală.",
  },
  {
    question: "Cum fac o programare?",
    answer:
      `Pentru a te putea programa la un medic stomatolog din clinică, ne poți contacta telefonic la ${PHONE_NUMBER}, sau printr-un mesaj pe rețelele sociale. În urma solicitării, echipa noastră îți va confirma disponibilitatea și va stabili cu tine data și ora potrivită`,
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMapOptions, setShowMapOptions] = useState(false);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openInGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL);
    setShowMapOptions(false);
  };

  const openInWaze = () => {
    window.open(WAZE_URL);
    setShowMapOptions(false);
  };

  return (
    <Wrapper>
      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Header */}
            <div className={styles.header}>
              <span className={styles.label}>Întrebări Frecvente</span>
              <h2 className={styles.title}>FAQ</h2>
              <p className={styles.description}>
                Găsiți răspunsuri la întrebările frecvente despre serviciile
                noastre dentare, proceduri și îngrijire. Nu găsiți ce căutați?
                Contactați-ne direct.
              </p>
              <div className={styles.contactBox}>
                <p>Aveți alte întrebări?</p>
                <a href={`tel:${PHONE_NUMBER}`}>Sunați-ne: {PHONE_NUMBER}</a>
              </div>
            </div>

            {/* Accordion */}
            <div className={styles.accordion}>
              {faqData.map((item, index) => (
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
                    {item.question}
                    <ChevronDown />
                  </button>
                  {openIndex === index && (
                    <div className={styles.accordionContent}>
                      <p>{item.answer}</p>
                      {item.hasLocationButton && (
                        <div className={styles.locationButtonWrapper}>
                          <button
                            className={styles.locationButton}
                            onClick={() => setShowMapOptions(!showMapOptions)}
                          >
                            <MapPin size={18} />
                            Deschide Harta
                            <ChevronDown
                              size={16}
                              className={showMapOptions ? styles.rotated : ""}
                            />
                          </button>
                          {showMapOptions && (
                            <div className={styles.mapOptions}>
                              <button onClick={openInGoogleMaps}>
                                <MapPin size={16} />
                                Google Maps
                              </button>
                              <button onClick={openInWaze}>
                                <Navigation size={16} />
                                Waze
                              </button>
                            </div>
                          )}
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
