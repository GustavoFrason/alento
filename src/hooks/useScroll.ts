"use client";

import { useState, useEffect } from "react";

/**
 * Hook to track scroll position.
 * @param threshold Scroll threshold in pixels to trigger state change (default: 10).
 * @returns boolean true if scrolled past threshold.
 */
export function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
