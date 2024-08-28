import SEO from "../components/SEO";
import servicesImage from "../assets/images/services-landing.webp";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import HeadingSection from "../components/HeadingSection";

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Discover the wide range of services offered by Abdamin International Limited"
        keywords={["services", "solutions", "Abdamin"]}
      />
      {/* Services page content */}
      <Hero
        title="Our Services"
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={servicesImage}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover md:h-[650px]"
      />
      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <HeadingSection
          title="Services"
          subtitle="Services that Embody Our Values and Excellence"
          description="Abdamin since incorporation in November of 2000 is engaged in various
        businesses or divisions, Construction, Transportation, Telecoms,
        Consults, and Energy."
        />
        <ServicesGrid className="no-padding" />
      </section>
    </>
  );
};

export default ServicesPage;
