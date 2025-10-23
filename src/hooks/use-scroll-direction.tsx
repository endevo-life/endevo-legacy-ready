import { useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;

        // Only apply on mobile (<= 1024px)
        if (window.innerWidth > 1024) {
          setIsVisible(true);
          lastScrollYRef.current = currentY;
          ticking = false;
          return;
        }

        // Always show at top
        if (currentY <= 0) {
          setIsVisible(true);
        } else if (currentY > lastScrollYRef.current) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentY < lastScrollYRef.current) {
          // Any upward movement
          setIsVisible(true);
        }

        lastScrollYRef.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isVisible;
};

