import { ArrowUp } from "iconsax-react";
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      className={`fixed bottom-8 right-4 z-50 rounded-full bg-primary-base p-2 text-white shadow-lg transition-all duration-300 hover:bg-primary-60 sm:p-3 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size="20" color="#fff" />
    </button>
  );
};

export default ScrollToTopButton;
