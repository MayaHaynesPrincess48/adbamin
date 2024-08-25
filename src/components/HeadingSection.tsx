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
    <div className="mx-auto flex max-w-[1048px] flex-col items-center gap-6">
      <p className="text-md text-center font-bold uppercase text-[#8094b2] md:text-lg">
        {title}
      </p>
      <p className="text-center text-[32px] font-bold leading-tight text-neutral-base md:text-[52px]">
        {subtitle}
      </p>
      <p className="text-md text-center font-medium text-neutral-50 md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default HeadingSection;
