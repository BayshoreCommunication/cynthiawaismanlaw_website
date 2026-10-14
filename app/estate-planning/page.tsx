import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import EstatePlanningOverviewContent from "@/components/estatePlanning/EstatePlanningOverviewContent";

export const metadata: Metadata = {
  title: "Estate Planning Services | Cynthia I. Waisman, P.A.",
  description:
    "Comprehensive Florida estate planning services. Wills, living trusts, durable powers of attorney, living wills, and asset protection in Tampa and Clearwater.",
};

export default function EstatePlanningPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning Services" },
        ]}
        badge="ESTATE PLANNING SERVICES"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <EstatePlanningOverviewContent />
    </main>
  );
}

