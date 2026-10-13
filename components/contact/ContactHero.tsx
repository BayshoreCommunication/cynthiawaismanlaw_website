"use client";

import React from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function ContactHero() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
      badge="CONTACT US"
      title={
        <>
          Get the Legal Guidance
          <br />
          <span className="text-white">You Need, Today.</span>
        </>
      }
      description="Whether you have questions about immigration, estate planning, probate, or guardianship, our team is here to help. Contact us to schedule a consultation and get trusted legal guidance for your unique situation."
      bgImage="/images/breadcrumb-bg-image.png"
    />
  );
}
