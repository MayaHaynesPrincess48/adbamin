import { aboutUsData } from "../../utils/aboutUsData";

const Bio = () => {
  const { bio } = aboutUsData;

  return (
    <section className="mx-auto mt-[-20px] flex max-w-8xl flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[60px]">
        <div className="flex flex-col justify-start gap-2 md:gap-6">
          <p className="text-sm font-bold uppercase text-[#8094b2] sm:text-base md:text-lg">
            {bio.title}
          </p>
          <p className="text-[18px] font-bold leading-tight text-neutral-base sm:text-[24px] md:text-[32px]">
            {bio.mainHeading}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-6">
          {bio.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-sm font-medium text-neutral-base sm:text-base md:text-lg ${
                index === bio.paragraphs.length - 1
                  ? "font-semibold text-primary-base"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
