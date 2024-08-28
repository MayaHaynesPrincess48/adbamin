import { ArrowUp } from "iconsax-react";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight / 2.5) {
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
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 rounded-full bg-primary-base p-3 text-white shadow-lg transition-all duration-300 hover:bg-primary-60 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowUp size="20" color="#fff" />
    </button>
  );
};

export default ScrollToTopButton;
