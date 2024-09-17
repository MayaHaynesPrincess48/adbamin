import React from "react";
import SEO from "../../components/layout/SEO";
import ServicePage from "./ServicePage";
import { serviceData } from "../../utils/serviceData";

const Transportation: React.FC = () => {
  const { transportation } = serviceData;

  return (
    <>
      <SEO
        title="Transportation Services"
        description="Discover Abdamin International Limited's efficient transportation and logistics solutions - Connecting businesses across Nigeria"
        keywords={[
          "transportation",
          "logistics",
          "haulage",
          "Abdamin",
          "fleet management",
          "supply chain",
        ]}
        ogUrl="https://www.abdamin.com/services/transportation"
      />
      <ServicePage
        title={transportation.title}
        heroImage={transportation.heroImage}
        sections={transportation.sections}
      />
    </>
  );
};

export default Transportation;
