import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
  className?: string;
}

export function BreadcrumbNav({
  items,
  variant = "light",
  className = "",
}: BreadcrumbNavProps) {
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb" className={`inline-flex items-center ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 && (
                <li
                  aria-hidden="true"
                  className={`select-none mx-0.5 text-xs sm:text-[13px] font-normal ${
                    isLight ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  &gt;
                </li>
              )}
              <li>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isLight
                        ? "text-white/80 hover:text-[#ECAB3C]"
                        : "text-[#4a5568] hover:text-[#091D46]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={`font-medium ${
                      isLight ? "text-white" : "text-[#091D46]"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  bgImage?: string;
  variant?: "light" | "dark";
  className?: string;
}

export default function Breadcrumb({
  items,
  badge,
  title,
  subtitle,
  description,
  bgImage = "/images/breadcrumb-bg-image.png",
  variant = "light",
  className = "",
}: BreadcrumbProps) {
  // If only breadcrumb navigation items are provided without banner headings, render standalone nav
  if (!badge && !title && !subtitle && !description) {
    return <BreadcrumbNav items={items} variant={variant} className={className} />;
  }

  // Full Page Hero Banner matching the design demo
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#091D46] text-white ${className}`}
    >
      {/* Background Image: Classical Courthouse Columns with Sunlit Warmth */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right lg:bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />

      {/* Subtle Mobile Overlay for guaranteed contrast on narrow screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061533]/90 via-[#091D46]/70 to-transparent sm:hidden pointer-events-none" />

      {/* 1320px Global Container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 lg:py-24">
        {/* Breadcrumb Navigation at Top */}
        <div className="mb-5 sm:mb-6">
          <BreadcrumbNav items={items} variant="light" />
        </div>

        {/* Pre-heading Badge with Gold Accent Bar */}
        {badge && (
          <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 sm:w-10 h-[2px] bg-[#ECAB3C]" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ECAB3C] uppercase font-sans">
              {badge}
            </span>
          </div>
        )}

        {/* Main Headline */}
        {title && (
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.15] max-w-3xl">
            {title}
          </h1>
        )}

        {/* Subtitle (e.g. Attorney at Law) */}
        {subtitle && (
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white/95 font-normal tracking-wide mt-2 max-w-2xl">
            {subtitle}
          </p>
        )}

        {/* Description Paragraph */}
        {description && (
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl font-sans pt-2">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
