import React from "react";

const comparisonRows = [
  {
    defaultSituation: "The state decides who inherits your assets",
    customAdvantage: "You dictate exactly who inherits and under what terms",
  },
  {
    defaultSituation: "A judge picks who raises your kids",
    customAdvantage:
      "You preselect trusted guardians who share your parenting values",
  },
  {
    defaultSituation: "Your family must petition a court upon your incapacity",
    customAdvantage:
      "Your designated agent immediately steps in to manage finances via a Power of Attorney",
  },
  {
    defaultSituation: "Doctors guess your end of life medical preferences",
    customAdvantage:
      "Your Healthcare Surrogate enforces your exact wishes through a clear Living Will",
  },
  {
    defaultSituation:
      "Your estate goes through a public and lengthy probate process",
    customAdvantage:
      "Properly funded trusts bypass probate entirely to preserve your family wealth and privacy",
  },
  {
    defaultSituation: "Online template forms often fail judicial scrutiny",
    customAdvantage:
      "Your documents are drafted by an experienced estate planning attorney tampa to ensure total legal compliance",
  },
];

export function CustomPlanComparisonSection() {
  return (
    <section
      id="custom-plan"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] mb-10">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Custom Estate Planning with Cynthia I. Waisman, P.A.
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
            A true estate plan goes far beyond a single piece of paper. It
            involves carefully coordinated legal documents designed to reflect
            your wishes, address your family&apos;s needs and reduce the
            potential for future disputes. A qualified will &amp; trust lawyer
            in Tampa can help you determine which documents are appropriate for
            your circumstances and how they work together to support your estate
            plan.
          </p>
        </div>

        <div
          tabIndex={0}
          role="region"
          aria-label="Default vs Custom Plan comparison table"
          className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-[#ECAB3C]"
        >
          <table className="w-full min-w-[700px] border-collapse text-[0.95rem]">
            <thead>
              <tr className="bg-[#091D46]">
                <th className="text-white text-xs font-bold tracking-wider uppercase py-4 px-6 text-left w-1/2">
                  What Happens By Default
                </th>
                <th className="text-[#ECAB3C] text-xs font-bold tracking-wider uppercase py-4 px-6 text-left w-1/2 bg-[#0e275c]">
                  The Advantage of a Custom Plan with Cynthia I. Waisman, P.A.
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={row.defaultSituation}
                  className={
                    idx % 2 === 0
                      ? "bg-white hover:bg-[#fbf9f5] transition-colors"
                      : "bg-[#fbf9f5]/60 hover:bg-[#fbf9f5] transition-colors"
                  }
                >
                  <td className="py-4.5 px-6 text-[#586375] leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{row.defaultSituation}</span>
                    </div>
                  </td>
                  <td className="py-4.5 px-6 text-[#091D46] font-medium leading-relaxed bg-[#ECAB3C]/[0.05]">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ECAB3C] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{row.customAdvantage}</span>
                    </div>
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

