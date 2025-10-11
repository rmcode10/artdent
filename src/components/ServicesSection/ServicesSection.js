"use client";
import React, { useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import ServiceCard from "./components/ServiceCard";
import styles from "./scss/ServicesSection.module.scss";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import { services } from "./ServicesSection.utils";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const serviceRef = useRef(null);

  const scrollToSection = () => {
    serviceRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Wrapper>
      <div>
        <SectionTitle title="Serviciile Noastre" />
        <div className={styles.servicesGrid}>
          <div className={styles.servicesList}>
            {services.map((service) => (
              <button
                key={service.title}
                className={styles.serviceButton}
                onClick={() => {
                  setSelectedService(service);
                  scrollToSection();
                }}
              >
                {service.title}
              </button>
            ))}
          </div>
          <ServiceCard service={selectedService} ref={serviceRef} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
