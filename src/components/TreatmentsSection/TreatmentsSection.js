"use client";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import t1 from "../../../public/images/tratamente/1.png";
import t2 from "../../../public/images/tratamente/2.png";
import t3 from "../../../public/images/tratamente/3.png";
import t4 from "../../../public/images/tratamente/4.png";
import t5 from "../../../public/images/tratamente/5.png";
import t6 from "../../../public/images/tratamente/6.png";
import t7 from "../../../public/images/tratamente/7.png";
import t8 from "../../../public/images/tratamente/8.png";
import t9 from "../../../public/images/tratamente/9.png";
import t10 from "../../../public/images/tratamente/10.png";
import t11 from "../../../public/images/tratamente/11.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./scss/TreatmentsSection.module.scss";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const TreatmentsSection = () => {
  const treatmentsImages = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11];

  const isDesktop = useIsDesktop(768);

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.label}>Tratamentele Noastre</span>
        <h2 className={styles.title}>Before & After</h2>
        <p className={styles.description}>De la primele semne ale unui zâmbet nesigur, la încrederea unui zâmbet perfect</p>
      </div>
      <div className={styles.treatmentsSection}>
        <Wrapper>
          <Marquee
            gradient={false}
            speed={70}
            pauseOnHover={isDesktop}
            direction="right"
          >
            {treatmentsImages.map((image, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  width: "400px",
                  aspectRatio: "1/1",
                }}
              >
                <Image fill src={image} alt={`Tratament ${index + 1}`} />
              </div>
            ))}
          </Marquee>
        </Wrapper>
      </div>
    </div>
  );
};

export default TreatmentsSection;
