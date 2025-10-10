import React from "react";
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
import styles from "./scss/Tratamente.module.scss";
import Image from "next/image";
import ContactLayout from "@/components/Common/ContactLayout.js/ContactLayout";
import Wrapper from "@/components/Wrapper/Wrapper";

const Tratamente = () => {
  const tratamenteImages = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11];
  return (
    <Wrapper>
      <div className={styles.tratamentePageContainer}>
        <div className={styles.tratamenteContainer}>
          {tratamenteImages.map((el, index) => (
            <div className={styles.tratamenteImageContainer} key={index}>
              <Image
                src={el}
                alt="Tratamente"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <ContactLayout />
      </div>
    </Wrapper>
  );
};

export default Tratamente;
