import Hero from "../components/Hero";
import SEO from "../components/SEO";
import landing from "../assets/landing.png";
import Services from "../components/Services";
import UpcomingProject from "../components/UpcomingProject";
import StatisticsSection from "../components/StatisticsSection";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Abdamin International Limited"
        keywords={["home", "abdamin", "international"]}
      />
      {/* Home page content */}
      <Hero
        title="Empowering Progress Through Innovative Solutions."
        subtitle="We are Abdamin, we deliver innovative and creative solutions via strategic partnerships to meet the needs of our customers and to provide an unparalleled level of service."
        backgroundImage={landing}
        link="/about-us"
        className="min-h-[800px] bg-left sm:bg-center md:min-h-screen"
        text="Learn More"
      />
      <Services />
      <StatisticsSection />
      <UpcomingProject />
    </>
  );
};

export default Home;
