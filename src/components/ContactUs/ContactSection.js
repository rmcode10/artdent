import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import styles from "./scss/ContactSection.module.scss";
import InfoContainer from "./components/InfoContainer";
import ContactForm from "./components/ContactForm";

const ContactSection = () => {
  return (
    <Wrapper>
      <div>
        <SectionTitle title="Hai sa ne cunoastem" />
        <div className={styles.contactContainer}>
          <InfoContainer />
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactSection;
