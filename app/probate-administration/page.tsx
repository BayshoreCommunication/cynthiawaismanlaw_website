import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProbateOverviewContent from "@/components/probate/ProbateOverviewContent";

export const metadata: Metadata = {
  title: "Probate Administration | Cynthia I. Waisman, P.A.",
  description:
    "Dedicated Florida probate administration counsel. Guiding personal representatives, executors, and beneficiaries through formal and summary probate.",
};

export default function ProbateAdministrationPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Probate Administration" },
        ]}
        badge="PROBATE ADMINISTRATION"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <ProbateOverviewContent />
    </main>
  );
}

