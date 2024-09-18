import React from "react";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  role?: React.AriaRole;
  ariaLabel?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  role = "region",
  ariaLabel,
}) => {
  // Use our custom hook to get the ref and animation controls
  const { ref, controls } = useAnimateOnView();

  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: invisible and 50px down
    visible: { opacity: 1, y: 0 }, // Final state: fully visible and in position
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
