import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AncillaryProbateContent from "@/components/probate/AncillaryProbateContent";

export const metadata: Metadata = {
  title: "Ancillary Probate | Cynthia I. Waisman, P.A.",
  description:
    "Florida ancillary probate representation for out-of-state executors and families owning Florida real estate or vacation property.",
};

export default function AncillaryProbatePage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Probate Administration", href: "/probate-administration" },
          { label: "Ancillary Probate" },
        ]}
        badge="ANCILLARY PROBATE"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <AncillaryProbateContent />
    </main>
  );
}

