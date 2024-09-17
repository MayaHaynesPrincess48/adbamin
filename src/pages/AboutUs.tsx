import SEO from "../components/layout/SEO";
import aboutUs from "../assets/images/About-us.webp";
import Hero from "../components/layout/Hero";
import Bio from "../components/common/Bio";
import Mission from "../components/common/CompanyOverview";
import StatsAndFeatures from "../components/common/StatsAndFeatures";
import CompanyValues from "../components/common/CompanyValues";
import AnimatedSection from "@/components/layout/AnimatedSection";

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Abdamin International Limited - Our history, mission, and values"
        keywords={["about", "company", "history", "mission", "values"]}
        ogUrl="https://www.abdamin.com/about"
      />
      {/* About Us page content */}
      <Hero
        title="About US"
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={aboutUs}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover md:h-[650px]"
      />
      <AnimatedSection>
        <Bio />
      </AnimatedSection>
      <AnimatedSection>
        <Mission />
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex max-w-8xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <StatsAndFeatures />
      </AnimatedSection>
      <AnimatedSection>
        <CompanyValues />
      </AnimatedSection>
    </>
  );
};

export default AboutUs;
