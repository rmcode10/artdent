import ContactSection from "@/components/ContactUs/ContactSection";
import Homepage from "@/components/Homepage/Homepage";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TreatmentsSection from "@/components/TreatmentsSection/TreatmentsSection";

export default function Home() {
  return (
    <div>
      <Homepage />
      <ServicesSection />
      <TreatmentsSection />
      <ContactSection />
      <ReviewSection />
    </div>
  );
}
