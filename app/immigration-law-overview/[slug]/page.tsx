import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";
import { getAllImmigrationSlugs, getImmigrationPage } from "@/lib/immigration";

interface ImmigrationSubPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllImmigrationSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ImmigrationSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getImmigrationPage(slug);

  if (!page) {
    return {
      title: "Page Not Found | Cynthia I. Waisman, P.A.",
    };
  }

  return {
    title: `${page.title} | Cynthia I. Waisman, P.A.`,
    description:
      page.excerpt ||
      `Learn more about ${page.title} from experienced Tampa immigration attorney Cynthia I. Waisman.`,
  };
}

export default async function ImmigrationSubPage({
  params,
}: ImmigrationSubPageProps) {
  const { slug } = await params;
  const page = await getImmigrationPage(slug);

  if (!page) {
    notFound();
  }

  // Determine which sidebar category should be highlighted
  const isGreenCardTopic = [
    "green-cards",
    "marriage-based-green-cards",
    "family-based-visas",
    "fiance-visa",
    "consular-processing",
    "green-card-renewal",
    "vawa-green-cards",
    "e2-treaty-visas",
    "visa-waiver-program",
  ].includes(slug);

  const currentCategory = isGreenCardTopic ? "green-cards" : "immigration";

  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Immigration & Naturalization",
            href: "/immigration-law-overview",
          },
          { label: page.title },
        ]}
        badge="IMMIGRATION & NATURALIZATION"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content & Practice Areas Sidebar */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Legal Article */}
            <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
              {/* Main Heading */}
              <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.2] mb-6 tracking-tight">
                {page.title}
              </h1>

              {/* Gold Divider Accent */}
              <div className="w-16 h-1 bg-[#ECAB3C] mb-8" data-animate="line-expand" style={{ "--line-width": "4rem" } as React.CSSProperties} />

              {/* Rendered HTML Content with Rich Legal Styling */}
              <div
                className="service-content-body space-y-5 text-sm sm:text-base text-[#4a5568] leading-relaxed [&_h2]:font-serif [&_h2]:text-[22px] [&_h2]:sm:text-[26px] [&_h2]:font-normal [&_h2]:text-[#091D46] [&_h2]:leading-snug [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-[18px] [&_h3]:sm:text-[20px] [&_h3]:font-semibold [&_h3]:text-[#091D46] [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4 [&_li]:leading-relaxed [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-4 [&_a]:text-[#0056b3] [&_a]:underline [&_a]:font-medium hover:[&_a]:text-[#003d80] [&_blockquote]:border-l-4 [&_blockquote]:border-[#ECAB3C] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-[#091D46]"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />

              {/* Bottom Consultation Callout Box */}
              <div className="mt-12 p-6 sm:p-8 bg-[#FAF7F2] border border-amber-200/90 rounded-none shadow-2xs" data-animate="fade-up" data-delay="200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-[2px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "1.25rem" } as React.CSSProperties} />
                  <span className="text-xs font-bold tracking-widest text-[#091D46] uppercase font-sans">
                    TAKE ACTION TODAY
                  </span>
                </div>

                <h3 className="font-serif text-[20px] sm:text-[24px] text-[#091D46] font-normal leading-snug mb-3">
                  Protect Your Legal Status with an Experienced Tampa Attorney
                </h3>

                <p className="text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-6 font-sans">
                  Immigration processes can be complex and time-sensitive. Cynthia
                  I. Waisman brings over two decades of dedicated immigration law
                  experience to help you avoid costly mistakes and pursue your
                  American dream.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1 font-sans">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#091D46] text-[#ECAB3C] hover:bg-[#021327] px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide uppercase transition-colors shadow-xs"
                  >
                    <span>Schedule A Consultation</span>
                    <span>→</span>
                  </Link>

                  <a
                    href="tel:+18132796180"
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#091D46] hover:text-[#ECAB3C] transition-colors py-2"
                  >
                    <span>📞 +1 (813) 279-6180</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Right Column: Practice Areas Sidebar */}
            <div className="lg:col-span-4 self-start" data-animate="fade-left" data-delay="150">
              <PracticeAreasSidebar
                currentCategory={currentCategory}
                currentSubItem={page.title}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
