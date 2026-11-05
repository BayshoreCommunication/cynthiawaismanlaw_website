import React from "react";
import Link from "next/link";
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
  subtitle,
  className = "",
}: EstateConsultationCtaSectionProps = {}) {
  const defaultSubtitle = (
    <>
      Call (813) 279-6180 or schedule your consultation online at{" "}
      <Link
        href="/"
        className="underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
      >
        www.cynthiawaismanlaw.com
      </Link>
      . Tampa Office Location: 5406 Hoover Blvd, Ste. 11, Tampa, FL 33634.
    </>
  );

  return (
    <CallToSection
      id={id}
      title={title}
      subtitle={subtitle ?? defaultSubtitle}
      phone="(813) 279-6180"
      phoneHref="tel:+18132796180"
      className={className}
    />
  );
}

