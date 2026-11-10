import React from "react";

const delays = [
  "Missing original documents.",
  "Incomplete asset records.",
  "Family disputes.",
  "Will challenge.",
  "Creditor claims.",
  "Real estate title problems.",
  "Homestead questions.",
  "Tax filings.",
  "Business interests.",
  "Beneficiaries living outside Florida.",
  "Court hearings.",
  "Litigation.",
  "Delays in collecting estate assets.",
];

const timelines = [
  {
    process: "Summary administration",
    duration: "Often several weeks to a few months",
  },
  {
    process: "Straightforward formal administration",
    duration: "Often several months",
  },
  {
    process: "Formal administration with tax or real estate matters",
    duration: "Often 6–12 months or longer",
  },
  {
    process: "Contested probate",
    duration: "Often 12 months or longer, based on court and litigation activity",
  },
];

export function ProbateTimelineSection() {
  return (
    <section id="time" className="relative w-full py-12 sm:py-20 lg:py-24 bg-white border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-6 sm:mb-8">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            How long does probate take in Tampa?
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Probate timing depends on administration type, estate assets,
            creditor issues, property matters, beneficiary cooperation, court
            schedules and contested issues.
          </p>
        </div>

        {/* Mobile Timeline Cards */}
        <div className="sm:hidden space-y-3 my-5">
          {timelines.map((row) => (
            <div
              key={row.process}
              className="border border-gray-200 rounded-xl p-4 bg-[#fbf9f5]"
            >
              <p className="font-bold text-sm text-[#091D46] mb-1">
                {row.process}
              </p>
              <p className="text-xs text-[#586375] leading-relaxed m-0">
                {row.duration}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Timeline Table */}
        <div className="hidden sm:block overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-xs my-6">
          <table className="w-full min-w-[580px] border-collapse text-[0.94rem]">
            <thead>
              <tr className="bg-[#091D46]">
                <th className="text-[#ECAB3C] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left">
                  Probate Process
                </th>
                <th className="text-[#ECAB3C] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left">
                  Average Timeline
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {timelines.map((row, idx) => (
                <tr
                  key={row.process}
                  className={
                    idx % 2 === 1
                      ? "bg-[#ECAB3C]/[0.06] hover:bg-[#ECAB3C]/[0.10] transition-colors"
                      : "hover:bg-[#fbf9f5] transition-colors"
                  }
                >
                  <td className="py-4 px-6 font-bold text-[#091D46]">{row.process}</td>
                  <td className="py-4 px-6 text-[#586375]">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#586375] leading-relaxed max-w-4xl mt-3">
          Disclaimer: These are general probate timeline ranges for planning
          purposes. Actual timing can vary based on the type of probate
          administration, estate complexity, creditor claims, beneficiary
          issues, required court filings, asset records, real estate matters, and
          court scheduling.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-serif text-2xl font-semibold text-[#091D46] mb-5">
            What can delay a probate case?
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {delays.map((item) => (
              <span
                key={item}
                className="bg-[#fbf9f5] border border-gray-200 rounded-full px-4 py-2 text-sm text-[#2b3545] font-medium transition-all duration-200 hover:border-[#ECAB3C] hover:bg-[#ECAB3C]/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
