import React from "react";
import styles from "./scss/Homepage.module.scss";
import Button from "../Common/Button/Button";
import Wrapper from "../Wrapper/Wrapper";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageLayout}>
        <Wrapper>
          <div className={styles.textContainer}>
            <div>
              <h1>
                Noi avem <span>grija</span>
              </h1>
              <h2>de zambetul tau</h2>
            </div>
            <p>
              ArtDent oferă o gamă completă de servicii dentare atât pentru
              copii cât și pentru adulți.
            </p>
            <Button className={styles.appointmentBtn}>Fă o Programare</Button>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Homepage;
