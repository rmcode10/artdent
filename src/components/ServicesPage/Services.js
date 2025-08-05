import React from "react";
import ContactLayout from "../Common/ContactLayout.js/ContactLayout";
import ServicesContainer from "./components/ServicesContainer";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./scss/Services.module.scss";
import { services } from "../ServicesSection/ServicesSection.utils";

const Services = () => {
  return (
    <Wrapper>
      <div className={styles.servicesPageContainer}>
        <ServicesContainer services={services} />
        <ContactLayout />
      </div>
    </Wrapper>
  );
};

export default Services;
