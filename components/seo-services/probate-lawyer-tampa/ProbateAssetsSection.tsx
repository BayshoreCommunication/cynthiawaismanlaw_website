import React from "react";
import Image from "next/image";

export function ProbateAssetsSection() {
  const assets = [
    {
      title: "Real Estate Owned in the Decedent’s Name",
      description:
        "A home, rental property, land or another real estate interest titled solely in the decedent's name may require probate. Homestead property needs special attention because Florida law gives certain family members specific protections. Joint ownership and tenancy by the entire ties can also affect the transfer.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6" />
        </svg>
      ),
    },
    {
      title: "Bank and Investment Accounts Without Beneficiary",
      description:
        "A bank or investment account owned solely by the decedent may become part of the probate estate. The financial institution may require probate documents before releasing the funds. A valid payable on death (POD) or transfer on death (TOD) arrangement can create a different transfer path.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18 M5 21V10 M9 21V10 M15 21V10 M19 21V10 M2 10l10-7 10 7z" />
        </svg>
      ),
    },
    {
      title: "Personal Property and Vehicles",
      description:
        "Vehicles, jewelry, furniture, collectibles, equipment and other personal property can become probate assets when the decedent owned them individually. The personal representative must identify the property, protect it and prepare it for an appropriate transfer or sale.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8l-9-5-9 5v8l9 5 9-5z M3.3 7L12 12l8.7-5 M12 22V12" />
        </svg>
      ),
    },
    {
      title: "Business Interests",
      description:
        "Ownership in an LLC, corporation, partnership or other business can create probate questions. The governing business documents may control transfer rights and restrictions. The personal representative may need to coordinate with business partners, managers, accountants or other professionals.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
    {
      title: "Life Insurance and Retirement Accounts With Beneficiary Designations",
      description:
        "Life insurance proceeds and retirement accounts often pass according to beneficiary designations. The estate may receive the funds when the estate is the named beneficiary or another legal issue affects the transfer. A probate lawyer tampa can review the account records and beneficiary designations before the family treats the proceeds as part of the probate estate.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Jointly Owned Property and Survivorship Rights",
      description:
        "Joint ownership can allow an asset to pass automatically to a surviving owner. The deed, account agreement, title and ownership form control the legal result. A probate attorney can review the ownership documents before the family assumes an asset belongs to the probate estate.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="assets" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-[#e4dccb]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center mb-11">
          <div className="max-w-[820px]">
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#0e2240] leading-[1.22] mb-3.5">
              What assets go through probate in Florida?
            </h2>
            <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
              Asset ownership often determines the probate path. A simple bank account can follow a different transfer process from a home held only in the decedent&apos;s name.
            </p>
          </div>

          <figure className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-[#091830] shadow-[8px_8px_0_#b8914a] sm:shadow-[12px_12px_0_#b8914a] m-0">
            <Image
              src="/images/seo-services/estate-planning.png"
              alt="Florida Probate Real Estate and Assets"
              fill
              sizes="(max-width: 860px) 100vw, 550px"
              className="object-cover"
            />
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div
              key={asset.title}
              className="bg-white border border-[#e4dccb] rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,34,64,0.12)] hover:border-[#b8914a]"
            >
              <span className="w-[52px] h-[52px] rounded-xl bg-[#0e2240] text-[#e0bd7c] flex items-center justify-center mb-4.5">
                {asset.icon}
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#0e2240] mb-2 leading-snug">
                {asset.title}
              </h3>
              <p className="m-0 text-[#586375] text-[0.95rem] leading-relaxed">
                {asset.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
