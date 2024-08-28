import SEO from "../components/SEO";
import aboutUs from "../assets/images/About-us.webp";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Mission from "../components/Mission";
import StatsAndFeatures from "../components/StatsAndFeatures";
import CompanyValues from "../components/CompanyValues";

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Abdamin International Limited"
        keywords={["about", "company", "history"]}
      />
      {/* About Us page content */}
      <Hero
        title="About US"
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={aboutUs}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover md:h-[650px]"
      />
      <Bio />
      <Mission />
      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <StatsAndFeatures />
      </section>
      <CompanyValues />
    </>
  );
};

export default AboutUs;
