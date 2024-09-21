import Hero from "../components/layout/Hero";
import SEO from "../components/layout/SEO";
import landing from "../assets/images/landing.webp";
import Services from "../components/services/Services";
import StatisticsSection from "../components/common/StatisticsSection";
import CompanyValues from "../components/common/CompanyValues";
import ProjectHome from "../components/projects/ProjectHome";
import AnimatedSection from "@/components/layout/AnimatedSection";

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        description="Abdamin International: Innovative solutions for manufacturing, construction, and industrial projects. Empowering progress through strategic partnerships."
        keywords={[
          "home",
          "abdamin",
          "international",
          "limited",
          "products",
          "services",
          "construction",
          "industrial",
          "nigeria",
          "lagos",
          "abuja",
          "kaduna",
          "adamawa",
          "yola",
          "solar",
          "water",
          "telecoms",
        ]}
        ogUrl="https://www.abdamin.com/"
      />
      {/* Home page content */}
      <Hero
        title="Empowering Progress Through Innovative Solutions."
        subtitle="We are Abdamin, we deliver innovative and creative solutions via strategic partnerships to meet the needs of our customers and to provide an unparalleled level of service."
        backgroundImage={landing}
        link="/about-us"
        className="h-[650px] bg-cover bg-left sm:bg-center md:h-[750px] lg:h-[950px] xl:h-[850px]"
        text="Learn More"
      />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <StatisticsSection />
      </AnimatedSection>
      <CompanyValues />
      <AnimatedSection>
        <ProjectHome />
      </AnimatedSection>
    </>
  );
};

export default HomePage;
