import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import ServiceCard from "./components/ServiceCard";
import styles from "./scss/ServicesSection.module.scss";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import { services } from "./ServicesSection.utils";
import Link from "next/link";

const ServicesSection = () => {
  const servicesToShow = services.slice(0, 6);
  
  return (
    <Wrapper>
      <div>
        <SectionTitle title="Serviciile Noastre" />
        <div className={styles.servicesGrid}>
          {servicesToShow.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <Link href="/servicii" className={styles.button}>
          Vezi toate serviciile
        </Link>
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
