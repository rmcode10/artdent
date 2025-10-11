import React, { forwardRef } from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = forwardRef(({ service }, ref) => {
  return (
    <div className={styles.serviceCard} ref={ref}>
      <div className={styles.imageContainer}>
        <Image src={service.image} alt={service.title} fill />
      </div>

      <div className={styles.serviceContent}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link href={service.href} className={styles.serviceLink}>
          Vezi detalii
        </Link>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
