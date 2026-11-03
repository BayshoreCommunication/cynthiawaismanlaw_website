import React from "react";

export function TestimonialsProbateSection() {
  const reviews = [
    {
      text: "“Cynthia helped us establish wills for our estate and our living wills. She explained everything in simple terms, made sure all the documents covered our situation, and her fees were very reasonable. I highly recommend Cynthia for any estate planning needs.”",
      name: "Debra",
      service: "Wills & Living Trusts",
    },
    {
      text: "“Before working with Waisman Law Group I knew nothing about the estate planning process. But Cynthia was extremely thorough in guiding me through every step. They were so patient and kind to answer all my questions. Couldn’t recommend this firm enough!”",
      name: "JT",
      service: "Estate Planning & Trust Law",
    },
    {
      text: "“The team at Waisman Law Group has always provided outstanding legal service. They are quick to create estate planning documents accurately and communicate every detail with precision. I strongly recommend Cynthia Waisman for every estate planning need.”",
      name: "Nicole L.",
      service: "Estate Planning & Documents",
    },
    {
      text: "“She takes her time, explains everything clearly and was very personable. If you are in need of a lawyer please contact Cynthia. Her scope is broad and exceptional. Contact her, you will be very happy you did!”",
      name: "Connie",
      service: "Estate Planning & Legal Guidance",
    },
    {
      text: "“I highly recommend Cynthia Waisman. She quickly grasps your legal needs and focuses on these matters without all the confusing legal jargon. Precise, knowledgeable, and straight to the point!”",
      name: "Mike",
      service: "Estate & Legal Consultation",
    },
    {
      text: "“We wanted to make sure our children would be cared for no matter what. Cynthia took the time to understand our family, discussed guardianship options with us, and created a plan that gave us real peace of mind. She truly cares.”",
      name: "Michael & Jennifer",
      service: "Guardianship & Estate Planning",
    },
  ];

  return (
    <section id="families" className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-11">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Tampa Families We&apos;ve Guided Through Probate
          </h2>
          <div className="flex items-center gap-3 flex-wrap mt-2 text-[#586375]">
            <b className="font-serif font-semibold text-3xl sm:text-4xl text-[#091D46] leading-none">5.0</b>
            <span className="text-[#ECAB3C] tracking-[3px] text-lg select-none">★★★★★</span>
            <span className="text-sm font-medium text-[#586375]">(180) Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="m-0 bg-[#fdf8f0] border border-[#ECAB3C]/25 rounded-[20px] p-7 flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.1)] hover:border-[#ECAB3C]"
            >
              <div className="text-[#ECAB3C] tracking-[3px] text-sm select-none">★★★★★</div>
              <blockquote className="m-0 text-[#2b3545] text-[0.97rem] leading-relaxed italic flex-1">
                {r.text}
              </blockquote>
              <figcaption className="mt-2 pt-3 border-t border-[#ECAB3C]/20">
                <b className="block text-[#091D46] font-serif text-[1.1rem] font-semibold not-italic">
                  {r.name}
                </b>
                <span className="text-[#ECAB3C] text-[0.85rem] font-medium not-italic">
                  {r.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
