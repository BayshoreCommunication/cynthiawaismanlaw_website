import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guardianship Services | Cynthia I. Waisman, P.A.",
  description:
    "Experienced Florida guardianship representation for mental incapacity and minor guardianships. Protecting your loved ones across Tampa, Clearwater, and Florida.",
};

export default function GuardianshipServicesPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Guardianship Services" },
        ]}
        badge="GUARDIANSHIP SERVICES"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content & Practice Areas Sidebar */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Guardianship Content */}
            <article className="lg:col-span-8 text-[#2b2b2b]">
              
              {/* Main Page Title */}
              <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
                Guardianship Services
              </h1>

              {/* Introductory Paragraphs */}
              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
                Our guardianship practice consists of providing quality services to
                those who may need to establish a legal guardianship because they are
                unable to take care of themselves or their finances. Establishing a
                guardianship is legal proceeding where the court monitors the well-being
                and/or financial situation of an individual who is unable to do so alone
                due to mental infirmity or youthful age.
              </p>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
                When a person has a{" "}
                <Link
                  href="/estate-planning-services"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  comprehensive estate plan
                </Link>
                , often the need for a guardianship is eliminated. However, if there is no
                estate plan in place, the court may become involved to determine the
                rights of individuals and to provide the appropriate care. There are
                essentially two types of guardianships in Florida, minor guardianships
                and incapacitated guardianships.
              </p>

              {/* Section 2: Mental Incapacity */}
              <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
                Mental Incapacity
              </h2>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
                When a person&apos;s mental capabilities are becoming impaired and he or
                she cannot make important decisions concerning daily life such as
                finances, medical care or legal transactions, a guardianship may be
                needed. A guardianship for an incapacitated person can be established
                either voluntarily or through a petition through the court. The
                incapacitated person will be investigated by three medical personnel and
                will receive the services of an appointed attorney to protect his/her
                interests during the process.
              </p>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
                A hearing will occur whereby all interested persons will have an
                opportunity to present evidence in favor or against the guardianship being
                granted. The court determines what is best for the individual who is the
                subject of the proceeding. Sometimes the guardianship is not necessary,
                and the court will base such a decision on the evidence reviewed by the
                court.
              </p>

              {/* Section 3: Decisions To Make After Guardianship Is Granted */}
              <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
                Decisions To Make After Guardianship Is Granted
              </h2>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
                When a guardianship is granted, there are two aspects to be considered.
                First are decisions about health care, living environment, social
                environment and the daily functions of the incapacitated person, among
                other things.
              </p>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
                The second aspect is the property; in other words, who will manage the
                person&apos;s assets and financial outlook. When the guardian is
                appointed, he or she will be deemed to be in control of whatever aspects
                the court orders. It is quite possible to have a guardianship where some
                rights are not taken away, giving only limited control to the guardian.
              </p>

              {/* Section 4: Minor Guardianships */}
              <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
                Minor Guardianships
              </h2>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
                This occurs in a variety of ways, such as a minor child who is involved in
                an automobile accident and receives a substantial amount of money as a
                result. In Florida, a guardianship is required when a minor receives
                significant sums of money, even when the child lives with his/her parents.
                The guardianship protects the assets of the minor until he or she reaches
                the age of majority or as otherwise determined by the court.
              </p>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
                This money is held in a restricted account where only certain items can
                be paid with court permission. This is a strong safeguard for the minor
                child during the guardianship. Under certain circumstances, the
                guardianship can be extended after the child becomes an adult.
              </p>

              {/* Section 5: Let Us Help You Address Your Guardianship Concerns */}
              <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
                Let Us Help You Address Your Guardianship Concerns
              </h2>

              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
                We can help determine what type of guardianship, if any, is required and
                assist clients through the entire process.{" "}
                <Link
                  href="/contact"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Contact us online
                </Link>{" "}
                in Clearwater or Tampa to discuss your guardianship questions. You can
                also call{" "}
                <a
                  href="tel:+18132796180"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  +1 (813) 279-6180
                </a>{" "}
                to arrange a consultation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Request A Consultation</span>
                  <span>→</span>
                </Link>

                <a
                  href="tel:+18132796180"
                  className="py-3.5 px-6 rounded-md border border-[#091D46] text-[#091D46] hover:bg-[#091D46] hover:text-white font-bold text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2"
                >
                  <span>Call (813) 279-6180</span>
                </a>
              </div>

            </article>

            {/* Right Column: Practice Areas Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <PracticeAreasSidebar currentCategory="guardianship" />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

