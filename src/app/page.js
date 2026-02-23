import WappIcon from "@/assets/icons/WappIcon";
import TreatmentsSection from "@/components/TreatmentsSection/TreatmentsSection";
import styles from "./scss/Home.module.scss";
import { Faq } from "@/components/Faq/Faq";
import { Reviews } from "@/components/ReviewSection/Reviews";
import { Hero } from "@/components/Hero/Hero";
import { TeamPreview } from "@/components/TeamPreview/TeamPreview";
import { Appointment } from "@/components/ContactUs/Appointment";
import { ServicesSection2 } from "@/components/ServicesSection/ServicesSection2";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection2 />
      <TreatmentsSection />
      <TeamPreview />
      <Appointment />
      <Faq />
      <Reviews />
      <div className={styles.wappIcon}>
        <a href="https://wa.me/+40754066628">
          <WappIcon />
        </a>
      </div>
    </div>
  );
}
