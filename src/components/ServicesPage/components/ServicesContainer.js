import React from "react";
import styles from "../scss/Services.module.scss";
import Image from "next/image";
import Link from "next/link";

const ServicesContainer = ({ services }) => {
  return (
    <div className={styles.servicesContainer}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceBox}>
          <div className={styles.serviceImageContainer}>
            <Image
              fill
              src={service.image}
              alt={service.title}
              className={styles.serviceImage}
            />
          </div>
          <div className={styles.serviceContent}>
            <h2>{service.title}</h2>
            <p
              style={
                service.customTextHeight
                  ? { maxHeight: service.customTextHeight }
                  : undefined
              }
            >
              {service.longDescription}
            </p>
            <Link href={service.href} className={styles.serviceLink}>
              Detalii
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesContainer;
