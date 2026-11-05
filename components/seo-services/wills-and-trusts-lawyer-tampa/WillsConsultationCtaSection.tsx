import React from "react";
import CallToSection from "@/components/home/callToSection/CallToSection";

interface WillsConsultationCtaSectionProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export function WillsConsultationCtaSection({
  id = "consult",
  title = "Build Your Tampa Will or Trust Plan With the Right Structure",
  subtitle = "Your estate plan should match your family, your Tampa home, your financial accounts and your long term goals. A will & trust lawyer tampa at Cynthia I. Waisman, P.A. reviews the full picture, prepares the right documents, coordinates ownership and follows through with trust funding. Call 727 219 9009 today to schedule your consultation.",
  className = "",
}: WillsConsultationCtaSectionProps = {}) {
  return (
    <CallToSection
      id={id}
      title={title}
      subtitle={subtitle}
      phone="727 219 9009"
      phoneHref="tel:+17272199009"
      className={className}
    />
  );
}

