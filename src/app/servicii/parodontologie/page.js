import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Parodontologie = () => {
  const img = services[9].image;
  const otherServices = services.filter(
    (service) => service.title !== "Parodontologie",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Parodontologie" />}>
      <h1>Parodontologie – Sănătatea gingiilor, cheia unui zâmbet durabil</h1>
      <p>
        Parodontologia este specialitatea stomatologică dedicată sănătății
        gingiilor și a țesuturilor care susțin dinții. Această ramură a
        medicinei dentare oferă soluții pentru prevenirea și tratarea
        problemelor precum sângerările gingivale, inflamațiile sau retracțiile
        gingivale, care pot afecta atât estetica zâmbetului, cât și stabilitatea
        dinților.
      </p>
      <p>
        Prin tratamente moderne și personalizate, parodontologia ajută la
        redarea confortului, la menținerea dinților naturali și la obținerea
        unui zâmbet sănătos și armonios pe termen lung.
      </p>

      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Parodontologie;
