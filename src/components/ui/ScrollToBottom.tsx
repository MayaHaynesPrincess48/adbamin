import { useState, useEffect } from "react";
import { ArrowDown2 } from "iconsax-react";
import { motion } from "framer-motion";

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
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      type="button"
      onClick={scrollToNextViewport}
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform rounded-full p-3 text-white transition-all duration-300 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Scroll to next section"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowDown2
        size="40"
        color="#D02A10"
        className="animate-bounce"
        aria-hidden="true"
      />
      <span className="sr-only">Scroll to next section</span>
    </motion.button>
  );
};

export default ScrollToBottomButton;
