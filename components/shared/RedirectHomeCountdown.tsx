"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/** Counts down, then sends the visitor to the homepage. */
export default function RedirectHomeCountdown({ seconds = 5 }: { seconds?: number }) {
  const router = useRouter();
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    router.prefetch("/");
    const started = Date.now();
    const timer = setInterval(() => {
      const remaining = seconds - Math.floor((Date.now() - started) / 1000);
      if (remaining <= 0) {
        clearInterval(timer);
        router.replace("/");
      } else {
        setLeft(remaining);
      }
    }, 250);
    return () => clearInterval(timer);
  }, [router, seconds]);

  return (
    <p className="text-sm sm:text-base text-[#4a5568] font-sans" aria-live="polite">
      Taking you to the homepage in{" "}
      <span className="font-bold text-[#091D46]">{left}</span> second{left === 1 ? "" : "s"}…
    </p>
  );
}
