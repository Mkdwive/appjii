import { useEffect, useState } from "react";

export function useScrollSpy(selectors: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || selectors.length === 0) return;

    // Track state records for all nodes currently present inside the viewport bounds
    const visibleSections = new Map<string, boolean>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          visibleSections.set(id, true);
        } else {
          visibleSections.delete(id);
        }
      });

      // Get the first active section from our currently visible elements
      const currentActive = Array.from(visibleSections.keys())[0];
      
      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null, 
      // Shrunk top/bottom hitboxes so it triggers cleanly right when items hit center viewports
      rootMargin: "-25% 0px -45% 0px", 
      threshold: [0, 0.1, 0.2], // Multiple thresholds guarantee updates on short sections
    });

    // Observe each section element found in the DOM
    selectors.forEach((selector) => {
      // Strips '#' symbol from string parameters if present
      const id = selector.startsWith("#") ? selector.slice(1) : selector;
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [selectors]); // Forces the observer matrix to rebind if layout lists adjust

  return activeId;
}
