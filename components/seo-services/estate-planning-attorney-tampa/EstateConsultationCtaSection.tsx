import React from "react";
import CallToSection from "@/components/home/callToSection/CallToSection";

interface EstateConsultationCtaSectionProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export function EstateConsultationCtaSection({
  id = "consult",
  title = "Contact us as your trusted estate planning attorney Tampa to ensure your family's future is secure.",
  subtitle = "Call (813) 279-6180 or schedule your consultation online at www.cynthiawaismanlaw.com. Tampa Office Location: 5406 Hoover Blvd, Ste. 11, Tampa, FL 33634.",
  className = "",
}: EstateConsultationCtaSectionProps = {}) {
  return (
    <CallToSection
      id={id}
      title={title}
      subtitle={subtitle}
      phone="(813) 279-6180"
      phoneHref="tel:+18132796180"
      className={className}
    />
  );
}

