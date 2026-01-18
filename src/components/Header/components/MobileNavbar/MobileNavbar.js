"use client";
import React, { useEffect, useState } from "react";
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
  GOOGLE_MAPS_URL,
  PHONE_NUMBER,
  PRIMARY_COLOR,
} from "@/consts/general";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollTo } from "@/hooks/useScrollTo";
import SearchIcon from "@/assets/icons/SearchIcon";
import { allPages } from "../../Header.utils";
import SadFaceIcon from "@/assets/icons/SadFaceIcon";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";

const MobileNavbar = ({ isActive, setIsActive }) => {
  const pathname = usePathname();
  const scrollToAppointment = useScrollTo("appointment");
  const [searchWord, setSearchWord] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const searchResults = allPages.filter((page) =>
    page.label.toLowerCase().includes(searchWord.toLowerCase()),
  );

  const isActiveLink = (item) => {
    return pathname === item.href;
  };

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

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
            <Image src="/logos/headerLogo.svg" alt="ArtDent Logo" fill />
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
              navList.map((item) => {
                if (item.subpages) {
                  return (
                    <li key={item.label} className={styles.navBarItem}>
                      <div className={styles.dropdownWrapper}>
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          {item.label}
                          <span
                            className={cx(isDropdownOpen && styles.iconOpen)}
                          >
                            <ArrowDownIcon
                              styles={{ width: "10px", height: "10px" }}
                            />
                          </span>
                        </button>

                        <ul
                          className={`${styles.submenuList} ${
                            isDropdownOpen ? styles.open : ""
                          }`}
                        >
                          {item.subpages.map((subpage, index) => (
                            <li
                              key={subpage.label}
                              className={cx(
                                styles.navBarItem,
                                index === 0 && styles.roundedItemTop,
                                index === item.subpages.length - 1 &&
                                  styles.roundedItemBottom,
                              )}
                            >
                              <Link
                                href={subpage.href}
                                onClick={() => {
                                  setIsActive(false);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                {subpage.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                return (
                  <li
                    key={item.label}
                    className={cx(isActiveLink(item) && styles.isActive)}
                  >
                    <button onClick={() => setIsActive(false)}>
                      <Link href={item.href}>{item.label}</Link>
                    </button>
                  </li>
                );
              })}
          </ul>
          <div className={styles.contactInfo}>
            <Button className={styles.appointmentBtn} onClick={() => {
              setIsActive(false);
              scrollToAppointment();
            }}>Fa o programare</Button>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <PhoneIcon color={PRIMARY_COLOR} />
                <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              </div>
              <div className={styles.contactItem}>
                <EmailIcon color={PRIMARY_COLOR} />
                <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
              </div>
              <div className={styles.contactItem}>
                <LocationIcon color={PRIMARY_COLOR} />
                <a href={GOOGLE_MAPS_URL} target="_blank">
                  {ADDRESS}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
