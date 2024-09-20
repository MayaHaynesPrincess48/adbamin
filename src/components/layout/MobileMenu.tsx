import logo from "../../assets/images/Logo.webp";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Building2,
  Truck,
  Radio,
  BrainCircuit,
  Sun,
  Droplets,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useClickOutside from "@/hooks/useClickOutside";
import { Building4, Call, Sms } from "iconsax-react";
import { FiChevronDown } from "react-icons/fi";
import { CloseIcon } from "../ui/SvgIcons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  navItems,
  navInfo,
  socialLinks,
  copyRight,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  navItems: { name: string; link: string }[];
  navInfo: { email: string; phone: string; address: string };
  socialLinks: {
    icon: IconProp;
    label: string;
    url: string;
  }[];
  copyRight: string;
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const servicesRef = useRef(null);

  useClickOutside(menuRef, () => setIsMenuOpen(false));
  useClickOutside(servicesRef, () => setIsServicesOpen(false));

  const serviceItems = [
    { name: "Construction", icon: Building2, link: "/services/construction" },
    { name: "Transportation", icon: Truck, link: "/services/transportation" },
    { name: "Telecoms", icon: Radio, link: "/services/telecoms" },
    { name: "Consults", icon: BrainCircuit, link: "/services/consults" },
    { name: "Solar Generation", icon: Sun, link: "/services/solar-generation" },
    { name: "Gauni Water", icon: Droplets, link: "/services/gauni-water" },
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          />
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-4/5 max-w-sm bg-white p-4 shadow-lg sm:p-6 md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  <img src={logo} alt="Logo" className="h-8 w-auto" />
                </NavLink>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </button>
              </div>
              <div className="my-4 h-0 w-full border border-neutral-20"></div>
              <nav className="flex-grow overflow-y-auto">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      {item.name === "Services" ? (
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between">
                            <NavLink
                              to="/services"
                              className={({ isActive }) =>
                                `text-lg font-medium ${
                                  isActive
                                    ? "text-secondary-base transition-colors duration-300 hover:text-secondary-70"
                                    : "text-neutral-50 transition-colors duration-300 hover:text-neutral-40"
                                }`
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Services
                            </NavLink>
                            <button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className="p-2 text-neutral-50 hover:text-neutral-40"
                            >
                              <FiChevronDown
                                className={`h-5 w-5 transform transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                          </div>
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 mt-2 space-y-2"
                              >
                                {serviceItems.map((service) => (
                                  <motion.li
                                    key={service.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <NavLink
                                      to={service.link}
                                      className={({ isActive }) =>
                                        `flex items-center py-2 ${
                                          isActive
                                            ? "font-bold text-secondary-base"
                                            : "text-primary-base duration-300 hover:text-secondary-base"
                                        }`
                                      }
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      <service.icon className="mr-2 h-5 w-5" />
                                      {service.name}
                                    </NavLink>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            `block py-2 text-lg font-medium ${
                              isActive
                                ? "text-secondary-base transition-colors duration-300 hover:text-secondary-70"
                                : "text-neutral-50 transition-colors duration-300 hover:text-neutral-40"
                            }`
                          }
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto">
                <div className="flex w-full flex-col gap-4 border-t border-neutral-20 pt-4 text-sm font-medium text-primary-base sm:text-base">
                  <div className="flex items-center gap-2">
                    <Sms size="18" variant="Bold" />
                    <NavLink
                      to={`mailto:${navInfo.email}`}
                      className="break-all hover:underline"
                    >
                      {navInfo.email}
                    </NavLink>
                  </div>
                  <div className="flex items-center gap-2">
                    <Call size="18" variant="Bold" />
                    <NavLink
                      to={`tel:${navInfo.phone}`}
                      className="hover:underline"
                    >
                      {navInfo.phone}
                    </NavLink>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building4
                      size="18"
                      variant="Bold"
                      className="mt-1 flex-shrink-0"
                    />
                    <p className="break-words">{navInfo.address}</p>
                  </div>
                </div>
                <div className="my-4 h-0 w-full border border-neutral-20"></div>
                <div className="mt-4 flex justify-center space-x-4">
                  {socialLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.url}
                      target="_blank"
                      className="transition-colors duration-300 hover:text-primary-80"
                    >
                      <FontAwesomeIcon icon={link.icon} size="lg" />
                    </NavLink>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs font-medium text-neutral-50 sm:text-sm">
                  {copyRight}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
