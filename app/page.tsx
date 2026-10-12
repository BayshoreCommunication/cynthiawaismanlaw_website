

import HeroSection from "@/components/home/hero/HeroSection";
import ServicesSection from "@/components/home/services/ServicesSection";
import EstatePlanningSection from "@/components/home/estatePlanning/EstatePlanningSection";
import ImmigrationServicesSection from "@/components/home/immigrationServices/ImmigrationServicesSection";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import CallToSection from "@/components/home/callToSection/CallToSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export default function HomePage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <HeroSection />
      <ServicesSection />
      <AboutFirmSection />
      <EstatePlanningSection />
      <ImmigrationServicesSection />
      <ProfessionalAssociations />
      <TestimonialsSection />
      <CallToSection />
      <ContactFirmSection />
    </div>
  );
}


