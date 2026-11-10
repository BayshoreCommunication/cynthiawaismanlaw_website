import React from "react";

const costRows = [
  {
    service: "Simple will",
    factors:
      "Beneficiaries, personal representative, guardian nominations and distribution terms",
  },
  {
    service: "Will with minor children",
    factors:
      "Guardian provisions, children's trust terms and distribution instructions",
  },
  {
    service: "Revocable living trust",
    factors:
      "Trust terms, successor trustee provisions, beneficiaries and distribution rules",
  },
  {
    service: "Trust funding",
    factors:
      "Deed preparation, account coordination, business interest transfers and asset review",
  },
  {
    service: "Lady Bird deed",
    factors:
      "Property ownership, homestead status, spouse rights and deed preparation",
  },
  {
    service: "Blended family planning",
    factors:
      "Spousal rights, children from prior relationships, stepchildren and distribution terms",
  },
  {
    service: "Business succession planning",
    factors:
      "Business structure, operating agreements, ownership records and transfer restrictions",
  },
  {
    service: "Special needs planning",
    factors:
      "Beneficiary circumstances, trust type, funding source and benefit rules",
  },
  {
    service: "Estate plan update",
    factors:
      "Existing documents, family changes, property changes and beneficiary updates",
  },
];

export function WillsTrustsCostSection() {
  return (
    <section
      id="cost"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-6 sm:mb-8">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            How Much Does a Will or Trust Cost in Florida?
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed">
            Florida does not set one statewide attorney fee for a will or trust.
            The fee depends on the documents, family structure, assets and
            funding work. After we review your facts, we give you the applicable
            attorney fee. Recording charges and other third-party costs are
            separate.
          </p>
        </div>

        {/* Mobile Cost Cards */}
        <div className="sm:hidden space-y-3 my-5">
          {costRows.map((row) => (
            <div
              key={row.service}
              className="border border-gray-200 rounded-xl p-4 bg-white"
            >
              <p className="font-bold text-sm text-[#091D46] mb-1">
                {row.service}
              </p>
              <p className="text-xs text-[#586375] leading-relaxed m-0">
                {row.factors}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Cost Table */}
        <div
          tabIndex={0}
          role="region"
          aria-label="Estate planning cost factors table"
          className="hidden sm:block overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-xs my-6 focus:outline-none focus:ring-2 focus:ring-[#ECAB3C]"
        >
          <table className="w-full border-collapse text-left text-sm sm:text-base">
            <thead className="bg-[#091D46] text-[#ECAB3C]">
              <tr>
                <th className="py-4 px-5 sm:px-6 font-semibold tracking-wider text-xs uppercase w-1/3">
                  Estate Planning Service
                </th>
                <th className="py-4 px-5 sm:px-6 font-semibold tracking-wider text-xs uppercase w-2/3">
                  What Can Affect the Legal Fee
                </th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row) => (
                <tr
                  key={row.service}
                  className="border-b border-gray-100 last:border-b-0 even:bg-[#ECAB3C]/[0.03] hover:bg-[#ECAB3C]/[0.08] transition-colors"
                >
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-[#091D46]">
                    {row.service}
                  </td>
                  <td className="py-3.5 px-5 sm:px-6 text-[#586375] leading-relaxed">
                    {row.factors}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 p-4 rounded-xl bg-[#fdf8f0] border-l-4 border-[#ECAB3C] text-xs sm:text-sm text-[#586375] leading-relaxed italic">
          **Disclaimer: We provide the applicable attorney fee after reviewing
          your estate planning needs. This section covers legal fees for
          planning and document preparation. Recording charges and other third
          party expenses can vary based on the work involved.
        </p>
      </div>
    </section>
  );
}

