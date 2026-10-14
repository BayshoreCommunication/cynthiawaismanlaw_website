import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import WillsContent from "@/components/estatePlanning/WillsContent";

export const metadata: Metadata = {
  title: "Wills & Testamentary Planning | Cynthia I. Waisman, P.A.",
  description:
    "Make your will count. Strategic drafting of Florida last wills and testaments, guardian designations, and personal representative appointments.",
};

export default function WillsPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning", href: "/estate-planning" },
          { label: "Wills" },
        ]}
        badge="WILLS"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <WillsContent />
    </main>
  );
}

