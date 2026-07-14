"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, so the navbar can highlight the matching link as the visitor
 * scrolls — a small but noticeably "premium" navigation touch.
 */
export function useScrollSpy(ids: string[], offset = 140) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const onScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current: string | null = null;

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveId(current ?? sections[0].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
