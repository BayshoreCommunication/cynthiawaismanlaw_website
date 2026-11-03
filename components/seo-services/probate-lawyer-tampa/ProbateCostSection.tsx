import React from "react";

const expenses = [
  { item: "Formal administration filing", cost: "Up to $395" },
  { item: "Ancillary administration filing", cost: "Up to $395" },
  { item: "Summary administration, estate $1,000 or more", cost: "Up to $340" },
  { item: "Summary administration, estate below $1,000", cost: "Up to $230" },
  { item: "Disposition without administration", cost: "Up to $230" },
  { item: "Caveat", cost: "$40" },
  { item: "Exemplified certificate", cost: "$7" },
  { item: "Recording", cost: "County recording fees apply" },
  { item: "Publication and notices", cost: "Cost depends on notice requirements" },
  { item: "Certified court documents", cost: "Cost depends on document type" },
  { item: "Property appraisal", cost: "Cost depends on asset and valuation needs" },
  { item: "Accounting and tax preparation", cost: "Cost depends on estate complexity" },
  { item: "Property maintenance", cost: "Cost depends on property" },
  { item: "Real estate transaction expenses", cost: "Cost depends on transaction" },
];

export function ProbateCostSection() {
  return (
    <section
      id="cost"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            How much does probate cost in Florida?
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed">
            Probate expenses depend on administration type, court filings,
            estate assets, property work, notices, recording, accounting and
            other case requirements. Florida law sets maximum clerk filing fees
            for several probate proceedings.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-xs my-6">
          <table className="w-full border-collapse text-left text-sm sm:text-base">
            <thead className="bg-[#091D46] text-[#ECAB3C]">
              <tr>
                <th className="py-4 px-5 sm:px-6 font-semibold tracking-wider text-xs uppercase">
                  Probate Expense
                </th>
                <th className="py-4 px-5 sm:px-6 font-semibold tracking-wider text-xs uppercase">
                  Typical Amount or Basis
                </th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((row) => (
                <tr
                  key={row.item}
                  className="border-b border-gray-100 last:border-b-0 even:bg-[#ECAB3C]/[0.03] hover:bg-[#ECAB3C]/[0.08] transition-colors"
                >
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-[#091D46]">
                    {row.item}
                  </td>
                  <td className="py-3.5 px-5 sm:px-6 text-[#586375]">
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 p-4 rounded-xl bg-[#fdf8f0] border-l-4 border-[#ECAB3C] text-xs sm:text-sm text-[#586375] leading-relaxed italic">
          Disclaimer: We provide the applicable attorney fee after reviewing the
          estate and the probate work required. This section covers legal fees
          for probate representation and related document preparation. Court
          costs, publication costs, recording charges, appraisal or accounting
          fees, and other third-party expenses can vary by estate and service.
        </p>
      </div>
    </section>
  );
}
