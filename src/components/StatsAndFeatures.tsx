import React, { useMemo } from "react";
import clsx from "clsx";
import StatisticItem from "./StatisticItem";
import FeatureItem from "./FeatureItem";
import { TickCircle } from "iconsax-react";

const StatsAndFeatures: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const foundingYear = 2000; // Replace with the actual founding year of the company

  const statistics = useMemo(
    () => [
      { value: currentYear - foundingYear, label: "Years of\nExperience" },
      { value: "260+", label: "Projects\nCompleted" },
      { value: 95, label: "Satisfaction\nRate" },
      { value: "200+", label: "Satisfied\nClients" },
      { value: "100+", label: "Qualified\nStaff" },
    ],
    [currentYear],
  );

  const features = [
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

  return (
    <>
      <div className="xs:gap-2 mx-auto grid grid-cols-5 sm:gap-4 md:gap-10 lg:max-w-[950px] lg:grid-cols-9 lg:gap-0">
        {statistics.map((stat, index) => (
          <React.Fragment key={index}>
            <StatisticItem
              value={stat.value}
              label={stat.label}
              className={clsx({
                "col-span-2 text-center lg:col-span-1": index >= 3,
              })}
              duration={index === 2 ? 4 : 2.5}
            />
            {index < statistics.length - 1 && (
              <div
                className={clsx(
                  "mx-auto h-[108px] w-0.5 bg-gradient-to-b from-[#E5E5E5] to-[#FFFFFF]",
                  { "hidden lg:block": index === 2 },
                )}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            text={feature.text}
            className={clsx({
              "lg:col-span-1 lg:col-start-2 xl:col-start-4":
                index === features.length - 1,
            })}
          />
        ))}
      </div>
    </>
  );
};

export default StatsAndFeatures;
