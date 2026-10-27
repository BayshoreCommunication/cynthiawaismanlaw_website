"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubItem {
  label: string;
  href: string;
}

interface PracticeCategory {
  id: string;
  name: string;
  href?: string;
  subItems?: SubItem[];
}

const practiceCategories: PracticeCategory[] = [
  {
    id: "immigration",
    name: "Immigration Law",
    href: "/immigration-law-overview",
    subItems: [
      {
        label: "Citizenship Benefits & Requirements",
        href: "/immigration-law-overview/citizenship-benefits-requirements",
      },
      {
        label: "Conditional Resident Petitions",
        href: "/immigration-law-overview/conditional-resident-petitions",
      },
      {
        label: "Deferred Action",
        href: "/immigration-law-overview/deferred-action",
      },
      {
        label: "Naturalization For Non-English Speaking Residents",
        href: "/immigration-law-overview/naturalization-non-english-speaking-residents",
      },
      {
        label: "Requests For Evidence",
        href: "/immigration-law-overview/requests-for-evidence",
      },
      {
        label: "Responding To A Request For Evidence",
        href: "/immigration-law-overview/responding-request-for-evidence",
      },
      {
        label: "The ABCs of Naturalization & Immigration Law",
        href: "/immigration-law-overview/abcs-naturalization-immigration-law",
      },
      {
        label: "Travel & Re-Entry Permits",
        href: "/immigration-law-overview/travel-reentry-permits",
      },
      {
        label: "Waivers",
        href: "/immigration-law-overview/waivers",
      },
      {
        label: "U Visa (Crime Victims)",
        href: "/immigration-law-overview/u-visa",
      },
    ],
  },
  {
    id: "green-cards",
    name: "Green Cards & Visas",
    href: "/immigration-law-overview/green-cards",
    subItems: [
      {
        label: "Green Cards & Visas Overview",
        href: "/immigration-law-overview/green-cards",
      },
      {
        label: "Marriage-Based Green Cards",
        href: "/immigration-law-overview/marriage-based-green-cards",
      },
      {
        label: "Family-Based Visas",
        href: "/immigration-law-overview/family-based-visas",
      },
      {
        label: "Fiancé Visa (K-1)",
        href: "/immigration-law-overview/fiance-visa",
      },
      {
        label: "Consular Processing",
        href: "/immigration-law-overview/consular-processing",
      },
      {
        label: "Green Card Renewal",
        href: "/immigration-law-overview/green-card-renewal",
      },
      {
        label: "VAWA Green Cards",
        href: "/immigration-law-overview/vawa-green-cards",
      },
      {
        label: "E-2 Treaty Visas",
        href: "/immigration-law-overview/e2-treaty-visas",
      },
      {
        label: "Visa Waiver Program",
        href: "/immigration-law-overview/visa-waiver-program",
      },
    ],
  },
  {
    id: "estate-planning",
    name: "Estate Planning Services",
    href: "/estate-planning-services",
    subItems: [
      {
        label: "Estate Planning Overview",
        href: "/estate-planning-services",
      },
      {
        label: "Wills",
        href: "/estate-planning-services/wills",
      },
      {
        label: "Trusts",
        href: "/estate-planning-services/trusts",
      },
      {
        label: "Powers of Attorney",
        href: "/estate-planning-services/powers-of-attorney",
      },
      {
        label: "Living Wills",
        href: "/estate-planning-services/living-wills",
      },
      {
        label: "Funding & Your Revocable Trust",
        href: "/estate-planning-services/funding-administration-your-revocable-trust",
      },
      {
        label: "Business Succession Planning",
        href: "/estate-planning-services/succession-planning",
      },
      {
        label: "Review & Update of Existing Plans",
        href: "/estate-planning-services/estate-plan-review",
      },
      {
        label: "Estate Planning FAQ",
        href: "/estate-planning-services/estate-planning-faq",
      },
    ],
  },
  {
    id: "guardianship",
    name: "Guardianship Services",
    href: "/guardianship-services",
    subItems: [
      {
        label: "Guardianship Overview",
        href: "/guardianship-services",
      },
      {
        label: "Guardianship for Adults (Elderly)",
        href: "/guardianship-services/adult-guardianship",
      },
      {
        label: "Guardianship for Minors (Children)",
        href: "/guardianship-services/minor-guardianship",
      },
      {
        label: "Limited Guardianship",
        href: "/guardianship-services/limited-guardianship",
      },
      {
        label: "Plenary Guardianship",
        href: "/guardianship-services/plenary-guardianship",
      },
      {
        label: "Guardianship Advocacy",
        href: "/guardianship-services/guardianship-advocacy",
      },
      {
        label: "Guardianship Plan Reviews & Accountings",
        href: "/guardianship-services/guardianship-plan-reviews",
      },
    ],
  },
  {
    id: "probate",
    name: "Probate Administration",
    href: "/probate-administration",
    subItems: [
      {
        label: "Probate Administration Overview",
        href: "/probate-administration",
      },
      {
        label: "Summary Administration",
        href: "/probate-administration/summary-administration",
      },
      {
        label: "Ancillary Probate",
        href: "/probate-administration/ancillary-probate",
      },
      {
        label: "Will Contests",
        href: "/probate-administration/will-contests",
      },
      {
        label: "Will Validation",
        href: "/probate-administration/will-validation",
      },
      {
        label: "Trust Administration",
        href: "/probate-administration/trust-administration",
      },
      {
        label: "Estate Settlement",
        href: "/probate-administration/estate-settlement",
      },
      {
        label: "Transfer of Assets",
        href: "/probate-administration/transfer-of-assets",
      },
      {
        label: "Guidance for Personal Representatives",
        href: "/probate-administration/executor-guidance",
      },
    ],
  },
];

