import React, { useMemo } from "react";
import clsx from "clsx";
import StatisticItem from "./StatisticItem";

const StatisticsList: React.FC = () => {
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
    [currentYear, foundingYear],
  );

  return (
    <div className="mx-auto grid grid-cols-5 xs:gap-2 sm:gap-4 md:gap-10 lg:max-w-[950px] lg:grid-cols-9 lg:gap-0">
      {statistics.map((stat, index) => (
        <React.Fragment key={index}>
          <StatisticItem
            value={stat.value}
            label={stat.label}
            className={clsx({
              "col-span-2 text-center lg:col-span-1": index >= 3,
            })}
            duration={index === 2 ? 6 : 4}
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
  );
};

export default StatisticsList;
