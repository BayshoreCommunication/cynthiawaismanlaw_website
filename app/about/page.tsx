import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "About Our Firm | Cynthia I. Waisman, P.A. | Tampa Bay Law Firm",
  description:
    "Learn about Cynthia I. Waisman, P.A. Dedicated legal counsel in Immigration Law and Estate Planning serving Tampa, Clearwater, and Wesley Chapel.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        badge="ABOUT OUR FIRM"
        title="Cynthia I. Waisman, P.A."
        subtitle="Attorney at Law"
      />
    </main>
  );
}
