import React from "react";
import logo from "../../assets/svg/Logo-white.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Palette, Code } from "lucide-react";
import { footerInfo, navItems, socialLinks, copyRight } from "../../utils/data";

const Footer: React.FC = () => {
  const sharedTextClasses = "text-sm md:text-base font-normal";
  const sharedTitleClasses = "text-sm md:text-base font-semibold text-white";

  return (
    <footer
      className="bottom-0 h-full bg-primary-100"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-4">
          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              <img
                src={logo}
                alt="Abdamin International Limited Logo"
                className="h-auto w-28 sm:w-32 md:w-36 lg:w-40"
              />
              {[
                {
                  title: "Email address",
                  content: footerInfo.email,
                  isEmail: true,
                  link: `mailto:${footerInfo.email}`,
                },
                {
                  title: "Phone number",
                  content: footerInfo.phone,
                  isPhone: true,
                  link: `tel:${footerInfo.phone.replace(/\s+/g, "")}`,
                },
                { title: "Locate us", content: footerInfo.address },
              ].map(({ title, content, isEmail, isPhone, link }) => (
                <div key={title} className="flex flex-col gap-2">
                  <p className={sharedTitleClasses}>{title}</p>
                  {isEmail ? (
                    <NavLink
                      to={link}
                      className={`${sharedTextClasses} text-neutral-10 transition-colors duration-300 hover:text-white hover:underline`}
                      aria-label={`Email us at ${content}`}
                    >
                      {content}
                    </NavLink>
                  ) : isPhone ? (
                    <NavLink
                      to={`tel:${content.replace(/\s+/g, "")}`}
                      className={`${sharedTextClasses} text-neutral-10 transition-colors duration-300 hover:text-white hover:underline`}
                      aria-label={`Call us at ${content}`}
                    >
                      {content}
                    </NavLink>
                  ) : (
                    <p className={`${sharedTextClasses} text-neutral-10`}>
                      {content}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex gap-4 text-neutral-10">
                {socialLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.url}
                    className={`transition-colors duration-300 hover:text-white ${sharedTextClasses} text-neutral-10`}
                    aria-label={`Visit our ${link.label} page`}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      size="lg"
                      aria-hidden="true"
                    />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <nav className="col-span-1" aria-label="Quick links">
            <div className="flex flex-col gap-4">
              <h2 className={`${sharedTitleClasses} mt-[14px]`}>Quick Links</h2>
              {navItems.slice(0, 4).map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className={`${sharedTextClasses} text-neutral-10 hover:text-white`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div
            className="col-span-4 mt-[24px] h-0 w-full border border-neutral-10"
            role="separator"
          ></div>
          <div className="col-span-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-1">
              <p
                className={`${sharedTextClasses} hidden text-neutral-10 sm:inline`}
              >
                Copyright
              </p>
              <p className={`${sharedTextClasses} text-neutral-10`}>
                {copyRight}{" "}
                <span className="hidden lg:inline">All Rights Reserved.</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`${sharedTextClasses} text-neutral-10`}>
                Designed by
              </span>
              <NavLink
                to="https://www.behance.net/olubummokolawole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-40 hover:underline"
                aria-label="Contact designer Kola via email"
              >
                <Palette size={16} aria-hidden="true" />
              </NavLink>
              <span className="text-neutral-10" aria-hidden="true">
                |
              </span>
              <span className={`${sharedTextClasses} text-neutral-10`}>
                Developed by
              </span>
              <NavLink
                to="https://github.com/NabsCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-40 hover:underline"
                aria-label="Visit developer Hassan's GitHub profile"
              >
                <Code size={16} aria-hidden="true" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
