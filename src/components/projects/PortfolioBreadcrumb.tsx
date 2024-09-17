import React from "react";
import { Building2, Truck, Wifi, Droplet, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

type PortfolioBreadcrumbProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const categories = [
  { name: "All", icon: Briefcase, value: "all" },
  { name: "Construction", icon: Building2, value: "construction" },
  { name: "Transportation", icon: Truck, value: "transportation" },
  { name: "Telecoms", icon: Wifi, value: "telecoms" },
  { name: "Gauni Water", icon: Droplet, value: "gauni water" },
];

const PortfolioBreadcrumb: React.FC<PortfolioBreadcrumbProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <nav className="mb-8 overflow-x-auto" aria-label="Portfolio categories">
      <ul className="flex gap-4 whitespace-nowrap p-3">
        {categories.map((category) => (
          <li key={category.name}>
            <motion.button
              tabIndex={0}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-primary-base text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PortfolioBreadcrumb;
