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
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      // Optional: Reset animation after 5 minutes
      // const timer = setTimeout(() => setHasAnimated(false), 5 * 60 * 1000);
      // return () => clearTimeout(timer);
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
      <div className="xs:text-3xl text-center text-2xl font-bold leading-none text-blue-950 md:text-4xl">
        {hasAnimated ? (
          <CountUp
            start={0}
            end={numericValue}
            duration={duration}
            separator=","
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
          "0"
        )}
      </div>
      <div className="xs:text-base text-center text-sm font-medium leading-6 text-slate-500">
        {label.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index === 0 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatisticItem;
