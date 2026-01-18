"use client"
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import styles from "../scss/ServicePage.module.scss";
import ContactLayout from "@/components/Common/ContactLayout.js/ContactLayout";
import Info from "../components/Info";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import { ADDRESS, EMAIL_ADDRESS, GOOGLE_MAPS_URL, PHONE_NUMBER, PRIMARY_COLOR } from "@/consts/general";
import EmailIcon from "@/assets/icons/EmailIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";

const ServicePageLayout = ({ children, image }) => {
  const phoneIcon = (
    <PhoneIcon color={PRIMARY_COLOR} width="100%" height="30px" />
  );
  const emailIcon = (
    <EmailIcon color={PRIMARY_COLOR} width="100%" height="30px" />
  );
  const locationIcon = (
    <LocationIcon color={PRIMARY_COLOR} width="100%" height="30px" />
  );
  const facebookIcon = (
    <FacebookIcon color={PRIMARY_COLOR} width="100%" height="30px" />
  );

  return (
    <Wrapper>
      <div className={styles.servicePageContainer}>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceHeader}>
            <div className={styles.serviceImageContainer}>{image}</div>
            <div className={styles.infosContainer}>
              <Info
                icon={phoneIcon}
                text={`Telefon: ${PHONE_NUMBER}`}
                onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
              />
              <Info icon={emailIcon} text={`Email: ${EMAIL_ADDRESS}`} onClick={() => window.location.href = `mailto:${EMAIL_ADDRESS}`} />
              <Info
                icon={locationIcon}
                text={`Adresa: ${ADDRESS}`}
                onClick={() => window.open(GOOGLE_MAPS_URL, '_blank')}
              />
              <Info
                icon={facebookIcon}
                text="Clinica ArtDent - Valea Lupului "
                onClick={() => window.open("https://www.facebook.com/ClinicaArtDentIasi/", '_blank')}
              />
            </div>
          </div>
          {children}
        </div>
        <ContactLayout />
      </div>
    </Wrapper>
  );
};

export default ServicePageLayout;
