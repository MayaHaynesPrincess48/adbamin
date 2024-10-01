import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
    const handleScroll = () => {
      // Debounce the scroll event
      setTimeout(() => {
        toggleVisibility();
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
