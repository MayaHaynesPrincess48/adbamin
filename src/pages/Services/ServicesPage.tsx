import SEO from "../../components/layout/SEO";
import servicesImage from "../../assets/images/services-landing.webp";
import Hero from "../../components/layout/Hero";
import ServicesGrid from "../../components/services/ServicesGrid";
import HeadingSection from "../../components/common/HeadingSection";

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Discover the wide range of services offered by Abdamin International Limited - Tailored solutions for your needs"
        keywords={[
          "services",
          "solutions",
          "Abdamin",
          "offerings",
          "expertise",
        ]}
        ogUrl="https://www.abdamin.com/services"
      />
      {/* Services page content */}
      <Hero
        title="Our Services"
        titleClassName="mt-[85px] md:mt-[110px] hidden"
        backgroundImage={servicesImage}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover bg-center md:h-[650px]"
      />
      <section className="mx-auto flex max-w-8xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
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
