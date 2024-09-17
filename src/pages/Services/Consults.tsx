import React from "react";
import SEO from "../../components/layout/SEO";
import ServicePage from "./ServicePage";
import { serviceData } from "../../utils/serviceData";

const Consults: React.FC = () => {
  const { consults } = serviceData;

  return (
    <>
      <SEO
        title="Consulting Services"
        description="Leverage Abdamin International Limited's expert consulting services - Transforming businesses with strategic insights and actionable solutions"
        keywords={[
          "consulting",
          "business strategy",
          "expert advice",
          "Abdamin",
          "organizational development",
          "industry expertise",
        ]}
        ogUrl="https://www.abdamin.com/services/consults"
      />
      <ServicePage
        title={consults.title}
        heroImage={consults.heroImage}
        sections={consults.sections}
        heroClassName="bg-center"
      />
    </>
  );
};

export default Consults;
