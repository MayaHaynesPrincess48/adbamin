import HeadingSection from "../common/HeadingSection";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section className="relative mx-auto mt-[-85px] flex w-full max-w-8xl flex-col items-center justify-center px-4 pt-[80px] sm:px-6 md:pt-[120px] lg:px-8">
      <HeadingSection
        title="Services"
        subtitle="Services that Embody Our Values and Excellence"
        description="Abdamin since incorporation in November of 2000 is engaged in various
        businesses or divisions, Construction, Transportation, Telecoms,
        Consults, and Energy."
      />
      <ServicesGrid />
    </section>
  );
};

export default Services;
