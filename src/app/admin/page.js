import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import styles from "./scss/AdminPage.module.scss";
import Link from "next/link";

const AdminPage = () => {
  return (
    <Wrapper>
      <div className={styles.adminPageContainer}>
        <div className={styles.adminPageLinks}>
          <Link href={"/admin/programari"}>Programari</Link>
          <Link href={"/admin/preturi"}>Preturi</Link>
        </div>
        <div className={styles.adminPageContent}></div>
      </div>
    </Wrapper>
  );
};

export default AdminPage;
