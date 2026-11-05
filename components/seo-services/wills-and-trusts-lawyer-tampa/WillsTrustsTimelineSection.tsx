import React from "react";

const timingRows = [
  {
    work: "Simple will",
    timing: "Often a few weeks",
  },
  {
    work: "Will with minor child planning",
    timing: "Often a few weeks",
  },
  {
    work: "Revocable living trust",
    timing: "Often a few weeks",
  },
  {
    work: "Trust with real estate funding",
    timing: "Often several weeks",
  },
  {
    work: "Trust with business or multiple assets",
    timing: "Several weeks or longer",
  },
  {
    work: "Estate plan update",
    timing: "Depends on the changes",
  },
];

const delays = [
  "Complex family structures",
  "Multiple properties or business interests",
  "Missing asset records",
  "Changes during document review",
  "Deed preparation and recording",
  "Bank or brokerage processing",
  "Beneficiary form updates",
  "Third party approvals",
];

export function WillsTrustsTimelineSection() {
  return (
    <section
      id="time"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            How Long Does a Will or Trust Take in Tampa?
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Timing depends on the type of plan, your family structure, the number
            of assets and the funding work.
          </p>
        </div>

        <div
          tabIndex={0}
          role="region"
          aria-label="Estate planning timeline table"
          className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-xs my-6 focus:outline-none focus:ring-2 focus:ring-[#ECAB3C]"
        >
          <table className="w-full min-w-[580px] border-collapse text-[0.94rem]">
            <thead>
              <tr className="bg-[#091D46]">
                <th className="text-[#ECAB3C] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left">
                  Estate planning work
                </th>
                <th className="text-[#ECAB3C] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left">
                  Typical Timing
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {timingRows.map((row, idx) => (
                <tr
                  key={row.work}
                  className={
                    idx % 2 === 0
                      ? "hover:bg-[#fbf9f5] transition-colors"
                      : "bg-[#ECAB3C]/[0.06] hover:bg-[#ECAB3C]/[0.10] transition-colors"
                  }
                >
                  <td className="py-4 px-6 font-bold text-[#091D46]">{row.work}</td>
                  <td className="py-4 px-6 text-[#586375]">{row.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#586375] leading-relaxed max-w-4xl mt-3">
          **Disclaimer: These are general planning ranges for reference. Actual
          timing can vary with document revisions, family circumstances, asset
          records, deed preparation and recording, financial-institution
          processing, and other third-party requirements.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-serif text-2xl font-semibold text-[#091D46] mb-5">
            What can delay will &amp; trust matter?
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

