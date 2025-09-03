"use client";
import Wrapper from "@/components/Wrapper/Wrapper";
import cx from "clsx";
import Link from "next/link";
import React from "react";
import styles from "../scss/AdminPage.module.scss";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children, contentClassName }) => {
  const pathname = usePathname();
  const isActivePage = (path) => {
    return pathname === path;
  };
  return (
    <Wrapper>
      <div className={styles.adminPageContainer}>
        <div className={styles.adminPageLinks}>
          <Link
            href={"/admin/programari"}
            className={cx({
              [styles.active]: isActivePage("/admin/programari"),
            })}
          >
            Programari
          </Link>
          <Link
            href={"/admin/preturi"}
            className={cx({ [styles.active]: isActivePage("/admin/preturi") })}
          >
            Preturi
          </Link>
        </div>
        <div className={cx(styles.adminPageContent, contentClassName)}>
          {children}
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminLayout;
