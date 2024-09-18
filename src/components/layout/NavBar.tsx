/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/svg/Logo.svg";
import { CloseIcon, MenuIcon } from "../../components/ui/SvgIcons";
import { navItems, socialLinks, copyRight, navInfo } from "../../utils/data";
import { Building4, Call, Sms } from "iconsax-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMenu } from "../../context/MenuContext";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 52);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location, setIsMenuOpen]);

  return (
    <>
      <nav
        className={clsx("sticky top-0 z-40 transition-all duration-300", {
          hidden: isMenuOpen,
          block: !isMenuOpen,
          "backdrop-blur-lg": isScrolled,
          "bg-neutral-10/50": isScrolled,
        })}
      >
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/">
            <img
              src={logo}
              alt="Abdamin Logo"
              className="h-[32px] w-[96px] sm:h-[40px] sm:w-[120px] md:h-[48px] md:w-[148px]"
            />
          </NavLink>
          <div className="hidden items-center gap-10 md:flex lg:gap-16">
            {navItems.slice(0, -1).map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `text-base font-semibold ${
                    isActive
                      ? "text-secondary-base transition-colors duration-300 hover:text-secondary-70"
                      : "text-neutral-50 transition-colors duration-300 hover:text-neutral-40"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <NavLink className="btn btn-primary btn-hidden" to="/get-in-touch">
            Get in touch
          </NavLink>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-neutral-90 bg-opacity-50 backdrop-blur-sm"
            />
            <motion.div
              ref={menuRef}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-x-0 top-0 z-40 flex h-[100dvh] w-full flex-col justify-between overflow-y-auto bg-white p-4 sm:p-6 md:hidden"
            >
              <div className="flex items-center justify-between">
                <NavLink to="/">
                  <img
                    src={logo}
                    alt="Abdamin Logo"
                    className="h-[32px] w-[96px] sm:h-[40px] sm:w-[120px] md:h-[48px] md:w-[148px]"
                  />
                </NavLink>
                {isMenuOpen && (
                  <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
                )}
              </div>
              <div className="my-[30px] h-0 w-full border border-neutral-20"></div>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={({ isActive }) =>
                      `text-[24px] font-normal leading-[28px] ${
                        isActive
                          ? "text-secondary-base transition-colors duration-300 hover:text-secondary-70"
                          : "text-neutral-50 transition-colors duration-300 hover:text-neutral-40"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="my-[30px] h-0 w-full border border-neutral-20"></div>
              <div className="text-md flex flex-col gap-[24px] font-medium text-primary-base sm:text-lg">
                <div className="flex items-center gap-2">
                  <Sms size="18" variant="Bold" />
                  <NavLink
                    to={`mailto:${navInfo.email}`}
                    className="hover:underline"
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
                  <Building4 size="18" variant="Bold" />
                  <p>{navInfo.address}</p>
                </div>
                <div className="flex space-x-4">
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
              </div>
              <p className="sm:text-md mt-[22px] text-sm font-medium text-neutral-50">
                {copyRight}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
