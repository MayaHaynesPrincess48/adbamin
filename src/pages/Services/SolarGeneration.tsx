import React from "react";
import SEO from "../../components/layout/SEO";
import ServicePage from "./ServicePage";
import { serviceData } from "../../utils/serviceData";

const SolarGeneration: React.FC = () => {
  const { solarGeneration } = serviceData;

  return (
    <>
      <SEO
        title="Solar Generation Services"
        description="Harness the power of the sun with Abdamin International Limited's solar generation solutions - Sustainable energy for a brighter future"
        keywords={[
          "solar energy",
          "renewable power",
          "photovoltaic systems",
          "solar panels",
          "solar power",
          "Abdamin",
          "sustainable solutions",
          "green technology",
        ]}
        ogUrl="https://www.abdamin.com/services/solar-generation"
      />
      <ServicePage
        title={solarGeneration.title}
        heroImage={solarGeneration.heroImage}
        sections={solarGeneration.sections}
      />
    </>
  );
};

export default SolarGeneration;
