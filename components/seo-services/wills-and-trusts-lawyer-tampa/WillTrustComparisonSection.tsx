import React from "react";

const comparisonRows = [
  {
    feature: "What it is",
    will: "instructions for the court after death",
    trust: "legal owner for your assets, starting now",
    ladyBird: "deed passes one Florida property at death",
  },
  {
    feature: "When it works",
    will: "at death",
    trust: "once signed and funded",
    ladyBird: "at death, by recorded deed",
  },
  {
    feature: "Probate in Tampa",
    will: "probate administration through Hillsborough County",
    trust: "funded trust assets can pass outside probate",
    ladyBird: "applies to property covered by deed",
  },
  {
    feature: "Illness or incapacity",
    will: "the will waits and court may need to step in",
    trust: "successor trustee can manage trust assets under trust terms",
    ladyBird: "owner keeps retained powers during life",
  },
  {
    feature: "Minor children",
    will: "names a guardian",
    trust: "holds money and pair with a will for guardians",
    ladyBird: "no",
  },
  {
    feature: "Privacy",
    will: "public probate file",
    trust: "private",
    ladyBird: "deed sits in public records",
  },
  {
    feature: "Homestead house/tax",
    will: "will gift can fail if a spouse or minor child survives",
    trust: "can hold the house with the right language",
    ladyBird: "stays with you",
  },
  {
    feature: "Funding / execution",
    will: "must meet Florida signing rules",
    trust: "must be properly funded for intended assets",
    ladyBird: "must use the correct enhanced life estate language",
  },
];

export function WillTrustComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] mb-8 sm:mb-10">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Will vs. Trust vs. Lady Bird Deed : A Quick Comparison
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed m-0">
            A will, a revocable living trust and a Lady Bird deed do different jobs.
            A will names people for the court and still goes through probate. A
            funded living trust can pass titled assets outside probate. A Lady Bird
            deed can pass one Florida property at death while you keep control
            during life. Use the chart to see the split.
          </p>
        </div>

        {/* Mobile Stacked Feature Cards */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row) => (
            <div
              key={row.feature}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs"
            >
              <div className="bg-[#091D46] px-4 py-3">
                <span className="text-[#ECAB3C] font-bold text-xs uppercase tracking-wider">
                  {row.feature}
                </span>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                <div className="p-4">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Will
                  </span>
                  <p className="text-[#586375] leading-relaxed m-0">{row.will}</p>
                </div>
                <div className="p-4 bg-[#fdf8f0]">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#091D46] mb-1">
                    Trust (Revocable Living Trust)
                  </span>
                  <p className="text-[#091D46] font-medium leading-relaxed m-0">
                    {row.trust}
                  </p>
                </div>
                <div className="p-4">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Lady Bird Deed
                  </span>
                  <p className="text-[#586375] leading-relaxed m-0">
                    {row.ladyBird}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Comparison Table */}
        <div
          tabIndex={0}
          role="region"
          aria-label="Will vs Trust comparison table"
          className="hidden md:block overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-[#ECAB3C]"
        >
          <table className="w-full min-w-[760px] border-collapse text-[0.94rem]">
            <thead>
              <tr className="bg-[#091D46]">
                <th className="text-[#ECAB3C] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left w-1/4">
                  Feature
                </th>
                <th className="text-white text-xs font-bold tracking-wider uppercase py-4 px-6 text-left w-1/4">
                  Will
                </th>
                <th className="text-[#ECAB3C] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left w-1/4 bg-[#0e275c]">
                  Trust (or Revocable living trust)
                </th>
                <th className="text-white text-xs font-bold tracking-wider uppercase py-4 px-6 text-left w-1/4">
                  Lady Bird deed
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={idx % 2 === 0 ? "bg-white hover:bg-[#fbf9f5] transition-colors" : "bg-[#fbf9f5]/60 hover:bg-[#fbf9f5] transition-colors"}
                >
                  <td className="py-4 px-6 font-bold text-[#091D46]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-[#586375] leading-relaxed">
                    {row.will}
                  </td>
                  <td className="py-4 px-6 text-[#091D46] font-medium leading-relaxed bg-[#ECAB3C]/[0.05]">
                    {row.trust}
                  </td>
                  <td className="py-4 px-6 text-[#586375] leading-relaxed">
                    {row.ladyBird}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

