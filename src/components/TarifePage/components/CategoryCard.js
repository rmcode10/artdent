import React from "react";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category, services }) => {
  return (
    <div className={styles.categoryCard}>
      <h2>{category}</h2>
      <table>
        <thead>
          <tr>
            <th>Denumire Serviciu</th>
            <th className={styles.priceColumn}>Preț</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td className={styles.priceColumn}>{service.price} ron</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryCard;
