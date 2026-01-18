import { ArrowRight } from "lucide-react";
import Image from "next/image";
import teamPrimaryImage from "../../../public/images/TeamPrimary.jpg";
import teamSecondaryImage from "../../../public/images/TeamSecondary.jpg";
import styles from "./TeamPreview.module.scss";
import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";

export const TeamPreview = () => {
  return (
    <Wrapper>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Images */}
            <div className={styles.images}>
              <div className={styles.imageMain}>
                <Image src={teamPrimaryImage} alt="Echipa ArtDent" />
              </div>
              <div className={styles.imageSecondary}>
                <Image
                  src={teamSecondaryImage}
                  alt="Consultație stomatologică"
                />
              </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
              <span className={styles.label}>Echipa Noastră</span>
              <h2 className={styles.title}>
                Profesioniști Dedicați Zâmbetului Tău
              </h2>
              <p className={styles.description}>
                La Clinica ArtDent, fiecare membru al echipei noastre este
                pasionat și dedicat oferirii îngrijirii de cea mai înaltă
                calitate. Cu experiență vastă și pregătire continuă, suntem aici
                pentru a transforma vizitele la dentist într-o experiență
                confortabilă și pozitivă.
              </p>
              <ul className={styles.highlights}>
                <li>
                  <span className={styles.highlightNumber}>5+</span>
                  <span className={styles.highlightText}>
                    Specialiști certificați
                  </span>
                </li>
                <li>
                  <span className={styles.highlightNumber}>3+</span>
                  <span className={styles.highlightText}>
                    Ani de experiență
                  </span>
                </li>
                <li>
                  <span className={styles.highlightNumber}>1000+</span>
                  <span className={styles.highlightText}>
                    Pacienți mulțumiți
                  </span>
                </li>
              </ul>
              <Link href="/echipa" className={styles.cta}>
                Cunoaște Echipa
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
