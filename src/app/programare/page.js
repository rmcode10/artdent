import ContactLayout from "@/components/Common/ContactLayout.js/ContactLayout";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import styles from "./scss/Programare.module.scss";
import ContactForm from "@/components/ContactUs/components/ContactForm";
import InfoContainer from "@/components/ContactUs/components/InfoContainer";
import Image from "next/image";

const page = () => {
  return (
    <Wrapper>
      <div className={styles.programarePageContainer}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <Image src="/logos/contactPageLogo.svg" alt="ArtDent Logo" fill />
          </div>
          <InfoContainer noLogo />
          <ContactForm />
        </div>
        <ContactLayout />
      </div>
    </Wrapper>
  );
};

export default page;
