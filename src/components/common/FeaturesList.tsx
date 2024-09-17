import React from "react";
import clsx from "clsx";
import FeatureItem from "./FeatureItem";
import { TickCircle } from "iconsax-react";

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

const FeaturesList: React.FC = () => {
  return (
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
  );
};

export default FeaturesList;
