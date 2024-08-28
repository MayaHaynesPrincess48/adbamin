type SectionItemProps = {
  title: string;
  content: string | JSX.Element;
  titleClassName?: string;
  contentClassName?: string;
};

const SectionItem = ({
  title,
  content,
  titleClassName,
  contentClassName,
}: SectionItemProps) => {
  return (
    <div className="flex flex-col justify-start gap-2 lg:gap-6">
      <p
        className={clsx(
          "text-[18px] font-bold text-neutral-base sm:text-[24px] md:text-[32px]",
          titleClassName,
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          "text-sm font-medium text-neutral-base md:text-base lg:text-lg",
          contentClassName,
        )}
      >
        {content}
      </p>
    </div>
  );
};

import clsx from "clsx";

const Mission = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-[60px]">
        <SectionItem
          title="Our Vision"
          content="To provide excellent service through commitment to customers needs and expectation by delivering unparalleled level of quality of services."
        />
        <SectionItem
          title="Our Mission"
          content="To build upon our reputation for excellence in business by delivering innovation and creative solutions via strategic partnerships meet the needs of our customers and to provide an unparalleled level of service, safety and efficiency for delivery."
          titleClassName="lg:mt-[-9px]"
        />
        <SectionItem
          title="Our Principles"
          content={
            <ul className="list-inside list-disc">
              <li>Commitment to customers needs</li>
              <li>Delivering unmatched level of service</li>
              <li>Quality of services</li>
            </ul>
          }
        />
      </div>
    </section>
  );
};

export default Mission;
