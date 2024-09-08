import Hero from "../components/Hero";
import SEO from "../components/SEO";
import landing from "../assets/images/landing.webp";
import Services from "../components/Services";
import StatisticsSection from "../components/StatisticsSection";
import Values from "../components/CompanyValues";

const Home: React.FC = () => {
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
      <Services />
      <StatisticsSection />
      <Values />
    </>
  );
};

export default Home;
