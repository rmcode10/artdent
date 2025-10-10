"use client";

import React, { useEffect, useState } from "react";
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
import SearchIcon from "@/assets/icons/SearchIcon";
import SadFaceIcon from "@/assets/icons/SadFaceIcon";
import { allPages } from "./Header.utils";

const Header = () => {
  const [isMobileNavbarActive, setisMobileNavbarActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const searchResults = allPages.filter((page) =>
    page.label.toLowerCase().includes(searchWord.toLowerCase()),
  );

  useEffect(() => {
    if (isMobileNavbarActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavbarActive]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContacts}>
        <Wrapper>
          <div className={cx(styles.headerContactsContent)}>
            <div className={styles.contacts}>
              <p className={styles.contactItem}>
                <PhoneIcon /> <span>{PHONE_NUMBER}</span>
              </p>
              <p
                className={cx(
                  styles.contactItem,
                  globalClasses.desktopOnlyFlex,
                )}
              >
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
              <Image
                src="/logos/headerLogo.svg"
                alt="ArtDent Logo"
                fill
                className={cx(
                  styles.logoImage,
                  searchOpen && styles.withSearch,
                )}
              />
            </Link>
            <MenuButtonMobile
              isActive={isMobileNavbarActive}
              setIsActive={setisMobileNavbarActive}
            />
            <DesktopNavbar searchOpen={searchOpen} />
            <div className={styles.searchContainer}>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="Caută..."
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  className={cx(styles.searchInput, {
                    [styles.active]: searchOpen,
                  })}
                />
                {searchWord.length >= 1 && (
                  <ul className={styles.searchSuggestions}>
                    {searchResults.length > 0 ? (
                      searchResults.map((page) => {
                        return (
                          <li key={page.href} className={styles.suggestionItem}>
                            <Link
                              href={page.href}
                              className={styles.suggestionLink}
                              onClick={() => {
                                setSearchWord("");
                                setSearchOpen(false);
                              }}
                            >
                              {page.label}
                            </Link>
                          </li>
                        );
                      })
                    ) : (
                      <li
                        className={cx(styles.suggestionItem, styles.noResults)}
                      >
                        Nu au fost găsite rezultate{" "}
                        <SadFaceIcon styles={{ width: "20px" }} />
                      </li>
                    )}
                  </ul>
                )}
                <button
                  className={styles.searchButton}
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    setSearchWord("");
                  }}
                >
                  <SearchIcon styles={{ width: "20px" }} />
                </button>
              </div>
              <Button className={styles.desktopAppointmentBtn}>
                <Link href="/programare">Programează-te</Link>
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </header>
  );
};

export default Header;
