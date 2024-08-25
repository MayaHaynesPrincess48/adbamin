import React from "react";
import StatisticItem from "./StatisticItem";
import FeatureItem from "./FeatureItem";
import { TickCircle } from "iconsax-react";
import { NavLink } from "react-router-dom";
import HeadingSection from "./HeadingSection";

interface StatisticData {
  value: string;
  label: string;
}

interface FeatureData {
  icon: React.ReactNode;
  text: string;
}

const statistics: StatisticData[] = [
  { value: "24", label: "Years of\nExperience" },
  { value: "260+", label: "Projects\nCompleted" },
  { value: "95%", label: "Satisfaction\nRate" },
  { value: "200+", label: "Satisfied\nClients" },
  { value: "100+", label: "Qualified\nStaff" },
];

const features: FeatureData[] = [
  {
    icon: <TickCircle size="32" color="#E07160" variant="Bold" />,
    text: "Best manufacturing service provider",
  },
  {
    icon: <TickCircle size="32" color="#E07160" variant="Bold" />,
    text: "Experienced and trusted contractor",
  },
  {
    icon: <TickCircle size="32" color="#E07160" variant="Bold" />,
    text: "Innovative solutions every time",
  },
  {
    icon: <TickCircle size="32" color="#E07160" variant="Bold" />,
    text: "Reliable and professional",
  },
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
      <HeadingSection
        title="company"
        subtitle="Our Legacy of Excellence"
        description="Abdamin International Limited is a limited liability company fully registered and incorporated in Nigeria with its head office in Yola, Adamawa State with several business offices in Abuja, kaduna and Lagos."
      />
      {/* <div className="flex flex-wrap items-center justify-center gap-10 self-center max-md:max-w-full">
        {statistics.map((stat, index) => (
          <React.Fragment key={index}>
            <StatisticItem value={stat.value} label={stat.label} />
            {index < statistics.length - 1 && (
              <div className="my-auto flex h-[108px] w-0.5 shrink-0 self-stretch" />
            )}
          </React.Fragment>
        ))}
      </div> */}
      <div className="mx-auto flex max-w-[945px] flex-wrap items-center justify-center gap-[60px]">
        {statistics.map((stat, index) => (
          <StatisticItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            text={feature.text}
            className={
              index === features.length - 1
                ? "lg:col-span-1 lg:col-start-2 xl:col-start-4"
                : ""
            }
          />
        ))}
      </div>
      <NavLink className="btn btn-primary mx-auto w-fit" to="/about-us">
        About Us
      </NavLink>
    </section>
  );
};

export default StatisticsSection;
