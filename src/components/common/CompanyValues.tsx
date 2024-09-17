import React from "react";
import HeadingSection from "./HeadingSection";
import clsx from "clsx";
import ValueCard from "./ValueCard";
import { valueData, Value } from "../../utils/companyValuesData";
import AnimatedSection from "../layout/AnimatedSection";

const CompanyValues: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-8xl flex-col gap-16 px-4 pt-16 sm:px-6 lg:px-8">
      <HeadingSection
        title="Values"
        subtitle="Why Choose Us"
        description="At Abdamin, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here’s why you choose us:"
      />
      <AnimatedSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valueData.map((value: Value) => (
            <ValueCard
              key={value.title}
              iconSrc={value.iconSrc}
              title={value.title}
              description={value.description}
              className={clsx({
                "md:col-span-2 md:col-start-1 md:w-[50%] md:translate-x-[50%] lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:w-full":
                  value.title === "Innovation",
                "lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:translate-x-[-50%]":
                  value.title === "Customer Focus",
              })}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CompanyValues;
