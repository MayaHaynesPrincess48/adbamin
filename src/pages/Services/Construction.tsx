import React from "react";
import SEO from "../../components/layout/SEO";
import ServicePage from "./ServicePage";
import { serviceData } from "../../utils/serviceData";

const Construction: React.FC = () => {
  const { construction } = serviceData;

  return (
    <>
      <SEO
        title="Construction Services"
        description="Explore Abdamin International Limited's comprehensive construction services - Building excellence with innovative solutions"
        keywords={[
          "construction",
          "building",
          "infrastructure",
          "Abdamin",
          "construction services",
          "civil engineering",
        ]}
        ogUrl="https://www.abdamin.com/services/construction"
      />
      <ServicePage
        title={construction.title}
        heroImage={construction.heroImage}
        sections={construction.sections}
        heroClassName="bg-right"
      />
    </>
  );
};

export default Construction;
