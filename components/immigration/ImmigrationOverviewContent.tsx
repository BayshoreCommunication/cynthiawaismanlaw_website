import React from "react";
import Image from "next/image";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function ImmigrationOverviewContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Heading 1 */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Committed To Helping You Achieve Your American Dream
            </h1>

            {/* Introductory Paragraphs */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              At Cynthia I. Waisman, P.A., we understand that your immigration status
              affects your life in the present moment and will continue to impact you
              and your family far into the future. Whether you are facing an
              immigration issue, wish to obtain citizenship or need help with
              family-based immigration, we are here for you. With two decades of
              experience in immigration law, attorney Cynthia Waisman knows how to
              effectively protect your rights throughout the application process.
            </p>

            {/* Bold Callout */}
            <p className="text-sm sm:text-base md:text-[16px] font-semibold text-[#091D46] leading-relaxed mb-8">
              Our law firm is conveniently located across the street from the U.S.
              Citizenship and Immigration Services (USCIS) office.
            </p>

            {/* Heading 2 */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              By Your Side Throughout The Process
            </h2>

            {/* Paragraph with wrapped photo */}
            <div className="mb-8 overflow-hidden clearfix">
              {/* Embedded Photo: Floated right on md+ screens */}
              <div className="md:float-right md:ml-6 mb-5 md:mb-3 w-full md:w-[280px] lg:w-[320px]">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-gray-200/90 shadow-sm bg-gray-50">
                  <Image
                    src="/images/immigration/consultation-meeting.png"
                    alt="Cynthia I. Waisman reviewing immigration documents with colleague"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
                For those born outside of the U.S., the process of becoming an
                American citizen can be lengthy and complicated. A mistake on a form
                or an incomplete application can result in significant delays. Having
                an experienced lawyer by your side throughout the process can mean the
                difference between a successful application or a denial. We can help you:
              </p>

              {/* Bullets */}
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed">
                <li>Determine if you meet eligibility requirements</li>
                <li>Complete the application forms</li>
                <li>Prepare for the naturalization interview</li>
                <li>
                  Stay abreast of any changes to immigration law that could affect your
                  application
                </li>
                <li>
                  Correct mistakes from a previous application and reapply if needed
                </li>
              </ul>
            </div>

            {/* Heading 3 */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Pursuing The Right Status For You
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              There are many pathways to entering and living in the U.S. The right one
              for you will depend on your specific circumstances and long-term
              goals. To help you better understand various immigration terms, we
              created an{" "}
              <Link
                href="/immigration-glossary"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                immigration glossary
              </Link>{" "}
              overview. Our legal team can assist with:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>Obtaining a green card or visa</li>
              <li>
                Pursuing{" "}
                <Link
                  href="/citizenship-benefits-requirements"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  citizenship
                </Link>{" "}
                for yourself or a family member
              </li>
              <li>
                <Link
                  href="/deferred-action"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Deferred action measures
                </Link>{" "}
                for certain young adults
              </li>
              <li>
                Naturalization for{" "}
                <Link
                  href="/naturalization-non-english-speaking-residents"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  non-English speaking residents
                </Link>
              </li>
              <li>
                Obtaining permits for{" "}
                <Link
                  href="/travel-re-entry-permits"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  travel or re-entry
                </Link>
              </li>
            </ul>

            {/* Heading 4 */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Take Steps To Protect Your Future
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              As a small firm, we can personally oversee each aspect of your case, and
              we are always available to answer your questions. Let us help you achieve
              your immigration goals.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Please call our firm today at{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                +1 (813) 279-6180
              </a>{" "}
              to schedule a 10-minute consultation or{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                reach the firm online
              </Link>{" "}
              to arrange an appointment at our offices in Tampa or Clearwater.
            </p>
          </article>

          {/* Right Column: Practice Areas Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-[144px]">
            <PracticeAreasSidebar currentCategory="immigration" />
          </div>
        </div>
      </div>
    </section>
  );
}
