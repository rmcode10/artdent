import React from "react";
import styles from "./DesktopNavbar.module.scss";
import { navList } from "../MobileNavbar/MobileNavbar.utils";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <div className={styles.desktopNavbar}>
      <ul className={styles.navBarList}>
        {navList.map((item) => (
          <li key={item.label} className={styles.navBarItem}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