interface PracticeAreasSidebarProps {
  currentCategory?: string;
  currentSubItem?: string;
}

export default function PracticeAreasSidebar({
  currentCategory = "immigration",
  currentSubItem,
}: PracticeAreasSidebarProps) {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = { [currentCategory]: true };
      practiceCategories.forEach((cat) => {
        if (cat.subItems?.some((sub) => sub.href === pathname)) {
          initial[cat.id] = true;
        }
      });
      return initial;
    }
  );

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside className="w-full bg-[#091D46] text-white rounded-none p-6 sm:p-7 shadow-md" data-animate="fade-left" data-delay="150">
      <h3 className="text-[#ECAB3C] text-[15px] sm:text-base font-bold tracking-[0.12em] uppercase mb-5 font-sans border-b border-white/10 pb-3">
        PRACTICE AREAS
      </h3>

      <nav className="space-y-1 font-sans">
        {practiceCategories.map((category) => {
          const isOpen = !!openCategories[category.id];
          const hasSubItems = category.subItems && category.subItems.length > 0;
          const isCategoryActive =
            category.id === currentCategory ||
            pathname === category.href ||
            (category.subItems &&
              category.subItems.some((sub) => sub.href === pathname)) ||
            (category.id === "guardianship" &&
              (pathname === "/guardianship" ||
                pathname === "/guardianship-services"));

          return (
            <div
              key={category.id}
              className="border-b border-white/10 last:border-b-0"
            >
              <div
                className={`flex items-center justify-between py-3 cursor-pointer select-none transition-colors group ${
                  isCategoryActive
                    ? "text-white font-semibold"
                    : "text-gray-200 hover:text-white"
                }`}
                onClick={() => {
                  if (hasSubItems) {
                    toggleCategory(category.id);
                  }
                }}
              >
                {category.href && !hasSubItems ? (
                  <Link
                    href={category.href}
                    className="flex-1 text-[14.5px] sm:text-[15px] hover:text-[#ECAB3C] transition-colors"
                  >
                    {category.name}
                  </Link>
                ) : (
                  <span className="flex-1 text-[14.5px] sm:text-[15px] group-hover:text-[#ECAB3C] transition-colors">
                    {category.name}
                  </span>
                )}

                {hasSubItems && (
                  <button
                    type="button"
                    aria-label={`Toggle ${category.name}`}
                    className="w-6 h-6 flex items-center justify-center text-white/80 group-hover:text-[#ECAB3C] text-lg font-light transition-colors ml-2"
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                )}
              </div>

              {/* Sub-items accordion */}
              {hasSubItems && isOpen && (
                <ul className="pl-3 pb-3 pt-0.5 space-y-2 border-l border-white/15 ml-2.5 my-1">
                  {category.subItems!.map((item, idx) => {
                    const isItemActive =
                      item.label.toLowerCase() ===
                        (currentSubItem || "").toLowerCase() ||
                      pathname === item.href;

                    return (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className={`block text-[13px] sm:text-[13.5px] transition-colors leading-snug ${
                            isItemActive
                              ? "text-[#ECAB3C] font-semibold"
                              : "text-gray-300 hover:text-[#ECAB3C]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
