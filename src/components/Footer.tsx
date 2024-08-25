/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../assets/Logo-white.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerInfo, navItems, socialLinks, copyRight } from "../utils/data";

const sharedTextClasses = "text-sm md:text-base font-normal";
const sharedTitleClasses = "text-sm md:text-base font-semibold text-white";

const FooterInfoItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="flex flex-col gap-2">
    <p className={sharedTitleClasses}>{title}</p>
    {title === "Email address" ? (
      <NavLink
        to={`mailto:${content}`}
        className={`${sharedTextClasses} text-neutral-10 transition-colors duration-300 hover:text-white hover:underline`}
      >
        {content}
      </NavLink>
    ) : (
      <p className={`${sharedTextClasses} text-neutral-10`}>{content}</p>
    )}
  </div>
);

const FooterSocialLink = ({ link }: { link: any }) => (
  <NavLink
    to={link.url}
    className={`transition-colors duration-300 hover:text-white ${sharedTextClasses} text-neutral-10`}
  >
    <FontAwesomeIcon icon={link.icon} size="lg" />
  </NavLink>
);

const FooterNavLink = ({ item }: { item: any }) => (
  <NavLink
    to={item.link}
    className={`${sharedTextClasses} text-neutral-10 hover:text-white`}
  >
    {item.name}
  </NavLink>
);

const FooterCopyright = () => (
  <div className="flex items-center gap-1">
    <p className={`${sharedTextClasses} text-neutral-10`}>Copyright</p>
    <p className={`${sharedTextClasses} text-neutral-10`}>
      {copyRight} <span className="hidden lg:inline">All Rights Reserved.</span>
    </p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bottom-0 h-full bg-primary-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-4">
          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              <img src={logo} alt="Logo" className="h-8 w-fit sm:h-10" />
              <FooterInfoItem
                title="Email address"
                content={footerInfo.email}
              />
              <FooterInfoItem title="Phone number" content={footerInfo.phone} />
              <FooterInfoItem title="Locate us" content={footerInfo.address} />
              <div className="flex gap-4 text-neutral-10">
                {socialLinks.map((link) => (
                  <FooterSocialLink key={link.label} link={link} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-4">
              <p className={sharedTitleClasses}>Quick Links</p>
              {navItems.slice(0, 4).map((item) => (
                <FooterNavLink key={item.name} item={item} />
              ))}
            </div>
          </div>
          <div className="col-span-4 mt-[24px] h-0 w-full border border-neutral-10"></div>
          <div className="col-span-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-8 md:order-1">
              <p className={`${sharedTextClasses} text-neutral-10`}>
                Privacy policy
              </p>
              <p className={`${sharedTextClasses} text-neutral-10`}>
                Terms & conditions
              </p>
            </div>
            <FooterCopyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
