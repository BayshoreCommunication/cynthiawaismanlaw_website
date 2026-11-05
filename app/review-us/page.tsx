import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Review Us on Google | Cynthia I. Waisman, P.A.",
  description:
    "Share your experience with Cynthia I. Waisman, P.A. Attorney At Law. Please take a moment to leave us a review on Google.",
  robots: {
    index: false,
    follow: false,
  },
};

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?hl=en-US&gl=us&q=Cynthia+I.+Waisman+P.A.,+5406+Hoover+Blvd+Ste+11,+Tampa,+FL+33634&ludocid=11307721753873745069&lsig=AB86z5XHCBaExN4X5LpRUYg8UdS7#lrd=0x88c2c22152d3f595:0x9ced1906369a04ad,3";

const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=11307721753873745069";

export default function ReviewUsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#F6F8FA] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Top Angled Dark Navy Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-[#00385A]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 68%, 0 36%)",
          }}
        />
      </div>

      {/* Main 3-Card Container */}
      <div className="relative z-10 w-full max-w-[540px] flex flex-col gap-4 sm:gap-5 my-auto">
        {/* Card 1: Logo */}
        <div className="bg-white rounded-md border border-[#DCE3EB] shadow-xs px-6 py-5 sm:py-6 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Cynthia I. Waisman, P.A. Attorney At Law"
            width={340}
            height={68}
            priority
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </div>

        {/* Card 2: Main Call-to-Action */}
        <div className="bg-white rounded-md border border-[#DCE3EB] shadow-xs px-6 py-8 sm:px-10 sm:py-9 text-center flex flex-col items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight mb-2">
            Share your experience with others.
          </h1>
          <p className="text-xs sm:text-[13px] text-[#5A6E85] max-w-[420px] mx-auto mb-6 leading-relaxed">
            Please take a moment to leave us a review or share internal feedback
          </p>

          {/* Review us on Google Button */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-[320px] h-11 sm:h-12 rounded-[4px] bg-[#FFBE00] hover:bg-[#F2B400] active:scale-[0.99] shadow-xs hover:shadow-md transition-all duration-200 flex items-center overflow-hidden border border-[#E5A800]"
          >
            {/* White Left Box with Google G */}
            <div className="w-11 sm:w-12 h-full bg-white flex items-center justify-center shrink-0 border-r border-[#E5A800]/30">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            {/* Button Label */}
            <div className="flex-1 text-center font-medium text-white text-sm sm:text-[15px] tracking-normal">
              Review us on Google
            </div>
          </a>
        </div>

        {/* Card 3: Business Details Footer */}
        <div className="bg-white rounded-md border border-[#DCE3EB] shadow-xs px-6 py-4 sm:py-5 text-center flex flex-col items-center gap-1.5">
          <div className="font-bold text-[#1E293B] text-xs sm:text-[13px] tracking-tight">
            Cynthia I. Waisman P.A.
          </div>

          {/* Address with Map Pin Icon */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-[#5A6E85] hover:text-[#00385A] transition-colors underline decoration-[#CBD5E1] underline-offset-2"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-[#718296]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>5406 Hoover Blvd, STE 11, Tampa, Florida 33634</span>
          </a>

          {/* Phone with Phone Icon */}
          <a
            href="tel:+18132796180"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-[#5A6E85] hover:text-[#00385A] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-[#718296]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(813) 279-6180</span>
          </a>
        </div>
      </div>
    </div>
  );
}

