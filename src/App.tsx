import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Router from "./Router";
import Preloader from "./components/common/Preloader";

function App(): JSX.Element {
  // State to control whether the preloader is shown
  const [loading, setLoading] = useState(true);

  // Effect to simulate an initial loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loading time
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        // Show the Preloader while loading
        <Preloader key="preloader" />
      ) : (
        // Show the main app content after loading
        <motion.div
          key="router"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Router />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
