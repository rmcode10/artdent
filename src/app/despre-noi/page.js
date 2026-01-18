import { Award, Heart, Users, Target } from "lucide-react";
import aboutUsPrimary from "../../../public/images/AboutUsPrimary.jpg";
import aboutUsSecondary from "../../../public/images/AboutUsSecondary.jpg";
import styles from "./About.module.scss";
import Wrapper from "@/components/Wrapper/Wrapper";

const values = [
  {
    icon: Heart,
    title: "Pacientul pe Primul Loc",
    description:
      "Fiecare decizie de tratament este luată cu confortul și bunăstarea dumneavoastră ca prioritate principală.",
  },
  {
    icon: Award,
    title: "Excelență",
    description:
      "Menținem cele mai înalte standarde în îngrijirea dentară prin educație continuă și tehnologie avansată.",
  },
  {
    icon: Users,
    title: "Comunitate",
    description:
      "Construim relații durabile cu pacienții noștri și contribuim la comunitatea noastră locală.",
  },
  {
    icon: Target,
    title: "Inovație",
    description:
      "Îmbrățișăm tehnologia dentară de ultimă oră pentru a vă oferi cele mai bune rezultate posibile.",
  },
];

const About = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.label}>Despre Noi</span>
            <h1 className={styles.heroTitle}>
              Partenerul Tău de Încredere în{" "}
              <span className={styles.highlight}>Sănătatea Dentară</span>
            </h1>
            <p className={styles.heroDescription}>
              De peste 3 ani, oferim servicii stomatologice de excepție
              comunității noastre cu compasiune, expertiză și tehnologie de
              ultimă generație.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyGrid}>
            <div className={styles.imageWrapper}>
              <img src={aboutUsPrimary.src} alt="AboutUs" />
              {/* <img src={aboutUsSecondary.src} alt="Interiorul clinicii" /> */}
              {/* <div className={styles.yearsBadge}>
                <p>15+</p>
                <p>Ani de Excelență</p>
              </div> */}
            </div>

            <div className={styles.storyContent}>
              <span className={styles.label}>Povestea Noastră</span>
              <h2 className={styles.sectionTitle}>
                Construim Zâmbete, Construim Încredere
              </h2>
              <div className={styles.storyText}>
                <p>
                  Clinica Stomatologică ARTDENT oferă servicii stomatologice
                  moderne, bazate pe tehnologie de ultimă generație și pe o
                  echipă cu experiență. Suntem dedicați sănătății și esteticii
                  dentare, punând accent pe tratamente eficiente și sigure.
                </p>
                
              </div>
            </div>
          </div>
           <div className={styles.storyGrid}>

            <div className={styles.storyContent}>
              <div className={styles.storyText}>
                <p>
                  Știi nodul acela din stomac care apare când te gândești că
                  trebuie să mergi la stomatolog? Artdent este un manifest
                  împotriva lui.
                </p>
                <p>
                  La noi poți veni cu drag. Am creat un spațiu aerisit, luminos
                  și liniștitor, gândit pentru a-ți oferi o stare de calm și
                  siguranță încă din momentul în care intri în clinică.
                </p>
                <p>
                  Acordăm o atenție specială comunicării transparente și
                  explicăm clar fiecare etapă a planului de tratament, pentru ca
                  vizita la dentist să fie una confortabilă, iar rezultatele să
                  îți redea zâmbetul și încrederea.
                </p>
              </div>
            </div>
                        <div className={styles.imageWrapper}>
              <img src={aboutUsSecondary.src} alt="AboutUs" />
              {/* <img src={aboutUsSecondary.src} alt="Interiorul clinicii" /> */}
              {/* <div className={styles.yearsBadge}>
                <p>15+</p>
                <p>Ani de Excelență</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <div className={styles.valuesHeader}>
            <span className={styles.label}>Valorile Noastre</span>
            <h2 className={styles.sectionTitle}>
              Valorile Noastre Fundamentale
            </h2>
            <p className={styles.valuesDescription}>
              Aceste principii ghidează tot ce facem, asigurând că primiți cea
              mai bună îngrijire posibilă de fiecare dată.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={styles.valueCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.valueIcon}>
                    <Icon />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </Wrapper>
  );
};

export default About;
