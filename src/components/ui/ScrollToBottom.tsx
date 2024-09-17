import { useState, useEffect } from "react";
import { ArrowDown2 } from "iconsax-react";

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      window.scrollY <
      document.documentElement.scrollHeight -
        window.innerHeight -
        window.innerHeight / 2.5
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToNextViewport = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToNextViewport}
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform rounded-full p-3 text-white transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowDown2 size="40" color="#D02A10" className="animate-bounce" />
    </button>
  );
};

export default ScrollToBottomButton;
