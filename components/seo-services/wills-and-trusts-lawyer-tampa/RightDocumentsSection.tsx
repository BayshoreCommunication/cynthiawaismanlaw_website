import React from "react";
import Link from "next/link";

interface DocumentItem {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const documents: DocumentItem[] = [
  {
    title: "Will can direct your probate estate",
    description: (
      <>
        Last Will and Testament sets out your wishes for assets passing through probate. It can name beneficiaries, nominate a guardian for minor children and name a{" "}
        <Link
          href="/probate-administration/executor-guidance"
          className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
        >
          personal representative
        </Link>{" "}
        for your estate. A will can also include a pour over provision for a revocable living trust. Florida law sets specific requirements for signing and witnessing a will. The testator signs the will and at least two attesting witnesses sign in the presence of the testator and each other. A self proving affidavit can also support the probate process. Florida Statutes §732.503 provides the procedure for making a will self proved.
      </>
    ),
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 13h6 M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Trust can manage assets in life and death",
    description:
      "A revocable living trust can hold property during your lifetime and continue after your death. You can generally serve as trustee during life. You can also name a successor trustee for future management. A named successor trustee can take over based on the trust terms during incapacity or after death. Trust ownership also can support probate planning for properly funded assets. The practical benefit depends on ownership and funding.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Power of attorney allows financial management",
    description:
      "A durable power of attorney addresses financial and legal decisions during your lifetime. You can name an agent to handle selected financial matters based on the authority granted in the document. Your agent can have authority over matters such as banking, property, business interests, contracts and other financial affairs, depending on the document. This document can also form part of a broader estate planning services in Tampa that address your financial, medical and family needs.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Health care documents guide medical decisions",
    description: (
      <>
        A Tampa estate plan can include a health care surrogate designation and{" "}
        <Link
          href="/estate-planning-services/living-wills"
          className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
        >
          living will
        </Link>
        . A health care surrogate designation names a person for health care decision making under the terms of the document. A living will record your instructions for certain end of life medical decisions. A HIPAA authorization can also help a designated person receive protected health information as allowed by the authorization. These documents address lifetime health care decisions. Your will and trust address separate estate planning needs.
      </>
    ),
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Beneficiary designations control certain assets",
    description:
      "Some assets transfer through beneficiary designations rather than through your will. For example life insurance, retirement accounts, payable on death accounts, transfer on death accounts and certain financial products. A beneficiary form can therefore affect the final distribution of an estate. Your beneficiary designations should match your broader estate plan. Marriage, divorce, the birth of a child, the death of a beneficiary or a major change in your family can create a reason to review these forms.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function RightDocumentsSection() {
  return (
    <section
      id="documents"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[840px] mb-8 sm:mb-11">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Tampa Estate Plan Starts With the Right Documents
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed m-0">
            A Tampa estate plan can use a will, a revocable living trust, a Lady
            Bird deed, powers of attorney, health care documents and beneficiary
            forms. The right mix depends on your family, your assets, your
            Florida homestead and how much management your family may need later.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {documents.map((item) => (
            <div
              key={item.title}
              className="bg-[#fdf8f0] border border-[#ECAB3C]/25 rounded-[20px] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.1)] hover:border-[#ECAB3C] flex flex-col justify-between"
            >
              <div>
                <span className="w-[52px] h-[52px] rounded-xl bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-4.5">
                  {item.icon}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="m-0 text-[#586375] text-[0.95rem] leading-relaxed">
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

