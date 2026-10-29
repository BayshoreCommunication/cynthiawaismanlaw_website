"use client";

import React, { useRef, useState, useEffect } from "react";
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
        logo: "/images/associations/assoc-1-florida-bar.png",
        logoWidth: 132,
        logoHeight: 123,
    },
    {
        id: "assoc-2",
        title: "American Bar Association",
        membership: "Member",
        logo: "/images/associations/assoc-2-aba.png",
        logoWidth: 141,
        logoHeight: 96,
    },
    {
        id: "assoc-3",
        title: "American Immigration Lawyers Association",
        membership: "Member",
        logo: "/images/associations/assoc-3-aila.png",
        logoWidth: 153,
        logoHeight: 114,
    },
    {
        id: "assoc-4",
        title: "Hillsborough County Bar Association",
        membership: "Member",
        logo: "/images/associations/assoc-4-hcba.png",
        logoWidth: 141,
        logoHeight: 114,
    },
    {
        id: "assoc-5",
        title: "Clearwater Bar Association",
        membership: "Member",
        logo: "/images/associations/assoc-5-clearwater-bar.png",
        logoWidth: 147,
        logoHeight: 111,
    },
    {
        id: "assoc-6",
        title: "Real Property, Probate & Trust Law",
        membership: "Section Member",
        logo: "/images/associations/assoc-6-rpptl.png",
        logoWidth: 147,
        logoHeight: 93,
    },
    {
        id: "assoc-7",
        title: "Upper Tampa Bay Chamber",
        membership: "Member",
        logo: "/images/associations/honor-3-chamber.png",
        logoWidth: 168,
        logoHeight: 102,
    },
    {
        id: "assoc-8",
        title: "Robert Morris College",
        membership: "Former Adjunct Professor",
        logo: "/images/associations/assoc-8-robert-morris.png",
        logoWidth: 153,
        logoHeight: 99,
    },
    {
        id: "assoc-9",
        title: "Florida Bar Grievance Committee",
        membership: "Former Chairman",
        logo: "/images/associations/assoc-9-grievance.png",
        logoWidth: 150,
        logoHeight: 96,
    },
    {
        id: "honor-1",
        title: "Lead Counsel",
        membership: "Verified",
        logo: "/images/associations/honor-1-lead-counsel.png",
        logoWidth: 123,
        logoHeight: 129,
    },
    {
        id: "honor-2",
        title: "ARAG Legal Insurance",
        membership: "Accepted Here",
        logo: "/images/associations/honor-2-arag.png",
        logoWidth: 117,
        logoHeight: 132,
    },
    {
        id: "honor-3",
        title: "Upper Tampa Bay Chamber",
        membership: "Honored Member",
        logo: "/images/associations/honor-3-chamber.png",
        logoWidth: 150,
        logoHeight: 132,
    },
    {
        id: "honor-4",
        title: "Expertise.com",
        membership: "Best Probate Lawyers 2022",
        logo: "/images/associations/honor-4-expertise.png",
        logoWidth: 129,
        logoHeight: 123,
    },
    {
        id: "honor-5",
        title: "Lawyers of Distinction",
        membership: "2018 – 2019",
        logo: "/images/associations/honor-5-lawyers-distinction.png",
        logoWidth: 135,
        logoHeight: 120,
    },
    {
        id: "honor-6",
        title: "Top Lawyers in Florida",
        membership: "2016 – 2019",
        logo: "/images/associations/honor-6-top-lawyers.png",
        logoWidth: 138,
        logoHeight: 99,
    },
    {
        id: "honor-7",
        title: "Best Lawyers in America",
        membership: "2016 – 2019",
        logo: "/images/associations/honor-7-best-lawyers.png",
        logoWidth: 159,
        logoHeight: 96,
    },
    {
        id: "honor-8",
        title: "Who's Who in American Law",
        membership: "2016 – 2019",
        logo: "/images/associations/honor-8-whos-who.png",
        logoWidth: 165,
        logoHeight: 99,
    },
    {
        id: "honor-9",
        title: "Martindale-Hubbell",
        membership: "Client Champion 2018 – 2019",
        logo: "/images/associations/honor-9-martindale.png",
        logoWidth: 162,
        logoHeight: 102,
    },
];

