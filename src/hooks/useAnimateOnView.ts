import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimateOnView = (threshold = 0.1) => {
  // Initialize animation controls
  const controls = useAnimation();

  // Set up the intersection observer
  // 'threshold' determines how much of the element should be in view before triggering
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    // When the element comes into view
    if (inView) {
      // Start the 'visible' animation
      controls.start("visible");
    }
  }, [controls, inView]); // Re-run effect if controls or inView changes

  // Return the ref to attach to the DOM element, and the animation controls
  return { ref, controls, inView };
};
