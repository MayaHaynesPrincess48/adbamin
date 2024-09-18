import React from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import CountUp from "react-countup";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const isPercentage = label.toLowerCase().includes("rate");
  const hasPlus = value.toString().includes("+");
  const numericValue = parseInt(value.toString().replace(/\D/g, ""), 10);

  return (
    <motion.div
      ref={ref}
      className={clsx(`flex flex-col items-center gap-4 ${className}`)}
    >
      <motion.div className="text-center text-2xl font-bold leading-none text-blue-950 xs:text-3xl md:text-4xl">
        {isInView && (
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
        )}
      </motion.div>
      <div className="text-center text-sm font-medium leading-6 text-slate-500 xs:text-base">
        {label.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index === 0 && <br />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default StatisticItem;
