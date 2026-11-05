import React from "react";
import Link from "next/link";

interface ProbateTypeItem {
  num: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export function ProbateTypesSection() {
  const types: ProbateTypeItem[] = [
    {
      num: "A",
      title: "Disposition without administration",
      description:
        "Disposition of personal property without administration offers a limited procedure for certain qualifying estates. Florida Statutes Chapter 735 establishes this process for specific circumstances. This option can help with qualifying final expenses and selected personal property.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 13h6 M9 17h6" />
        </svg>
      ),
    },
    {
      num: "B",
      title: "Summary administration",
      description: (
        <>
          <Link
            href="/probate-administration/summary-administration"
            className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
          >
            Summary administration
          </Link>{" "}
          provides a simpler probate procedure for qualifying estates. Under the 2026 Florida Statutes, the estate subject to administration in Florida must have a value of $150,000 or less. After the statutory treatment of property exempt from creditor claims or the decedent must have been dead for more than 2 years. Additional legal requirements apply. The new $150,000 threshold gives some Florida families access to a simplified probate process.
        </>
      ),
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      num: "C",
      title: "Formal administration",
      description:
        "Formal administration provides a fuller court supervised probate process. The procedure often applies to estates with greater value, complex assets, multiple legal issues or circumstances requiring formal appointment and ongoing administration.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18 M5 21V10 M9 21V10 M15 21V10 M19 21V10 M2 10l10-7 10 7z" />
        </svg>
      ),
    },
    {
      num: "D",
      title: "Ancillary administration",
      description: (
        <>
          Ancillary administration applies to certain Florida property owned by a decedent living outside Florida. The Florida court handles the Florida assets while the main estate process takes place elsewhere.{" "}
          <Link
            href="/probate-administration/ancillary-probate"
            className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
          >
            Ancillary probate
          </Link>{" "}
          can involve coordination between courts, personal representatives, attorneys and beneficiaries in different locations.
        </>
      ),
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
        </svg>
      ),
    },
  ];

  const tableData = [
    {
      type: "Disposition Without Administration",
      threshold: "Under $6,000 (equivalent to final funeral & medical costs)",
      when: "Certain very small qualifying estates with no real property.",
      features: "Limited procedure",
    },
    {
      type: "Summary Administration",
      threshold: "$150,000 or less or Any value if deceased 2+ years",
      when: "Estate qualifies under Florida's statutory value or time requirements.",
      features: "Simplified administration",
    },
    {
      type: "Formal Administration",
      threshold: "Exceeds $150,000",
      when: "Larger or more involved estates. Or those with complex assets and debts.",
      features: "Personal representative and fuller court process",
    },
    {
      type: "Ancillary Administration",
      threshold: "Any value (based on local property value)",
      when: "A non Florida resident owns qualifying Florida real estate or tangible assets.",
      features: "Florida proceeding for Florida assets",
    },
  ];

  return (
    <section id="types" className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-[#091D46] text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight mb-4">
            Types of probate administration in florida
          </h2>
          <p className="text-[#586375] text-base sm:text-lg leading-relaxed">
            Florida offers several probate procedures and each procedure serves a different type of estate. Choosing the right process can affect the documents, court involvement, timing and work required.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {types.map((type) => (
            <div
              key={type.num}
              className="relative bg-white border border-gray-200 rounded-[20px] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ECAB3C] flex flex-col justify-between"
            >
              <div>
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-5">
                  {type.icon}
                </div>
                <span className="absolute right-6 top-6 font-serif text-3xl font-semibold text-[#ECAB3C]/40 select-none">
                  {type.num}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                  {type.title}
                </h3>
                <p className="text-[#586375] text-sm sm:text-[15px] leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#091D46] mt-14 mb-6">
          Which one fits your case?
        </h3>

        <div className="overflow-x-auto rounded-[18px] border border-gray-200 bg-white shadow-xs">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#091D46] text-[#ECAB3C]">
                <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider">Probate Type</th>
                <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider">Asset Value Threshold</th>
                <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider">When It May Apply</th>
                <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider">Main Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr
                  key={row.type}
                  className={`hover:bg-[#ECAB3C]/10 transition-colors ${
                    index % 2 === 1 ? "bg-[#ECAB3C]/[0.05]" : "bg-white"
                  }`}
                >
                  <td className="px-5 py-4 font-bold text-[#091D46] align-top">{row.type}</td>
                  <td className="px-5 py-4 text-[#2b3545] align-top">{row.threshold}</td>
                  <td className="px-5 py-4 text-[#586375] align-top">{row.when}</td>
                  <td className="px-5 py-4 text-[#2b3545] align-top font-medium">{row.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
