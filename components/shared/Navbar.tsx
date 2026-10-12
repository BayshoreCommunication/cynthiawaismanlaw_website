"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubNavItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubNavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Attorney", href: "/about/our-attorney" },
      { label: "Our Team", href: "/about/our-team" },
    ],
  },
  {
    label: "Immigration & Naturalization",
    href: "/immigration-law-overview",
  },
  {
    label: "Estate Planning",
    href: "/estate-planning",
    children: [
      { label: "Estate Planning FAQ", href: "/estate-planning/faq" },
      {
        label: "Funding & Your Revocable Trust",
        href: "/estate-planning/funding-revocable-trust",
      },
      { label: "Living Wills", href: "/estate-planning/living-wills" },
      { label: "Powers of Attorney", href: "/estate-planning/powers-of-attorney" },
      { label: "Trusts", href: "/estate-planning/trusts" },
      { label: "Wills", href: "/estate-planning/wills" },
    ],
  },
  {
    label: "Guardianship Services",
    href: "/guardianship-services",
  },
  {
    label: "Probate Administration",
    href: "/probate-administration",
    children: [
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
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (item: NavItem) => {
    if (item.href === "/" && pathname === "/") return true;
    if (item.href !== "/" && pathname.startsWith(item.href)) return true;
    if (item.children?.some((child) => pathname.startsWith(child.href))) return true;
    return false;
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-xs">
      {/* Top Header Section */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="w-full max-w-[1320px] mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="inline-block transition-opacity hover:opacity-95">
            <Image
              src="/images/logo.png"
              alt="Cynthia I. Waisman, P.A. Attorney At Law"
              width={335}
              height={67}
              priority
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Right: Phone & Mobile Hamburger */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+18132796180"
              className="text-lg sm:text-2xl md:text-[26px] font-medium tracking-tight text-[#162a55] hover:text-[#ECAB3C] transition-colors whitespace-nowrap"
            >
              +1 (813) 279-6180
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#162a55] hover:text-[#ECAB3C] hover:bg-gray-100 focus:outline-hidden transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <nav className="w-full bg-[#f1f1f1] border-b border-[#e5e5e5] hidden lg:block">
        <div className="w-full max-w-[1320px] mx-auto px-4">
          <ul className="flex items-center flex-wrap gap-x-6 xl:gap-x-7 py-2.5">
            {navItems.map((item) => {
              const active = isActive(item);
              const hasChildren = Boolean(item.children && item.children.length > 0);

              return (
                <li key={item.label} className="relative group">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`text-[14px] xl:text-[15px] font-semibold py-1.5 transition-colors inline-flex items-center gap-1 ${
                        active
                          ? "text-[#ECAB3C]"
                          : "text-[#162a55] hover:text-[#ECAB3C]"
                      }`}
                    >
                      {item.label}
                      {hasChildren && (
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>
                  </div>

                  {/* Dropdown Menu */}
                  {hasChildren && (
                    <div className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                      <div className="bg-white border border-gray-200 shadow-lg rounded-sm py-2 min-w-[240px]">
                        {item.children?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`block px-4 py-2 text-[13.5px] transition-colors ${
                              pathname === subItem.href
                                ? "text-[#ECAB3C] bg-gray-50 font-medium"
                                : "text-[#162a55] hover:text-[#ECAB3C] hover:bg-gray-50"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#f8f9fa] border-b border-gray-200 shadow-md">
          <div className="w-full max-w-[1320px] mx-auto px-4 py-3">
            <ul className="flex flex-col divide-y divide-gray-200/70">
              {navItems.map((item) => {
                const active = isActive(item);
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = openSubmenus[item.label] ?? false;

                return (
                  <li key={item.label} className="py-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => !hasChildren && setMobileMenuOpen(false)}
                        className={`text-[15px] font-semibold transition-colors py-1 ${
                          active
                            ? "text-[#ECAB3C]"
                            : "text-[#162a55] hover:text-[#ECAB3C]"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => toggleSubmenu(item.label)}
                          className="p-1.5 text-[#162a55] hover:text-[#ECAB3C] focus:outline-hidden"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu Accordion */}
                    {hasChildren && isExpanded && (
                      <ul className="mt-1 pl-4 flex flex-col space-y-1.5 border-l-2 border-[#ECAB3C]/40 ml-2">
                        {item.children?.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block text-[14px] py-1 transition-colors ${
                                pathname === subItem.href
                                  ? "text-[#ECAB3C] font-medium"
                                  : "text-[#162a55] hover:text-[#ECAB3C]"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

