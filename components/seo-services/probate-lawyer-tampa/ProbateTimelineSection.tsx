import React from "react";

const delays = [
  "Missing original documents.",
  "Incomplete asset records.",
  "Family disputes.",
  "Will challenges.",
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

export function ProbateTimelineSection() {
  return (
    <section id="time" className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-[#e4dccb]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#0e2240] leading-[1.22] mb-3.5">
            How long does probate take in Tampa?
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Probate timing depends on administration type, estate assets,
            creditor issues, property matters, beneficiary cooperation, court
            schedules and contested issues.
          </p>
        </div>

        <div className="overflow-x-auto border border-[#e4dccb] rounded-2xl bg-white shadow-xs my-6">
          <table className="w-full min-w-[580px] border-collapse text-[0.94rem]">
            <thead>
              <tr className="bg-[#0e2240]">
                <th className="text-[#e0bd7c] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left">
                  Probate Process
                </th>
                <th className="text-[#e0bd7c] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left">
                  Average Timeline
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4dccb]">
              <tr className="hover:bg-[#fbf9f5] transition-colors">
                <td className="py-4 px-6 font-bold text-[#0e2240]">Summary administration</td>
                <td className="py-4 px-6 text-[#586375]">Often several weeks to a few months</td>
              </tr>
              <tr className="bg-[#b8914a]/[0.05] hover:bg-[#b8914a]/[0.08] transition-colors">
                <td className="py-4 px-6 font-bold text-[#0e2240]">Straightforward formal administration</td>
                <td className="py-4 px-6 text-[#586375]">Often several months</td>
              </tr>
              <tr className="hover:bg-[#fbf9f5] transition-colors">
                <td className="py-4 px-6 font-bold text-[#0e2240]">Formal administration with tax or real estate matters</td>
                <td className="py-4 px-6 text-[#586375]">Often 6–12 months or longer</td>
              </tr>
              <tr className="bg-[#b8914a]/[0.05] hover:bg-[#b8914a]/[0.08] transition-colors">
                <td className="py-4 px-6 font-bold text-[#0e2240]">Contested probate</td>
                <td className="py-4 px-6 text-[#586375]">
                  Often 12 months or longer, based on court and litigation activity
                </td>
              </tr>
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

        <div className="mt-12 pt-8 border-t border-[#e4dccb]">
          <h3 className="font-serif text-2xl font-semibold text-[#0e2240] mb-5">
            What can delay probate case?
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {delays.map((item) => (
              <span
                key={item}
                className="bg-[#fbf9f5] border border-[#e4dccb] rounded-full px-4 py-2 text-sm text-[#2b3545] font-medium transition-all duration-200 hover:border-[#b8914a] hover:bg-[#b8914a]/10"
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
