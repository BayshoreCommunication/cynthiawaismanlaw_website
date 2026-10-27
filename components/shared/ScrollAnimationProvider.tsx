"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // If browser doesn't support IntersectionObserver or user prefers reduced motion
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.getAttribute("data-delay");
            if (delay) {
              setTimeout(() => {
                target.classList.add("is-revealed");
              }, parseInt(delay, 10));
            } else {
              target.classList.add("is-revealed");
            }
            obs.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    // Automatically attach luxury entrance animations to main article containers that don't have them yet
    document.querySelectorAll("main article:not([data-animate])").forEach((el) => {
      el.setAttribute("data-animate", "fade-up");
    });

    const elements = document.querySelectorAll("[data-animate]:not(.is-revealed)");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <style>{`
        /* Global Luxury Animation System */
        [data-animate] {
          will-change: transform, opacity;
        }

        /* Fade Up */
        [data-animate="fade-up"] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-animate="fade-up"].is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Fade Down */
        [data-animate="fade-down"] {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-animate="fade-down"].is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Fade Left (slides in from left) */
        [data-animate="fade-left"] {
          opacity: 0;
          transform: translateX(-36px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-animate="fade-left"].is-revealed {
          opacity: 1;
          transform: translateX(0);
        }

        /* Fade Right (slides in from right) */
        [data-animate="fade-right"] {
          opacity: 0;
          transform: translateX(36px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-animate="fade-right"].is-revealed {
          opacity: 1;
          transform: translateX(0);
        }

        /* Zoom In */
        [data-animate="zoom-in"] {
          opacity: 0;
          transform: scale(0.94);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-animate="zoom-in"].is-revealed {
          opacity: 1;
          transform: scale(1);
        }

        /* Gold Line Expand */
        [data-animate="line-expand"] {
          width: 0 !important;
          opacity: 0;
          transition: width 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.75s ease;
        }
        [data-animate="line-expand"].is-revealed {
          width: var(--line-width, 2.5rem) !important;
          opacity: 1;
        }

        /* Masked Title Slide Up */
        .anim-mask {
          overflow: hidden;
          display: block;
        }
        .anim-mask > * {
          display: block;
          transform: translateY(115%);
          opacity: 0;
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .is-revealed .anim-mask > *,
        .anim-mask.is-revealed > * {
          transform: translateY(0);
          opacity: 1;
        }

        /* Stagger Delays */
        [data-delay="100"] { transition-delay: 0.1s !important; }
        [data-delay="150"] { transition-delay: 0.15s !important; }
        [data-delay="200"] { transition-delay: 0.2s !important; }
        [data-delay="250"] { transition-delay: 0.25s !important; }
        [data-delay="300"] { transition-delay: 0.3s !important; }
        [data-delay="350"] { transition-delay: 0.35s !important; }
        [data-delay="400"] { transition-delay: 0.4s !important; }
        [data-delay="500"] { transition-delay: 0.5s !important; }
        [data-delay="600"] { transition-delay: 0.6s !important; }
        [data-delay="700"] { transition-delay: 0.7s !important; }

        /* Reduced Motion Fallback */
        @media (prefers-reduced-motion: reduce) {
          [data-animate],
          .anim-mask > * {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
            width: auto !important;
          }
        }
      `}</style>
      {children}
    </>
  );
}
