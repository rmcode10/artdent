import React from "react";
import CategoryCard from "./components/CategoryCard";
import styles from "./scss/Tarife.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { tarife } from "./Tarife.utils";
import ContactLayout from "../Common/ContactLayout.js/ContactLayout";

const Tarife = () => {
  return (
    <Wrapper>
      <div className={styles.tarifePageContainer}>
        <div className={styles.tarifeContainer}>
          <h1 className={styles.title}>Lista Preturi Stomatologice</h1>
          {tarife.map((item, index) => (
            <CategoryCard
              key={index}
              category={item.category}
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
