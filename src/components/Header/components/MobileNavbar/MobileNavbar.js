import React from "react";
import cx from "clsx";
import styles from "./MobileNavbar.module.scss";
import { navList } from "./MobileNavbar.utils";
import Button from "@/components/Common/Button/Button";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import {
  ADDRESS,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  PRIMARY_COLOR,
} from "@/consts/general";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = ({ isActive, setIsActive }) => {
  return (
    <>
      {isActive && <div className={styles.mobileLayout}></div>}
      <div
        className={cx(styles.mobileNavbarContainer, isActive && styles.active)}
      >
        <button
          className={styles.closeButton}
          onClick={() => setIsActive(false)}
        >
          X
        </button>
        <div className={styles.mobileNavbarContent}>
          <div className={styles.logo}>
            <Image
              src="/logos/verticalLogo.jpeg"
              alt="ArtDent Logo"
              fill
            />
          </div>
          <ul className={styles.navList}>
            {navList.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.contactInfo}>
            <Button className={styles.appointmentBtn}>Fa o programare</Button>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <PhoneIcon color={PRIMARY_COLOR} />
                <span>{PHONE_NUMBER}</span>
              </div>
              <div className={styles.contactItem}>
                <EmailIcon color={PRIMARY_COLOR} />
                <span>{EMAIL_ADDRESS}</span>
              </div>
              <div className={styles.contactItem}>
                <LocationIcon color={PRIMARY_COLOR} />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
