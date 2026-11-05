import React from "react";
import CallToSection from "@/components/home/callToSection/CallToSection";

interface ConsultationCtaSectionProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export function ConsultationCtaSection({
  id = "consult",
  title = "Start your Tampa probate case with a consultation",
  subtitle = "A probate case can involve a home, financial accounts, family inheritance, creditor claims or years of financial records. You deserve a clear view of the legal work before you begin. Call 727 219 9009 today to schedule your probate consultation with attorney Cynthia I. Waisman.",
  className = "",
}: ConsultationCtaSectionProps = {}) {
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
