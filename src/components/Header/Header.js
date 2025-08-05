"use client";

import React, { useState } from "react";
import cx from "clsx";
import styles from "./scss/Header.module.scss";
import globalClasses from "@/scss/Global.module.scss";
import { ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from "@/consts/general";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import Wrapper from "../Wrapper/Wrapper";
import MenuButtonMobile from "./components/MenuButtonMobile/MenuButtonMobile";
import DesktopNavbar from "./components/DesktopNavbar/DesktopNavbar";
import Button from "../Common/Button/Button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileNavbarActive, setisMobileNavbarActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContacts}>
        <Wrapper>
          <div className={cx(styles.headerContactsContent)}>
            <div className={styles.contacts}>
              <p className={styles.contactItem}>
                <PhoneIcon /> <span>{PHONE_NUMBER}</span>
              </p>
              <p className={cx(styles.contactItem, globalClasses.desktopOnlyFlex)}>
                <EmailIcon /> <span>{EMAIL_ADDRESS}</span>
              </p>
              <p className={cx(styles.contactItem)}>
                <LocationIcon /> <span>{ADDRESS}</span>
              </p>
            </div>
            <div className={styles.socials}>
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.headerNavbar}>
        <Wrapper>
          <div className={styles.headerNavbarContent}>
            <Link className={styles.logo} href="/">
              <Image src="/logos/headerLogo.svg" alt="ArtDent Logo" fill />
            </Link>
            <MenuButtonMobile
              isActive={isMobileNavbarActive}
              setIsActive={setisMobileNavbarActive}
            />
            <DesktopNavbar />
            <Button className={styles.desktopAppointmentBtn}>
              Fa o programare
            </Button>
          </div>
        </Wrapper>
      </div>
    </header>
  );
};

export default Header;
