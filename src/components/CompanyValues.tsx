import HeadingSection from "./HeadingSection";
import clsx from "clsx";
import teamwork from "../assets/svg/Teamwork.svg";
import reliability from "../assets/svg/Insignia.svg";
import innovation from "../assets/svg/Problem-solve.svg";
import customerFocus from "../assets/svg/Customer-service.svg";
import peopleDevelopment from "../assets/svg/Man.svg";

const valueData = [
  {
    iconSrc: teamwork,
    title: "Teamwork",
    description:
      "We foster a collaborative environment where every team member's skills and input are valued.",
  },
  {
    iconSrc: reliability,
    title: "Responsibility and Reliability",
    description:
      "We bring decades of industry experience to every project, ensuring excellence and reliability",
  },
  {
    iconSrc: peopleDevelopment,
    title: "People Development",
    description:
      "We believe that our greatest asset is our people. We are dedicated to nurturing their growth and potential.",
  },
  {
    iconSrc: customerFocus,
    title: "Customer Focus",
    description:
      "We prioritize your needs, offering tailored solutions that align with your goals and exceed expectations",
  },
  {
    iconSrc: innovation,
    title: "Innovation",
    description:
      "Our diverse divisions provide integrated services, delivering seamless results across multiple sectors",
  },
];

const ValueCard = ({
  iconSrc,
  title,
  description,
  className,
}: {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(className, `flex flex-col items-center justify-center`)}
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
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

const CompanyValues = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pt-16 sm:px-6 lg:px-8">
      <HeadingSection
        title="Values"
        subtitle="Why Choose Us"
        description="At Abdamin, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here’s why you choose us:"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {valueData.map((value) => (
          <ValueCard
            key={value.title}
            iconSrc={value.iconSrc}
            title={value.title}
            description={value.description}
            className={clsx({
              "md:col-span-2 md:col-start-1 md:w-[50%] md:translate-x-[50%] lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:w-full":
                value.title === "Innovation",
              "lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:translate-x-[-50%]":
                value.title === "Customer Focus",
            })}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyValues;

{
  /* <div className="flex flex-wrap justify-center gap-8">
{valueData.map((value) => (
  <ValueCard
    key={value.title}
    iconSrc={value.iconSrc}
    title={value.title}
    description={value.description}
    className={clsx({
      "w-full md:w-1/3 lg:w-1/4": true,
    })}
  />
))}
</div> */
}
