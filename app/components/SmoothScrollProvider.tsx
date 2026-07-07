"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Speed of scroll (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // 2. Initialize AOS inside the same frame
    AOS.init({
      duration: 800,
      once: true,
    });

    // 3. Sync Lenis scrolling events with AOS positions
    lenis.on("scroll", () => {
      AOS.refresh(); 
    });

    // 4. Hook Lenis into the browser's requestAnimationFrame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 5. Clean up when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
