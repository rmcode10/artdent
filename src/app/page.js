import WappIcon from "@/assets/icons/WappIcon";
import ContactSection from "@/components/ContactUs/ContactSection";
import Homepage from "@/components/Homepage/Homepage";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TreatmentsSection from "@/components/TreatmentsSection/TreatmentsSection";
import styles from "./scss/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Homepage />
      <ServicesSection />
      <TreatmentsSection />
      <ContactSection />
      <ReviewSection />
      <div className={styles.wappIcon}>
        <a href="https://wa.me/+40711111111">
          <WappIcon />
        </a>
      </div>
    </div>
  );
}
