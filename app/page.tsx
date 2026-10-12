

import HeroSection from "@/components/home/hero/HeroSection";
import ServicesSection from "@/components/home/services/ServicesSection";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";

export default function HomePage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutFirmSection />
      <ProfessionalAssociations />
    </div>
  );
}


