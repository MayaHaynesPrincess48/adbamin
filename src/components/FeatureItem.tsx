import React from "react";
import clsx from "clsx";

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text, className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center overflow-hidden rounded-[48px] border border-solid border-blue-950 px-6",
        className,
      )}
    >
      <div className="flex h-[50px] items-center gap-4 sm:h-[76px]">
        <div>{icon}</div>
        <div className="text-base md:text-lg">{text}</div>
      </div>
    </div>
  );
};

export default FeatureItem;
