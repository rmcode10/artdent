import React from "react";
import CategoryCard from "./components/CategoryCard";
import styles from "./scss/Tarife.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { tarife } from "./Tarife.utils";

const Tarife = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Tarife;
