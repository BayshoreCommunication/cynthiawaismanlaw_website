import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PowersOfAttorneyContent from "@/components/estatePlanning/PowersOfAttorneyContent";

export const metadata: Metadata = {
  title: "Powers of Attorney | Cynthia I. Waisman, P.A.",
  description:
    "Protect your financial and legal affairs with a Florida Durable Power of Attorney drafted by experienced counsel in Tampa and Clearwater.",
};

export default function PowersOfAttorneyPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning", href: "/estate-planning" },
          { label: "Powers of Attorney" },
        ]}
        badge="POWERS OF ATTORNEY"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <PowersOfAttorneyContent />
    </main>
  );
}

