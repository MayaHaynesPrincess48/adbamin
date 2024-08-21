import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navInfo, navItems, socialLinks, copyRight } from "../utils/data";
import logo from "../assets/Logo.svg";
import { Building4, Call, Sms } from "iconsax-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CloseIcon, MenuIcon } from "./ui/SvgIcons";

type useStateType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) as useStateType;
  return (
    <header className="relative bg-white">
      <div className="container mx-auto hidden h-[52px] max-w-[1440px] items-center justify-between px-4 py-[16px] font-medium text-primary-base sm:px-6 md:flex lg:px-8">
        <div className="flex items-center justify-center gap-[24px] text-sm">
          <div className="flex items-center justify-center gap-2">
            <Sms size="16" variant="Bold" />
            <NavLink
              to={`mailto:${navInfo.email}`}
              className="text-gray-800 hover:underline"
            >
              {navInfo.email}
            </NavLink>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Call size="16" variant="Bold" />
            <p>{navInfo.phone}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Building4 size="16" variant="Bold" />
            <p>{navInfo.address}</p>
          </div>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.url}
              className="transition-colors duration-300 hover:text-primary-80"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </NavLink>
          ))}
        </div>
      </div>
      <nav className="sticky top-0 z-50 bg-gray-300">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
          {isMenuOpen ? (
            <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          ) : (
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 z-50 flex w-full flex-col bg-white p-10 md:hidden">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className="text-[24px] font-normal leading-[28px] text-neutral-50"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="my-[80px] h-0 w-full border border-neutral-20"></div>
          <div className="text-md flex flex-col gap-[24px] font-medium text-primary-base sm:text-lg">
            <div className="flex items-center gap-2">
              <Sms size="18" variant="Bold" />
              <NavLink
                to={`mailto:${navInfo.email}`}
                className="text-gray-800 hover:underline"
              >
                {navInfo.email}
              </NavLink>
            </div>
            <div className="flex items-center gap-2">
              <Call size="18" variant="Bold" />
              <p>{navInfo.phone}</p>
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
                  className="transition-colors duration-300 hover:text-primary-80"
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </NavLink>
              ))}
            </div>
          </div>
          <p className="mt-[32px] text-[16px] font-medium text-neutral-50 sm:text-[18px]">
            {copyRight}
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
