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
        href: "/citizenship-benefits-requirements",
      },
      {
        label: "Conditional Resident Petitions",
        href: "/conditional-resident-petitions",
      },
      {
        label: "Deferred Action",
        href: "/deferred-action",
      },
      {
        label: "Naturalization For Non-English Speaking Residents",
        href: "/naturalization-non-english-speaking-residents",
      },
      {
        label: "Requests For Evidence",
        href: "/requests-for-evidence",
      },
      {
        label: "Responding To A Request For Evidence",
        href: "/responding-to-request-for-evidence",
      },
      {
        label: "The ABCs of Naturalization & Immigration Law",
        href: "/abcs-naturalization-immigration-law",
      },
      {
        label: "Travel & Re-Entry Permits",
        href: "/travel-re-entry-permits",
      },
      {
        label: "Waivers",
        href: "/immigration-waivers",
      },
    ],
  },
  {
    id: "green-cards",
    name: "Green Cards & Visas",
    href: "/green-cards-visas",
    subItems: [
      {
        label: "Marriage & Family-Based Green Cards",
        href: "/green-cards-visas#family",
      },
      {
        label: "Adjustment of Status (I-485)",
        href: "/green-cards-visas#adjustment",
      },
      {
        label: "Consular Processing",
        href: "/green-cards-visas#consular",
      },
      {
        label: "Removal of Conditions (I-751)",
        href: "/green-cards-visas#conditions",
      },
      {
        label: "K-1 / Fiancé Visas",
        href: "/green-cards-visas#k1",
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
        label: "Estate Planning FAQ",
        href: "/estate-planning-services/estate-planning-faq",
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
        label: "Ancillary Probate",
        href: "/probate-administration/ancillary-probate",
      },
      {
        label: "Summary Administration",
        href: "/probate-administration/summary-administration",
      },
      {
        label: "Will Contests",
        href: "/probate-administration/will-contests",
      },
    ],
  },
  {
    id: "guardianship",
    name: "Guardianship Services",
    href: "/guardianship-services",
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
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    [currentCategory]: true,
  });

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside className="w-full bg-[#091D46] text-white rounded-none p-6 sm:p-7 shadow-md">
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
            (category.id === "guardianship" &&
              (pathname === "/guardianship" || pathname === "/guardianship-services"));

          return (
            <div key={category.id} className="border-b border-white/10 last:border-b-0">
              <div
                className={`flex items-center justify-between py-3 cursor-pointer select-none transition-colors group ${
                  isCategoryActive ? "text-white font-semibold" : "text-gray-200 hover:text-white"
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
                      item.label === currentSubItem || pathname === item.href;
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

