"use client";
import React, { useState } from "react";
import cx from "clsx";
import styles from "./DesktopNavbar.module.scss";
import { navList } from "../MobileNavbar/MobileNavbar.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allPages } from "../../Header.utils";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";

const DesktopNavbar = ({ searchOpen }) => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActiveLink = (item) => {
    return pathname === item.href;
  };

  return (
    <div className={styles.desktopNavbar}>
      <ul className={cx(styles.navBarList, searchOpen && styles.withSearch)}>
        {navList.map((item) => {
          if (item.subpages) {
            return (
              <li key={item.label} className={styles.navBarItem}>
                <div
                  className={styles.dropdownWrapper}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button>
                    {item.label}
                    <span>
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
                          styles.submenuItem,
                          index === 0 && styles.roundedItemTop,
                          index === item.subpages.length - 1 &&
                            styles.roundedItemBottom,
                        )}
                      >
                        <Link href={subpage.href}>{subpage.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          }

          return (
            <li key={item.label} className={styles.navBarItem}>
              <Link
                href={item.href}
                className={cx({ [styles.isActive]: isActiveLink(item) })}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
