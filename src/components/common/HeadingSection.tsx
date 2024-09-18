import AnimatedSection from "../layout/AnimatedSection";

type HeadingSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const HeadingSection = ({
  title,
  subtitle,
  description,
}: HeadingSectionProps) => {
  return (
    <AnimatedSection>
      <div className="mx-auto flex max-w-[1048px] flex-col items-center gap-6">
        <p className="text-md text-center font-bold uppercase text-[#5A6F8F] md:text-lg">
          {title}
        </p>
        <h2 className="text-center text-[32px] font-bold leading-tight text-neutral-900 md:text-[52px]">
          {subtitle}
        </h2>
        <p className="text-md text-center font-medium text-neutral-700 md:text-lg">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
};

export default HeadingSection;
