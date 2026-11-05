import React from "react";
import Image from "next/image";

const offices = [
  {
    name: "Tampa Office",
    firm: "Cynthia I. Waisman, P.A.",
    street: "5406 Hoover Blvd, Ste. 11",
    city: "Tampa, FL 33634",
    phone: "+1 (813) 279-6180",
    phoneHref: "tel:+18132796180",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=5406+Hoover+Blvd+Ste+11+Tampa+FL+33634",
    note: "By Appointment Only",
    image: "/images/seo-services/tampa-office.png",
  },
  {
    name: "Clearwater Office",
    firm: null,
    street: "2451 McMullen Booth Rd, Ste. 239",
    city: "Clearwater, FL 33759",
    phone: "+1 (813) 279-6180",
    phoneHref: "tel:+18132796180",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=2451+McMullen+Booth+Rd+Clearwater+FL+33759",
    note: "By Appointment Only",
    image: "/images/seo-services/clearwater-office.png",
  },
  {
    name: "Wesley Chapel Office",
    firm: null,
    street: "6013 Wesley Grove Blvd, Bldg. 2, Ste. 208",
    city: "Wesley Chapel, FL 33544",
    phone: "+1 (813) 279-6180",
    phoneHref: "tel:+18132796180",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=6013+Wesley+Grove+Blvd+Wesley+Chapel+FL+33544",
    note: "By Appointment Only",
    image: "/images/seo-services/wesley-chapel-office.png",
  },
];

export function EstateOfficesSection() {
  return (
    <section
      id="offices"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-10">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Tampa Offices and Areas We Serve
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Cynthia I. Waisman, P.A. serves clients across Tampa, Clearwater, and
            Wesley Chapel by appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {offices.map((office) => (
            <div
              key={office.name}
              className="bg-white border border-gray-200 rounded-[22px] overflow-hidden p-6 sm:p-7 shadow-xs hover:shadow-[0_18px_40px_rgba(9,29,70,0.12)] hover:border-[#ECAB3C] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-[#091D46] border border-gray-200">
                  <Image
                    src={office.image}
                    alt={`${office.name} - Cynthia I. Waisman, P.A.`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#091D46] mb-2">
                  {office.name}
                </h3>

                <div className="text-sm sm:text-base text-[#586375] leading-relaxed mb-6">
                  {office.firm && (
                    <p className="font-medium text-[#091D46]">{office.firm}</p>
                  )}
                  <p>{office.street}</p>
                  <p>{office.city}</p>
                  <p className="font-semibold text-[#091D46] mt-1">{office.phone}</p>
                  <p className="mt-2">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-semibold text-[#ECAB3C] hover:text-[#091D46] underline underline-offset-4 transition-colors"
                    >
                      Get Directions &rarr;
                    </a>
                  </p>
                  {office.note && (
                    <p className="mt-2 text-xs font-semibold text-[#ECAB3C] uppercase tracking-wider">
                      {office.note}
                    </p>
                  )}
                </div>
              </div>

              <a
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-[#091D46] bg-[#ECAB3C]/15 hover:bg-[#ECAB3C] hover:text-[#091D46] border border-[#ECAB3C]/40 transition-colors mt-auto"
                href={office.phoneHref}
              >
                <svg
                  className="w-4 h-4 text-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                Call {office.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

