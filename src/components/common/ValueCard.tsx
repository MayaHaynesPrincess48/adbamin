import React from "react";
import clsx from "clsx";

interface ValueCardProps {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  iconSrc,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={clsx(className, "flex flex-col items-center justify-center")}
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt={title}
        className="z-10 aspect-square w-16 translate-y-[20px] self-center object-contain"
      />
      <div className="flex h-[250px] flex-col items-center justify-center overflow-hidden rounded-xl bg-[#FAFBFE] px-4 py-6">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-2xl font-bold leading-none text-neutral-950">
            {title}
          </p>
          <p className="text-base text-zinc-600 md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
