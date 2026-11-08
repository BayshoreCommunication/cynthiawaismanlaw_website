import React from "react";

const reviews = [
  {
    text: "“Cynthia was very professional and easy to work with. She helped set up a revocable trust and other estate planning documents for my assets, explaining the next steps throughout the entire process. I’d recommend using her!”",
    name: "Jen Linville",
    service: "Revocable Trust & Estate Planning",
  },
  {
    text: "“Cynthia Waisman and staff were exceptional in handling our living will and Trust. The whole process can be very overwhelming and stressful, she made it so easy and smooth. The office was very professional and knowledgeable. I highly recommend it!”",
    name: "Shaun Valdes",
    service: "Living Will & Trust",
  },
  {
    text: "“Cynthia and her team made the process of creating our Living Trust and Will easy and understandable. They took the time to answer all of our questions and explained everything clearly. We truly appreciated their guidance and professionalism throughout the process.”",
    name: "Linda Weisman",
    service: "Living Trust & Will",
  },
];

export function EstateClientReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-11">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            What Our Estate Planning Clients Say
          </h2>
          <div className="flex items-center gap-3 flex-wrap mt-2 text-[#586375]">
            <b className="font-serif font-semibold text-3xl sm:text-4xl text-[#091D46] leading-none">
              5.0
            </b>
            <span
              role="img"
              aria-label="5 out of 5 stars"
              className="text-[#ECAB3C] tracking-[3px] text-lg select-none"
            >
              ★★★★★
            </span>
            <span className="text-sm font-medium text-[#586375]">
              (180) Google Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="m-0 bg-[#fdf8f0] border border-[#ECAB3C]/25 rounded-[20px] p-7 flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.1)] hover:border-[#ECAB3C]"
            >
              <div
                role="img"
                aria-label="5 out of 5 stars"
                className="text-[#ECAB3C] tracking-[3px] text-sm select-none"
              >
                ★★★★★
              </div>
              <blockquote className="m-0 text-[#2b3545] text-[0.97rem] leading-relaxed italic flex-1">
                {r.text}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

