import React, { useState, useEffect } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatisticItemProps {
  value: string | number;
  label: string;
  className?: string;
  duration?: number;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  value,
  label,
  className,
  duration = 2.5,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const isPercentage = label.toLowerCase().includes("rate");
  const hasPlus = value.toString().includes("+");
  const numericValue = parseInt(value.toString().replace(/\D/g, ""), 10);

  return (
    <div
      ref={ref}
      className={clsx(`flex flex-col items-center gap-4 ${className}`)}
    >
      <div className="text-center text-2xl font-bold leading-none text-blue-950 xs:text-3xl md:text-4xl">
        {inView ? (
          <CountUp
            start={0}
            end={numericValue}
            duration={duration}
            separator=","
            useEasing={true}
            useGrouping={true}
            onEnd={() => console.log("CountUp animation ended")}
          >
            {({ countUpRef }) => (
              <span>
                <span ref={countUpRef} />
                {isPercentage && "%"}
                {hasPlus && "+"}
              </span>
            )}
          </CountUp>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-center text-sm font-medium leading-6 text-slate-500 xs:text-base">
        {label}
      </div>
    </div>
  );
};

export default StatisticItem;
