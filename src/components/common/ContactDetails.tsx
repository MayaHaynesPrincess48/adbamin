import React from "react";
import { CallCalling, Send2, Gps } from "iconsax-react";
import clsx from "clsx";
import { Link } from "react-router-dom";

// Interface for ContactDetails component props
interface ContactDetailsProps {
  className?: string;
}

// ContactDetails component
const ContactDetails: React.FC<ContactDetailsProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full flex-col gap-12 md:max-w-lg md:gap-[52px]",
        className,
      )}
    >
      <ContactItem
        title="Call Us"
        description="Call our team Mon-Fri from 8am to 5pm."
        icon={<CallCalling size="28" color="#0A0A0A" />}
        linkText="+2349123278100"
        linkHref="tel:+2349123278100"
      />
      <ContactItem
        title="Say Hello"
        description="We’re always happy to hear from you."
        icon={<Send2 size="28" color="#0A0A0A" />}
        linkText="Shoot us an email"
        linkHref="mailto:abdaminltd@gmail.com"
      />
      <ContactItem
        title="Visit Us"
        description="Chat to us in person at our Adamawa HQ."
        icon={<Gps size="28" color="#0A0A0A" />}
        linkText="36, Bank Road, Bekaji, PMB 2106, Jimeta"
        linkHref="https://www.google.com/maps/search/?api=1&query=36+Bank+Road,+Bekaji,+PMB+2106,+Jimeta"
        external
      />
    </div>
  );
};

// Interface for ContactItem component props
interface ContactItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
  external?: boolean;
}

// ContactItem component
const ContactItem: React.FC<ContactItemProps> = ({
  title,
  description,
  icon,
  linkText,
  linkHref,
  external,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold leading-6 text-neutral-950 md:text-[24px] md:leading-[36px]">
          {title}
        </p>
        <p className="text-base font-medium text-neutral-50">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        {icon}
        {external ? (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-neutral-base underline hover:text-primary-base"
          >
            {linkText}
          </a>
        ) : (
          <Link
            to={linkHref}
            className="text-lg font-bold text-neutral-base underline hover:text-primary-base"
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;
