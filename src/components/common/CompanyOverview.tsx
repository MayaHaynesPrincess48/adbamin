import { aboutUsData } from "../../utils/aboutUsData";

const CompanyOverview = () => {
  const { mission, vision, principles } = aboutUsData;

  return (
    <section className="mx-auto flex max-w-8xl flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-[60px]">
        <div className="flex flex-col justify-start gap-2 lg:gap-6">
          <p className="text-[18px] font-bold text-neutral-base sm:text-[24px] md:text-[32px]">
            {vision.title}
          </p>
          <p className="text-sm font-medium text-neutral-base md:text-base lg:text-lg">
            {vision.content}
          </p>
        </div>

        <div className="flex flex-col justify-start gap-2 lg:gap-6">
          <p className="text-[18px] font-bold text-neutral-base sm:text-[24px] md:text-[32px] lg:mt-[-9px]">
            {mission.title}
          </p>
          <p className="text-sm font-medium text-neutral-base md:text-base lg:text-lg">
            {mission.content}
          </p>
        </div>

        <div className="flex flex-col justify-start gap-2 lg:gap-6">
          <p className="text-[18px] font-bold text-neutral-base sm:text-[24px] md:text-[32px]">
            {principles.title}
          </p>
          <ul className="list-inside list-disc">
            {principles.content.map((item, index) => (
              <li
                key={index}
                className="text-sm font-medium text-neutral-base md:text-base lg:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
