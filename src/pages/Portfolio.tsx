import SEO from "../components/SEO";
import portfolio from "../assets/images/portfolio-landing.webp";
import Hero from "../components/Hero";

const Porfolio: React.FC = () => {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore the diverse portfolio of Abdamin International Limited - Our projects and achievements"
        keywords={[
          "portfolio",
          "projects",
          "services",
          "Abdamin",
          "case studies",
        ]}
        ogUrl="https://www.abdamin.com/portfolio"
      />
      {/* Portfolio page content */}
      <Hero
        title="Portfolio"
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={portfolio}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover md:h-[650px]"
      />
    </>
  );
};

export default Porfolio;
