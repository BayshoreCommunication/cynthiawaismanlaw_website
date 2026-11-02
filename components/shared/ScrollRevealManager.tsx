"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollRevealManager
 *
 * Observes elements with reveal classes (.reveal-left, .reveal-right, .reveal-up,
 * .reveal-image-left, .reveal-image-right) and triggers their smooth reveal
 * when they enter the viewport.
 *
 * 100% hydration-safe: only attaches after client-side hydration.
 */
export default function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    // If reduced motion is requested, reveal all elements immediately
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up, .reveal-image-left, .reveal-image-right").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    // Activate reveal styles
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08,
      }
    );

    const observeTargets = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        ".reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-up:not(.is-revealed), .reveal-image-left:not(.is-revealed), .reveal-image-right:not(.is-revealed)"
      );

      const windowHeight = window.innerHeight;
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport upon load (e.g. Hero Section)
        if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
          setTimeout(() => {
            el.classList.add("is-revealed");
          }, 120);
        } else {
          observer.observe(el);
        }
      });
    };

    const rafId = requestAnimationFrame(() => {
      observeTargets();
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
