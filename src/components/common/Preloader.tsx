import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Truck,
  Radio,
  BrainCircuit,
  Sun,
  Droplets,
} from "lucide-react";
import logo from "../../assets/svg/Logo.svg";

// Define services with their respective icons, colors, and names
const services = [
  { icon: Building2, color: "text-yellow-500", name: "Construction" },
  { icon: Truck, color: "text-green-500", name: "Transport" },
  { icon: Radio, color: "text-blue-500", name: "Telecoms" },
  { icon: BrainCircuit, color: "text-purple-500", name: "Consults" },
  { icon: Sun, color: "text-orange-500", name: "Solar Generation" },
  { icon: Droplets, color: "text-cyan-500", name: "Gauni Water" },
];

const Preloader: React.FC = () => {
  // State to track loading progress
  const [progress, setProgress] = useState(0);

  // Effect to simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1,
      );
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary-100 to-primary-80 p-4"
    >
      {/* Logo with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex h-48 w-48 items-center justify-center"
      >
        <img
          src={logo}
          alt="Abdamin International Limited"
          className="w-full"
        />
      </motion.div>

      {/* Grid of service icons */}
      <motion.div
        className="grid grid-cols-3 gap-4 sm:grid-cols-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center"
          >
            <service.icon className={`h-8 w-8 ${service.color}`} />
            <p className="mt-1 text-center text-xs text-white sm:text-sm">
              {service.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-8 h-1 w-4/5 max-w-md bg-primary-base"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-4 text-center text-lg font-semibold text-white"
      >
        Innovating Across Industries
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
