"use client";
import React from "react";
import cx from "clsx";
import styles from "./DesktopNavbar.module.scss";
import { navList } from "../MobileNavbar/MobileNavbar.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavbar = () => {
  const pathname = usePathname();
  
    const isActiveLink = (item) => {    
      return pathname === item.href;
    };

  return (
    <div className={styles.desktopNavbar}>
      <ul className={styles.navBarList}>
        {navList.map((item) => (
          <li key={item.label} className={styles.navBarItem}>
            <Link href={item.href} className={cx({ [styles.isActive]: isActiveLink(item) })}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
