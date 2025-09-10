"use client";
import React from "react";
import CategoryCard from "./components/CategoryCard";
import styles from "./scss/Tarife.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import ContactLayout from "../Common/ContactLayout.js/ContactLayout";
import { useServices } from "./hooks/useServices";

const Tarife = () => {
  const { grouppedData } = useServices();

  return (
    <Wrapper>
      <div className={styles.tarifePageContainer}>
        <div className={styles.tarifeContainer}>
          <h1 className={styles.title}>Lista Preturi Stomatologice</h1>
          {grouppedData.map((item, index) => (
            <CategoryCard
              key={index}
              category={item.name}
              services={item.services}
            />
          ))}
        </div>
        <ContactLayout />
      </div>
    </Wrapper>
  );
};

export default Tarife;
