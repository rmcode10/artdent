import StarIcon from "@/assets/icons/StarIcon";
import React from "react";
import styles from "../scss/ReviewSection.module.scss";
import Image from "next/image";

const ReviewCard = ({ review }) => {
  const getNameInitials = (name) => {
    const names = name.charAt(0);
    return names;
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <span className={styles.nameInitial}>
          {getNameInitials(review.name)}
        </span>
        <h3>{review.name}</h3>
        <div className={styles.starRating}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <p className={styles.reviewText}>{review.text}</p>
      <div className={styles.reviewFooter}>
        <div className={styles.googleLogo}>
          <Image src="/google.png" fill alt="Google Logo" />
        </div>
        <span className={styles.location}>Google Review</span>
      </div>
    </div>
  );
};

export default ReviewCard;
