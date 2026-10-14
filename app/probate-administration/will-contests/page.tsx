import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import WillContestsContent from "@/components/probate/WillContestsContent";

export const metadata: Metadata = {
  title: "Will Contests & Estate Disputes | Cynthia I. Waisman, P.A.",
  description:
    "Experienced representation in Florida will contests, undue influence claims, lack of testamentary capacity, and fiduciary litigation.",
};

export default function WillContestsPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Probate Administration", href: "/probate-administration" },
          { label: "Will Contests" },
        ]}
        badge="WILL CONTESTS"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <WillContestsContent />
    </main>
  );
}

