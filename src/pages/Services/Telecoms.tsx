import React from "react";
import SEO from "../../components/layout/SEO";
import ServicePage from "./ServicePage";
import { serviceData } from "../../utils/serviceData";

const Telecoms: React.FC = () => {
  const { telecoms } = serviceData;

  return (
    <>
      <SEO
        title="Telecoms Services"
        description="Explore Abdamin International Limited's cutting-edge telecom solutions - Connecting Nigeria with advanced communication technology"
        keywords={[
          "telecoms",
          "communications",
          "IT hardware",
          "IT software",
          "Abdamin",
          "GSM operators",
        ]}
        ogUrl="https://www.abdamin.com/services/telecoms"
      />
      <ServicePage
        title={telecoms.title}
        heroImage={telecoms.heroImage}
        sections={telecoms.sections}
      />
    </>
  );
};

export default Telecoms;