export default function ProfessionalAssociations() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const isDownRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const scrollPosRef = useRef(0);
    const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameId = useRef<number | null>(null);

    // Initial positioning: start in the middle set of 3 so dragging left or right works seamlessly
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const initPosition = () => {
            if (container) {
                const singleSetWidth = container.scrollWidth / 3;
                if (singleSetWidth > 0 && (container.scrollLeft === 0 || scrollPosRef.current === 0)) {
                    container.scrollLeft = singleSetWidth;
                    scrollPosRef.current = singleSetWidth;
                }
            }
        };

        const timer1 = setTimeout(initPosition, 60);
        const timer2 = setTimeout(initPosition, 350);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Smooth auto-play loop with requestAnimationFrame
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const speed = 0.8; // pixels per frame

        const step = () => {
            if (!isHovered && !isDownRef.current && container) {
                scrollPosRef.current += speed;
                const singleSetWidth = container.scrollWidth / 3;

                if (singleSetWidth > 0) {
                    if (scrollPosRef.current >= singleSetWidth * 2) {
                        scrollPosRef.current -= singleSetWidth;
                    } else if (scrollPosRef.current <= singleSetWidth * 0.1) {
                        scrollPosRef.current += singleSetWidth;
                    }
                }
                container.scrollLeft = scrollPosRef.current;
            } else if (container) {
                scrollPosRef.current = container.scrollLeft;
            }
            animationFrameId.current = requestAnimationFrame(step);
        };

        animationFrameId.current = requestAnimationFrame(step);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [isHovered]);

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        isDownRef.current = true;
        setIsDragging(true);
        startXRef.current = e.pageX - container.offsetLeft;
        scrollLeftRef.current = container.scrollLeft;
        scrollPosRef.current = container.scrollLeft;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDownRef.current) return;
        const container = scrollContainerRef.current;
        if (!container) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startXRef.current) * 1.5; // Drag speed sensitivity
        container.scrollLeft = scrollLeftRef.current - walk;
        scrollPosRef.current = container.scrollLeft;

        // Wrap around seamlessly during drag
        const singleSetWidth = container.scrollWidth / 3;
        if (singleSetWidth > 0) {
            if (container.scrollLeft >= singleSetWidth * 2) {
                container.scrollLeft -= singleSetWidth;
                scrollLeftRef.current -= singleSetWidth;
                scrollPosRef.current = container.scrollLeft;
            } else if (container.scrollLeft <= singleSetWidth * 0.1) {
                container.scrollLeft += singleSetWidth;
                scrollLeftRef.current += singleSetWidth;
                scrollPosRef.current = container.scrollLeft;
            }
        }
    };

    const handleMouseUp = () => {
        isDownRef.current = false;
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollPosRef.current = scrollContainerRef.current.scrollLeft;
        }
    };

    const handleMouseLeave = () => {
        isDownRef.current = false;
        setIsDragging(false);
        setIsHovered(false);
        if (scrollContainerRef.current) {
            scrollPosRef.current = scrollContainerRef.current.scrollLeft;
        }
    };

    const handleMouseEnter = () => {
        // Only pause on hover for devices with actual hover/mouse support (avoids sticky hover freeze on iPhone/iPad)
        if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
            setIsHovered(true);
        }
    };

    // Touch handlers for mobile (iPhone, iPad, Android)
    const handleTouchStart = () => {
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        isDownRef.current = true;
        setIsDragging(true);
    };

    const handleTouchEnd = () => {
        isDownRef.current = false;
        setIsDragging(false);
        setIsHovered(false);
        if (scrollContainerRef.current) {
            scrollPosRef.current = scrollContainerRef.current.scrollLeft;
        }
        // Resume auto-scroll smoothly after touch interaction
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            isDownRef.current = false;
            setIsHovered(false);
            if (scrollContainerRef.current) {
                scrollPosRef.current = scrollContainerRef.current.scrollLeft;
            }
        }, 600);
    };

    const handleTouchCancel = () => {
        handleTouchEnd();
    };

    const handleScroll = () => {
        if (isDownRef.current && scrollContainerRef.current) {
            scrollPosRef.current = scrollContainerRef.current.scrollLeft;
        }
    };

    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden pt-8 lg:pt-10 text-gray-900"
            style={{
                backgroundImage: "url('/images/professional-associations-bg-image-gray.png')",
            }}
        >
            {/* Light gray overlay with reduced opacity so bg image is subtly visible */}
            <div className="absolute inset-0 bg-[#f4f5f8]/70 backdrop-blur-[0.5px] pointer-events-none" />

            {/* Same 1320px Global Container for Header */}
            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4" data-animate="fade-up">
                {/* Section Header: Title with Gold Lines */}
                <div className="flex items-center justify-center gap-3.5 mb-2.5">
                    <span className="w-8 sm:w-12 h-[2px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "3rem" } as React.CSSProperties} />
                    <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-black uppercase tracking-wider text-center">
                        Professional Associations, Honors &amp; Recognition
                    </h2>
                    <span className="w-8 sm:w-12 h-[2px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "3rem" } as React.CSSProperties} />
                </div>

                {/* Subtitle */}
                <p className="text-center text-xs sm:text-[13px] md:text-sm text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed" data-animate="fade-up" data-delay="150">
                    Cynthia is an active member of respected legal organizations and has been
                    recognized for her professional achievements and dedication to her clients and
                    community.
                </p>
            </div>

            {/* Drag & Auto-play Marquee Container with subtle gradient edge fades */}
            <div className="relative z-10 w-full overflow-hidden" data-animate="fade-up" data-delay="250">
                {/* Left gradient fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f4f5f8]/80 via-[#f4f5f8]/40 to-transparent z-20" />

                {/* Right gradient fade */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f4f5f8]/80 via-[#f4f5f8]/40 to-transparent z-20" />

                {/* Interactive Drag & Auto-play Track */}
                <div
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchCancel}
                    onScroll={handleScroll}
                    className={`w-full overflow-x-auto no-scrollbar flex gap-4 sm:gap-6 pt-2 pb-4 px-4 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
                        }`}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {/* Render 3 copies of items for seamless infinite drag and auto-scroll */}
                    {[...associationItems, ...associationItems, ...associationItems].map(
                        (item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="w-[210px] sm:w-[235px] flex flex-col items-center text-center select-none shrink-0 transition-transform duration-300 hover:scale-105 group pointer-events-auto px-2 py-2"
                            >
                                {/* 1. Image (Logo) */}
                                <div className="h-20 sm:h-24 w-full flex items-center justify-center shrink-0 pointer-events-none">
                                    <Image
                                        src={item.logo}
                                        alt={item.title}
                                        width={Math.round(item.logoWidth * 1.6)}
                                        height={Math.round(item.logoHeight * 1.6)}
                                        draggable={false}
                                        className="max-h-[72px] sm:max-h-[88px] w-auto max-w-[92%] object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* 2. Title */}
                                <div className="mt-3.5 mb-2 flex items-center justify-center">
                                    <h4 className="font-sans font-bold text-xs sm:text-[13.5px] text-black  leading-snug line-clamp-2 px-1 select-none">
                                        {item.title}
                                    </h4>
                                </div>

                                {/* 3. Position (Membership) */}
                                <div className="pt-0.5 w-full select-none">
                                    <span className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#b87e22] uppercase block truncate select-none">
                                        {item.membership}
                                    </span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
