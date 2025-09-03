"use client";
import React, { useState } from "react";
import cx from "clsx";
import styles from "./DesktopNavbar.module.scss";
import { navList } from "../MobileNavbar/MobileNavbar.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "@/assets/icons/SearchIcon";
import { allPages } from "../../Header.utils";
import SadFaceIcon from "@/assets/icons/SadFaceIcon";

const DesktopNavbar = () => {
  const pathname = usePathname();
  const [searchWord, setSearchWord] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const isActiveLink = (item) => {
    return pathname === item.href;
  };

  const searchResults = allPages.filter((page) =>
    page.label.toLowerCase().includes(searchWord.toLowerCase()),
  );

  return (
    <div className={styles.desktopNavbar}>
      <ul className={styles.navBarList}>
        {navList.map((item) => (
          <li key={item.label} className={styles.navBarItem}>
            <Link
              href={item.href}
              className={cx({ [styles.isActive]: isActiveLink(item) })}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <input
            type="text"
            name="search"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            className={cx(styles.searchInput, {
              [styles.active]: isSearchActive,
            })}
            placeholder="Caută..."
            autoComplete="off"
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
                          setIsSearchActive(false);
                        }}
                      >
                        {page.label}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li className={cx(styles.suggestionItem, styles.noResults)}>
                  Nu au fost găsite rezultate{" "}
                  <SadFaceIcon styles={{ width: "20px" }} />
                </li>
              )}
            </ul>
          )}
          <button
            className={styles.searchButton}
            onClick={() => {
              setIsSearchActive(!isSearchActive);
              setSearchWord("");
            }}
          >
            <SearchIcon styles={{ width: "20px" }} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavbar;
