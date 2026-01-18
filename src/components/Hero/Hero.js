"use client";

import { ArrowRight, Star } from "lucide-react";
import heroImage from "../../../public/images/HeroPhoto.jpg";
import styles from "./Hero.module.scss";
import Link from "next/link";
import { useScrollTo } from "@/hooks/useScrollTo";

export const Hero = () => {
  const scrollToAppointment = useScrollTo("appointment")
  const scrollToServices = useScrollTo("services")
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Headline */}
          <h1 className={styles.headline}>
            Zambetul tau,{" "}
            <span className={styles.highlight}>Pasiunea Noastra</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Echipa noastră de experți este dedicată să vă ofere zâmbetul perfect
            și sănătos pe care îl meritați.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <button onClick={scrollToAppointment} className={styles.ctaPrimary}>
              Fă o Programare
              <ArrowRight />
            </button>
            <button onClick={scrollToServices} className={styles.ctaSecondary}>
              Explorează Serviciile
            </button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <p>3+</p>
              <p>Ani Experiență</p>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <p>1,000+</p>
              <p>Pacienți Fericiți</p>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <p>5+</p>
              <p>Medici Experți</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.bottomGradient} />
    </section>
  );
};
