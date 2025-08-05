import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import styles from "../scss/ServicePage.module.scss";
import ContactLayout from "@/components/Common/ContactLayout.js/ContactLayout";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import Info from "../components/Info";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import { PRIMARY_COLOR } from "@/consts/general";
import EmailIcon from "@/assets/icons/EmailIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";

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

  const otherServices = services.filter(
    (service) => service.title !== "Profilaxie dentară",
  );

  return (
    <Wrapper>
      <div className={styles.servicePageContainer}>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceHeader}>
            <div className={styles.serviceImageContainer}>{image}</div>
            <div className={styles.infosContainer}>
              <Info icon={phoneIcon} text="Telefon: 0712 345 678" />
              <Info icon={emailIcon} text="Email: contact@artdent.ro" />
              <Info
                icon={locationIcon}
                text="Str Nufarului, Nr 9, Valea Lupului"
              />
              <Info
                icon={facebookIcon}
                text="Clinica ArtDent - Valea Lupului "
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
