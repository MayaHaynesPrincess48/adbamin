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
        title="Home"
        description="Welcome to Abdamin International Limited - Our Products and Services"
        keywords={["home", "abdamin", "international", "products", "services"]}
        ogUrl="https://www.abdamin.com/"
      />
      {/* Home page content */}
      <Hero
        title="Empowering Progress Through Innovative Solutions."
        subtitle="We are Abdamin, we deliver innovative and creative solutions via strategic partnerships to meet the needs of our customers and to provide an unparalleled level of service."
        backgroundImage={landing}
        link="/about-us"
        className="h-[100dvh] bg-left sm:bg-center"
        text="Learn More"
      />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <StatisticsSection />
      </AnimatedSection>
      <AnimatedSection>
        <CompanyValues />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectHome />
      </AnimatedSection>
    </>
  );
};

export default HomePage;
