import React from "react";
import Image from "next/image";

interface AssociationItem {
    id: string;
    title: string;
    membership: string;
    logo: string;
    logoWidth: number;
    logoHeight: number;
}

const associationItems: AssociationItem[] = [
    {
        id: "assoc-1",
        title: "The Florida Bar",
        membership: "Member",
        logo: "/images/associations/logo-1-florida-bar.png",
        logoWidth: 132,
        logoHeight: 123,
    },
    {
        id: "assoc-2",
        title: "American Bar Association",
        membership: "Member",
        logo: "/images/associations/logo-2-aba.png",
        logoWidth: 141,
        logoHeight: 96,
    },
    {
        id: "assoc-3",
        title: "American Immigration Lawyers Association",
        membership: "Member",
        logo: "/images/associations/logo-3-aila.png",
        logoWidth: 153,
        logoHeight: 114,
    },
    {
        id: "assoc-4",
        title: "Hillsborough County Bar Association",
        membership: "Member",
        logo: "/images/associations/logo-4-hcba.png",
        logoWidth: 141,
        logoHeight: 114,
    },
    {
        id: "assoc-5",
        title: "Clearwater Bar Association",
        membership: "Member",
        logo: "/images/associations/logo-5-clearwater-bar.png",
        logoWidth: 147,
        logoHeight: 111,
    },
    {
        id: "assoc-6",
        title: "Real Property, Probate & Trust Law",
        membership: "Section Member",
        logo: "/images/associations/logo-6-rpptl.png",
        logoWidth: 147,
        logoHeight: 93,
    },
    {
        id: "assoc-7",
        title: "Upper Tampa Bay Chamber",
        membership: "Member",
        logo: "/images/associations/logo-7-upper-tampa-bay.png",
        logoWidth: 168,
        logoHeight: 102,
    },
    {
        id: "assoc-8",
        title: "Robert Morris College",
        membership: "Former Adjunct Professor",
        logo: "/images/associations/logo-8-robert-morris.png",
        logoWidth: 153,
        logoHeight: 99,
    },
    {
        id: "assoc-9",
        title: "Florida Bar Grievance Committee",
        membership: "Former President",
        logo: "/images/associations/logo-9-grievance.png",
        logoWidth: 150,
        logoHeight: 96,
    },
    {
        id: "honor-1",
        title: "Lead Counsel",
        membership: "Verified",
        logo: "/images/associations/logo-10-lead-counsel.png",
        logoWidth: 123,
        logoHeight: 129,
    },
    {
        id: "honor-2",
        title: "ARAG Legal Insurance",
        membership: "Accepted Here",
        logo: "/images/associations/logo-11-arag.png",
        logoWidth: 117,
        logoHeight: 132,
    },
    {
        id: "honor-3",
        title: "Upper Tampa Bay Chamber",
        membership: "Honored Member",
        logo: "/images/associations/logo-12-chamber.png",
        logoWidth: 150,
        logoHeight: 132,
    },
    {
        id: "honor-4",
        title: "Expertise.com",
        membership: "Best Probate Lawyers 2022",
        logo: "/images/associations/logo-13-expertise.png",
        logoWidth: 129,
        logoHeight: 123,
    },
    {
        id: "honor-5",
        title: "Lawyers of Distinction",
        membership: "2018 – 2019",
        logo: "/images/associations/logo-14-lawyers-distinction.png",
        logoWidth: 135,
        logoHeight: 120,
    },
    {
        id: "honor-6",
        title: "Top Lawyers in Florida",
        membership: "2016 – 2019",
        logo: "/images/associations/logo-15-top-lawyers.png",
        logoWidth: 138,
        logoHeight: 99,
    },
    {
        id: "honor-7",
        title: "Best Lawyers in America",
        membership: "2016 – 2019",
        logo: "/images/associations/logo-16-best-lawyers.png",
        logoWidth: 159,
        logoHeight: 96,
    },
    {
        id: "honor-8",
        title: "Who's Who in American Law",
        membership: "2016 – 2019",
        logo: "/images/associations/logo-17-whos-who.png",
        logoWidth: 165,
        logoHeight: 99,
    },
    {
        id: "honor-9",
        title: "Martindale-Hubbell",
        membership: "Client Champion 2018 – 2019",
        logo: "/images/associations/logo-18-martindale.png",
        logoWidth: 162,
        logoHeight: 102,
    },
];

export default function ProfessionalAssociations() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden py-12 lg:py-16 text-white"
            style={{
                backgroundImage: "url('/images/professional-associations-bg-image.png')",
            }}
        >
            {/* Subtle dark navy overlay to ensure optimal contrast */}
            <div className="absolute inset-0 bg-[#061533]/65 backdrop-blur-[0.5px] pointer-events-none" />

            {/* Same 1320px Global Container for Header */}
            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4">
                {/* Section Header: Title with Gold Lines */}
                <div className="flex items-center justify-center gap-3.5 mb-2.5">
                    <span className="w-8 sm:w-12 h-[2px] bg-[#ECAB3C]" />
                    <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-white uppercase tracking-wider text-center">
                        Professional Associations, Honors &amp; Recognition
                    </h2>
                    <span className="w-8 sm:w-12 h-[2px] bg-[#ECAB3C]" />
                </div>

                {/* Subtitle */}
                <p className="text-center text-xs sm:text-[13px] md:text-sm text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-8 lg:mb-10">
                    Cynthia is an active member of respected legal organizations and has been
                    recognized for her professional achievements and dedication to her clients and
                    community.
                </p>
            </div>

            {/* Marquee Container with subtle gradient edge fades */}
            <div className="relative z-10 w-full overflow-hidden">
                {/* Left gradient fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#061533] via-[#061533]/80 to-transparent z-20" />

                {/* Right gradient fade */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#061533] via-[#061533]/80 to-transparent z-20" />

                {/* Marquee Track: Seamless Infinite Loop */}
                <div className="animate-marquee gap-4 sm:gap-5 py-2 px-4 flex">
                    {[...associationItems, ...associationItems].map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="w-[185px] sm:w-[205px] h-[180px] sm:h-[190px] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-between text-center select-none shrink-0 transition-transform duration-300 hover:scale-[1.03] hover:shadow-md group"
                        >
                            {/* Logo Image */}
                            <div className="h-12 w-full flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.title}
                                    width={item.logoWidth}
                                    height={item.logoHeight}
                                    className="max-h-11 max-w-[85%] object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h4 className="font-sans font-bold text-[12px] sm:text-[12.5px] text-[#091D46] leading-snug line-clamp-2 px-1">
                                {item.title}
                            </h4>

                            {/* Membership */}
                            <div className="pt-2 border-t border-gray-100 w-full mt-auto">
                                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#ECAB3C] uppercase block truncate">
                                    {item.membership}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
