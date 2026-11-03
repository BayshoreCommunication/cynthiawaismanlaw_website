import type { Metadata } from "next";
import Link from "next/link";
import RedirectHomeCountdown from "@/components/shared/RedirectHomeCountdown";

export const metadata: Metadata = {
  title: "Page Not Found",
};

// Still a real 404 for search engines; visitors are sent home after 5 seconds.
export default function NotFound() {
  return (
    <section className="w-full bg-[#fbfcfd] py-20 sm:py-28 lg:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-10 sm:w-12 h-[2.5px] bg-[#ECAB3C]" />
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ECAB3C] uppercase font-sans">
            Error 404
          </span>
          <span className="w-10 sm:w-12 h-[2.5px] bg-[#ECAB3C]" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#091D46] tracking-tight leading-[1.15] mb-4">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed mb-6 font-sans">
          Sorry, the page you are looking for doesn&rsquo;t exist or has been moved.
        </p>

        <RedirectHomeCountdown seconds={5} />

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-md transition-all shadow-sm font-sans"
        >
          <span>Go to Homepage Now</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
