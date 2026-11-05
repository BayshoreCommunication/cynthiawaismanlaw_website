import React from "react";

const situations = [
  {
    num: "01",
    title: "You want your first will",
    description:
      "A Last Will lets Tampa families name beneficiaries, specific gifts and a personal representative. It can also nominate a guardian for minor children. Florida probate law then governs assets passing through probate. A Tampa probate lawyer can prepare the document and complete the required signing formalities.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 13h6 M9 17h6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "You want a revocable living trust",
    description:
      "A revocable living trust can hold title during your lifetime. You can usually serve as trustee and retain the power to amend or revoke the trust. A successor trustee can take over under the trust terms during incapacity or after death. Proper funding gives the trust practical value for the assets placed into it.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "You already have documents",
    description:
      "Marriage, divorce, a new child or a dead beneficiary changes the map. A new house on Davis Islands does too. So does a move from New Jersey to Hillsborough County. Bring the old binder. We mark what still works and what Florida law has outgrown.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "You own a Tampa home",
    description:
      "Title, homestead and the next deed have to agree. Trust ownership and a trust deed and a Lady Bird deed are two different tools. We pull the Hillsborough folio before we pick one. A wrong deed can cost Save Our Homes or a spouse's constitutional share.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "You have children or dependents",
    description:
      "Guardians live in the will. Money for minors lives in a children's trust. A child on SSI or Medicaid needs a special needs trust, written to those rules. We match the instrument to the child, then name a trustee the child will call.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "You own a business or larger assets",
    description:
      "LLC units, stock and buy/sell clauses have to follow the estate plan. A trust can hold the interest if the operating agreement allows it. We work with your business lawyer on the ledger, the minutes and the successor manager.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "You have a blended family",
    description:
      "A spouse and children from a prior marriage want different outcomes. Florida's 30% elective share can rewrite a \"simple\" will after the funeral. Stepchildren take nothing under their intestacy unless you name them. Write names, shares and backups.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "You just moved to Tampa",
    description:
      "Illinois may receive recognition in Florida under Fla. Stat. §732.502(2). A Florida estate plan review can still align your will, homestead, powers of attorney, beneficiary forms and other documents with your current Florida residence.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

export function WhenFamiliesNeedSection() {
  return (
    <section
      id="when-families-need"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-[#091D46] text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight mb-4">
            When Tampa Families Need a Will &amp; Trust Lawyer
          </h2>
          <p className="text-[#586375] text-base sm:text-lg leading-relaxed">
            Tampa families usually need a will &amp; trust lawyer when they want a
            first will, a funded living trust, a plan for a Hillsborough
            homestead, minor children, a blended family, a business interest or a
            move into Florida. Eight situations send Tampa families to our office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((item) => (
            <div
              key={item.num}
              className="relative bg-white border border-gray-200 rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ECAB3C] flex flex-col justify-between"
            >
              <div>
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <span className="absolute right-6 top-6 font-serif text-3xl font-semibold text-[#ECAB3C]/40 select-none">
                  {item.num}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#586375] text-sm sm:text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

