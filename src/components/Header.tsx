import { NavLink } from "react-router-dom";
import { navInfo, socialLinks } from "../utils/data";
import { Building4, Call, Sms } from "iconsax-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="mx-auto hidden h-[52px] max-w-7xl items-center justify-between bg-white px-4 py-[16px] font-medium text-primary-base sm:px-6 md:flex lg:px-8">
      <div className="flex items-center justify-center gap-[24px] text-sm">
        <div className="flex items-center justify-center gap-2">
          <Sms size="16" variant="Bold" />
          <NavLink to={`mailto:${navInfo.email}`} className="hover:underline">
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
            target="_blank"
            className="transition-colors duration-300 hover:text-primary-80"
          >
            <FontAwesomeIcon icon={link.icon} size="lg" />
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
