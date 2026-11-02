"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

export interface TypingTitleProps {
  /**
   * The text to type out. Can be a string (supports \n for line breaks) or an array of strings (each item is a line).
   */
  text?: string | string[];
  /**
   * If children is passed as plain string or string elements, it will be used if text prop is omitted.
   */
  children?: React.ReactNode;
  /**
   * HTML tag to render (h1, h2, h3, etc.). Defaults to h2.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * Typing speed in milliseconds per character. Default: 30ms.
   */
  speed?: number;
  /**
   * Initial delay in milliseconds before typing begins. Default: 120ms.
   */
  delay?: number;
  /**
   * Whether to trigger only once when entering viewport. Default: true.
   */
  once?: boolean;
}

/**
 * TypingTitle
 *
 * Smooth typewriter effect for titles WITHOUT any cursor.
 * - Hydration-safe: matches SSR and client DOM perfectly.
 * - Smooth character-by-character appearance.
 * - Viewport-triggered: types when scrolled into view.
 * - Multi-line support: cleanly handles lines and line-breaks.
 * - Full SEO and screen-reader accessibility.
 */
export default function TypingTitle({
  text,
  children,
  as = "h2",
  className = "",
  speed = 28,
  delay = 120,
  once = true,
}: TypingTitleProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Normalize text into lines
  const lines: string[] = useMemo(() => {
    if (Array.isArray(text)) {
      return text;
    }
    if (typeof text === "string") {
      return text.split("\n");
    }
    if (typeof children === "string") {
      return children.split("\n");
    }
    return [];
  }, [text, children]);

  const fullText = useMemo(() => lines.join(" "), [lines]);

  // Total character count across all lines
  const totalChars = useMemo(() => {
    return lines.reduce((acc, line) => acc + line.length, 0);
  }, [lines]);

  useEffect(() => {
    setIsClient(true);

    // If reduced motion is requested, show full text immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCount(totalChars);
      setHasStarted(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    // Trigger typing when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHasStarted(true);
          }, delay);
          if (once) {
            observer.unobserve(node);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [delay, once, totalChars]);

  // Typing timer loop
  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount >= totalChars) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 1, totalChars));
    }, speed);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleCount, totalChars, speed]);

  const Tag = as;

  // Track global index across lines
  let globalCharIndex = 0;

  return (
    <Tag
      ref={containerRef as any}
      className={`typing-title-container ${className}`}
      aria-label={fullText}
    >
      {lines.map((line, lineIndex) => {
        const lineChars = Array.from(line);

        return (
          <React.Fragment key={lineIndex}>
            <span className="inline-block whitespace-normal">
              {lineChars.map((char, charIndex) => {
                const currentIndex = globalCharIndex++;
                const isVisible = isClient ? currentIndex < visibleCount : false;

                return (
                  <span
                    key={charIndex}
                    aria-hidden="true"
                    className={`inline-block transition-opacity duration-150 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })}
            </span>
            {lineIndex < lines.length - 1 && <br aria-hidden="true" />}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
