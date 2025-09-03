"use client";
import React, { useState } from "react";
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
import { usePathname } from "next/navigation";
import SearchIcon from "@/assets/icons/SearchIcon";
import { allPages } from "../../Header.utils";
import SadFaceIcon from "@/assets/icons/SadFaceIcon";

const MobileNavbar = ({ isActive, setIsActive }) => {
  const pathname = usePathname();
  const [searchWord, setSearchWord] = useState("");

  const searchResults = allPages.filter((page) =>
    page.label.toLowerCase().includes(searchWord.toLowerCase()),
  );

  const isActiveLink = (item) => {
    return pathname === item.href;
  };

  return (
    <>
      {isActive && <div className={styles.mobileLayout}></div>}
      <div
        className={cx(styles.mobileNavbarContainer, isActive && styles.active)}
      >
        <button
          className={styles.closeButton}
          onClick={() => {
            setIsActive(false);
            setSearchWord("");
          }}
        >
          X
        </button>
        <div className={styles.mobileNavbarContent}>
          <div className={styles.logo}>
            <Image src="/logos/verticalLogo.jpeg" alt="ArtDent Logo" fill />
          </div>

          <ul className={styles.navList}>
            <li className={styles.searchListItem}>
              <div className={styles.searchWrapper}>
                <div className={styles.searchContainer}>
                  <SearchIcon
                    styles={{
                      position: "absolute",
                      left: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "20px",
                    }}
                    color={"#afb084"}
                  />
                  <input
                    type="text"
                    name="search"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    className={cx(styles.searchInput)}
                    placeholder="Caută..."
                    autoComplete="off"
                  />
                </div>

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
                                setIsSearchActive(false);
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
              </div>
            </li>
            {searchWord.length <= 0 &&
              navList.map((item) => (
                <li
                  key={item.label}
                  className={cx(isActiveLink(item) && styles.isActive)}
                >
                  <button onClick={() => setIsActive(false)}>
                    <Link href={item.href}>{item.label}</Link>
                  </button>
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
