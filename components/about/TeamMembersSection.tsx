"use client";

import React from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  image: string;
  bio: React.ReactNode;
  funFactIcon: "paw" | "music";
  funFactText: string;
  imageOnRight?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: "kelly",
    name: "Kelly",
    role: "LEGAL ASSISTANT",
    title: "Kelly – Legal Assistant",
    image: "/images/team/kelly-1.png",
    bio: (
      <p>
        Kelly Dorian is a Legal Assistant to our attorneys at Waisman Law Group.
        Kelly&apos;s career goals were fulfilled when his love of law and helping
        people were united. Kelly has been working at our firm for over three years.
        The most enjoyable part of his job is aiding clients in achieving their legal
        goals. Kelly finds it important to offer a sympathetic heart when a client is
        scared or worried. Kelly&apos;s past work experience has helped enhance his
        intrapersonal work skills. He is diligent, respectful, patient, and
        knowledgeable making him an invaluable member of Waisman Law Group family.
      </p>
    ),
    funFactIcon: "paw",
    funFactText:
      "A fun fact about Kelly is he has competed in swimming competitions most of his life and still does so. He also enjoys spending time with his dog, Mia.",
    imageOnRight: false,
  },
  {
    id: "evan",
    name: "Evan",
    role: "LAW CLERK",
    title: "Evan – Law Clerk",
    image: "/images/team/evan-1.png",
    bio: (
      <div className="space-y-3">
        <p>
          Evan Sagar is a part time Law Clerk at Waisman Law Group, he has been
          working at our firm close to a year. He currently attends Stetson
          University, College of Law, and is expected to graduate in May of 2023.
          Evan completed his undergrad at the University of Florida where he double
          majored in Sociology and Music.
        </p>
        <p>
          A fun fact about Evan is he is bilingual in English and Bangla. Outside of
          work and school Evan enjoys creating music, his favorite instrument to play
          is the drums. He also enjoys spending time with his dog, Walter.
        </p>
      </div>
    ),
    funFactIcon: "music",
    funFactText:
      "A fun fact about Evan is he is bilingual in English and Bangla. Outside of work and school Evan enjoys creating music, his favorite instrument to play is the drums. He also enjoys spending time with his dog, Walter.",
    imageOnRight: true,
  },
  {
    id: "beatriz",
    name: "Beatriz",
    role: "LEGAL ASSISTANT",
    title: "Beatriz – Legal Assistant",
    image: "/images/team/beatriz-1.png",
    bio: (
      <p>
        Beatriz Franco serves as a Legal Assistant at Waisman Law Group, where she
        combines her passion for the legal field with her dedication to supporting
        others. Beatriz plays a key role in helping clients navigate their legal
        matters with care and professionalism. Her background in various professional
        settings has equipped her with strong people skills and a calm,
        solution-oriented mindset, making her a trusted and valued part of the team.
      </p>
    ),
    funFactIcon: "paw",
    funFactText:
      "A fun fact about Beatriz is she is bilingual in English and Spanish. Outside of work, Beatriz enjoys playing golf and going to the gym. She has three dogs and loves spending time with them.",
    imageOnRight: false,
  },
];

export default function TeamMembersSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#fbfcfd]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {teamMembers.map((member, index) => {
            const isImageRight = member.imageOnRight;

            return (
              <React.Fragment key={member.id}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Photo Column */}
                  <div
                    className={`md:col-span-4 lg:col-span-4 ${isImageRight
                      ? "order-1 md:order-2 md:flex md:justify-end"
                      : "order-1 md:order-1"
                      }`}
                    data-animate={isImageRight ? "fade-left" : "fade-right"}
                  >
                    <div className="relative w-full max-w-[320px] mx-auto md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                      <Image
                        src={member.image}
                        alt={member.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 280px, 320px"
                      />
                    </div>
                  </div>

                  {/* Bio & Details Column */}
                  <div
                    className={`md:col-span-8 lg:col-span-8 space-y-4 ${isImageRight
                      ? "order-2 md:order-1"
                      : "order-2 md:order-2"
                      }`}
                    data-animate={isImageRight ? "fade-right" : "fade-left"}
                    data-delay="150"
                  >
                    {/* Pre-heading Role */}
                    <div className="inline-flex items-center gap-2.5">
                      <span className="w-8 h-[2px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "2rem" } as React.CSSProperties} />
                      <span className="text-xs font-bold tracking-widest text-[#ECAB3C] uppercase font-sans">
                        {member.role}
                      </span>
                    </div>

                    {/* Member Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#091D46] tracking-tight leading-tight">
                      {member.title}
                    </h3>

                    {/* Bio Paragraphs */}
                    <div className="text-sm sm:text-base text-[#4a5568] leading-relaxed font-sans pt-1">
                      {member.bio}
                    </div>

                    {/* Fun Fact Callout Box */}
                    <div className="bg-[#FAF7F2] rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 border border-amber-100/60 shadow-2xs mt-4">
                      {member.funFactIcon === "paw" ? (
                        <svg
                          className="w-8 h-8 sm:w-9 sm:h-9 text-[#ECAB3C] shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {/* Main Pad */}
                          <path d="M12 11.2c-2.6 0-4.7 1.8-4.7 4.1 0 1.5 1.3 2.8 2.9 2.8.7 0 1.4-.2 1.8-.7.3-.4.8-.4 1.1 0 .4.5 1.1.7 1.8.7 1.6 0 2.9-1.3 2.9-2.8 0-2.3-2.1-4.1-4.8-4.1z" />
                          {/* Toes */}
                          <ellipse cx="6.5" cy="9.8" rx="1.5" ry="2" />
                          <ellipse cx="10" cy="7.2" rx="1.5" ry="2" />
                          <ellipse cx="14" cy="7.2" rx="1.5" ry="2" />
                          <ellipse cx="17.5" cy="9.8" rx="1.5" ry="2" />
                        </svg>
                      ) : (
                        <svg
                          className="w-8 h-8 sm:w-9 sm:h-9 text-[#ECAB3C] shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 3.2v12.3a3.5 3.5 0 1 1-3.5-3.5c.5 0 1 .1 1.5.3V6.3L9 8.3v9.2a3.5 3.5 0 1 1-3.5-3.5c.5 0 1 .1 1.5.3V5.5a1.5 1.5 0 0 1 1.2-1.5l11.5-2.3c.7-.1 1.3.4 1.3 1.1z" />
                        </svg>
                      )}

                      <p className="text-xs sm:text-[13.5px] text-[#4a5568] leading-relaxed font-sans">
                        {member.funFactText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle Divider between team members (except the last one) */}
                {index < teamMembers.length - 1 && (
                  <hr className="border-t border-gray-200/80 my-8 sm:my-12" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

