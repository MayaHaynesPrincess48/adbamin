/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoWebp from "../../assets/images/Logo.webp";
import logoFallback from "../../assets/svg/Logo.svg";
import { CloseIcon, MenuIcon } from "../../components/ui/SvgIcons";
import { navItems, socialLinks, copyRight, navInfo } from "../../utils/data";
import { useMenu } from "../../context/MenuContext";
import useClickOutside from "../../hooks/useClickOutside";
import clsx from "clsx";
import StaggeredDropDown from "../ui/StaggeredDropdown";
import MobileMenu from "./MobileMenu";

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
            <picture>
              <source
                srcSet={`${logoWebp} 1x, ${logoWebp} 2x`}
                type="image/webp"
              />
              <img
                src={logoFallback}
                alt="Abdamin Logo"
                width="160"
                height="40"
                className="h-auto w-28 sm:w-32 md:w-36 lg:w-40"
                srcSet={`${logoFallback} 1x, ${logoFallback} 2x`}
              />
            </picture>
          </NavLink>
          <div className="hidden items-center gap-8 md:flex lg:gap-16">
            {navItems.slice(0, -2).map((item) => (
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
            <StaggeredDropDown />
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
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItems}
        navInfo={navInfo}
        socialLinks={socialLinks}
        copyRight={copyRight}
      />
    </>
  );
};

export default Navbar;
