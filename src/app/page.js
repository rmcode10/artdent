import ContactSection from "@/components/ContactUs/ContactSection";
import Header from "@/components/Header/Header";
import Homepage from "@/components/Homepage/Homepage";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <div>
      <Homepage />
      <ServicesSection />
      <ContactSection />
      <ReviewSection />
    </div>
  );
}
