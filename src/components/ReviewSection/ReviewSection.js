"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Wrapper from "../Wrapper/Wrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ReviewCard from "./components/ReviewCard";
import styles from "./scss/ReviewSection.module.scss";
import { reviews } from "./ReviewSection.utils";

const ReviewSection = () => {
  return (
    <>
      <SectionTitle title="Părerile Pacienților" />
      <div className={styles.reviewsContainer}>
        <Wrapper>
          <div className={styles.reviewCardsContainer}>
            <Marquee gradient={false} speed={70} pauseOnHover={true}>
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </Marquee>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ReviewSection;
