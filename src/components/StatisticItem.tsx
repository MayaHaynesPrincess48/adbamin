import React from "react";

interface StatisticItemProps {
  value: string;
  label: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ value, label }) => {
  return (
    // <div className="my-auto flex flex-col items-center self-stretch">
    //   <div className="text-4xl font-bold leading-none text-blue-950">
    //     {value}
    //   </div>
    //   <div className="mt-3 text-center text-base font-medium leading-6 text-slate-500">
    //     {label.split("\n").map((line, index) => (
    //       <React.Fragment key={index}>
    //         {line}
    //         {index === 0 && <br />}
    //       </React.Fragment>
    //     ))}
    //   </div>
    // </div>
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center text-2xl font-bold leading-none text-blue-950 md:text-4xl">
          {value}
        </div>
        <div className="text-center text-base font-medium leading-6 text-slate-500">
          {label.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index === 0 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="h-[108px] w-0.5 bg-gradient-to-b from-[#E5E5E5] to-[#FFFFFF] last:hidden"></div>
    </>
  );
};

export default StatisticItem;
