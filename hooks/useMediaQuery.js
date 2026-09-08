"use client";

import { useEffect, useState } from "react";

/**
 * Mobile-first media query hook.
 * Defaults to `false` (mobile) until mounted — avoids loading heavy desktop-only UI on small screens / SSR.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}
