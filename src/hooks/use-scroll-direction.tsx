import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollThreshold] = useState(5); // Minimum pixels to trigger hide/show

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only apply on mobile (screen width <= 1024px)
          if (window.innerWidth > 1024) {
            setIsVisible(true);
            ticking = false;
            return;
          }

          // Always show header when at top of page
          if (currentScrollY < 10) {
            setIsVisible(true);
          } 
          // Check scroll direction with threshold
          else {
            const scrollDifference = currentScrollY - lastScrollY;
            
            // Scrolling down - hide header
            if (scrollDifference > scrollThreshold) {
              setIsVisible(false);
            } 
            // Scrolling up - show header immediately
            else if (scrollDifference < -scrollThreshold) {
              setIsVisible(true);
            }
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollThreshold]);

  return isVisible;
};
