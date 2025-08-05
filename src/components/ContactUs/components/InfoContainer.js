import EmailIcon from "@/assets/icons/EmailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import React from "react";
import styles from "./InfoContainer.module.scss";
import { EMAIL_ADDRESS, PHONE_NUMBER, PRIMARY_COLOR } from "@/consts/general";
import Image from "next/image";

const InfoContainer = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.verticalLogo}>
        <Image
          src="/logos/verticalLogo.jpeg"
          fill
          alt="ArtDent Vertical Logo"
        />
      </div>
      <div>
        <p>
          Completează formularul și vei primi un telefon din partea colegilor
          noștri pentru a stabili detaliile finale necesare efectuării
          programării.
        </p>
        <div>
          <div className={styles.contactItem}>
            <PhoneIcon color={PRIMARY_COLOR} />
            <span>Telefon: {PHONE_NUMBER}</span>
          </div>
          <div className={styles.contactItem}>
            <EmailIcon color={PRIMARY_COLOR} />
            <span>Email: {EMAIL_ADDRESS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
