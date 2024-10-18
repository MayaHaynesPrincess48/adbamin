/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlButton = () => {
    const currentScrollY = window.scrollY;
    const threshold = window.innerHeight * 0.5; // Lowered threshold

    if (currentScrollY > threshold) {
      if (
        currentScrollY < lastScrollY ||
        currentScrollY + window.innerHeight >=
          document.documentElement.scrollHeight
      ) {
        // Scrolling up or reached bottom of page
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
    } else {
      // Below the threshold
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust 500 to control speed
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlButton);
    return () => {
      window.removeEventListener("scroll", controlButton);
    };
  }, [lastScrollY]);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-4 z-50 rounded-full bg-primary-base p-2 text-white shadow-lg transition-all duration-300 hover:bg-primary-60 focus:outline-none focus:ring-2 focus:ring-primary-60 focus:ring-offset-2 sm:p-3 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
      aria-label="Scroll to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp size="20" color="#fff" aria-hidden="true" />
      <span className="sr-only">Scroll to top of page</span>
    </button>
  );
};

export default ScrollToTopButton;
