import React from "react";
import { NavLink } from "react-router-dom";
import HeadingSection from "./HeadingSection";
import StatsAndFeatures from "./StatsAndFeatures";

const StatisticsSection: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
      <HeadingSection
        title="company"
        subtitle="Our Legacy of Excellence"
        description="Abdamin International Limited is a limited liability company fully registered and incorporated in Nigeria with its head office in Yola, Adamawa State with several business offices in Abuja, kaduna and Lagos."
      />
      <StatsAndFeatures />
      <NavLink className="btn btn-primary mx-auto w-fit" to="/about-us">
        About Us
      </NavLink>
    </section>
  );
};

export default StatisticsSection;
