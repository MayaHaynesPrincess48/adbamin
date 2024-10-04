import { useState, useEffect } from "react";
import { ArrowCircleDown } from "iconsax-react";

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Hide the button when we're close to the bottom of the page
    if (scrollPosition + windowHeight > documentHeight - windowHeight / 2.5) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const scrollToNextViewport = () => {
    const targetScroll = window.scrollY + window.innerHeight;
    const scrollStep = (targetScroll - window.scrollY) / (500 / 15); // Adjust 500 to control speed

    const scrollInterval = setInterval(() => {
      if (window.scrollY < targetScroll) {
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

    // Check visibility on mount
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToNextViewport}
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform rounded-full p-3 text-white transition-all duration-300 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Scroll to next section"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowCircleDown
        size="40"
        color="#D02A10"
        className="animate-bounce"
        aria-hidden="true"
      />
      <span className="sr-only">Scroll to next section</span>
    </button>
  );
};

export default ScrollToBottomButton;
