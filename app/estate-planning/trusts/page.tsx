import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TrustsContent from "@/components/estatePlanning/TrustsContent";

export const metadata: Metadata = {
  title: "Trusts & Living Trusts | Cynthia I. Waisman, P.A.",
  description:
    "Use trusts to achieve your goals. Florida revocable living trusts, special needs trusts, and irrevocable asset protection trusts in Tampa Bay.",
};

export default function TrustsPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning", href: "/estate-planning" },
          { label: "Trusts" },
        ]}
        badge="TRUSTS"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <TrustsContent />
    </main>
  );
}

