import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, X } from "lucide-react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
  isVisible: boolean;
  duration: number; // in milliseconds
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  onClose,
  isVisible,
  duration,
}) => {
  const variants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={`fixed left-4 right-4 top-4 z-50 mx-auto w-auto max-w-md overflow-hidden rounded-lg shadow-lg xs:left-auto xs:right-4 xs:w-full ${
            type === "error" ? "bg-secondary-base" : "bg-green-500"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              {type === "error" ? (
                <AlertCircle className="mr-3 h-6 w-6 text-white" />
              ) : (
                <CheckCircle className="mr-3 h-6 w-6 text-white" />
              )}
              <span className="text-sm font-medium text-white">{message}</span>
            </div>
            <button
              onClick={onClose}
              className="ml-4 rounded-full p-1 text-white transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close notification"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className="h-1 w-full origin-left bg-white/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
