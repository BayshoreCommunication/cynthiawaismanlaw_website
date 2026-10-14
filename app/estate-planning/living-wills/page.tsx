import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import LivingWillsContent from "@/components/estatePlanning/LivingWillsContent";

export const metadata: Metadata = {
  title: "Living Wills & Healthcare Directives | Cynthia I. Waisman, P.A.",
  description:
    "Ensure your medical wishes are honored with a Florida Living Will and Designation of Healthcare Surrogate drafted by Cynthia I. Waisman, P.A.",
};

export default function LivingWillsPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning", href: "/estate-planning" },
          { label: "Living Wills" },
        ]}
        badge="LIVING WILLS"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <LivingWillsContent />
    </main>
  );
}

