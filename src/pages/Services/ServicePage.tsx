import React from "react";
import Hero from "../../components/layout/Hero";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { cn } from "@/lib/utils";

// Define the structure for each service section
interface ServiceSection {
  title: string;
  content: string | JSX.Element;
}

// Define the props for the ServicePage component
interface ServicePageProps {
  title: string;
  heroImage: string;
  heroClassName?: string;
  sections: ServiceSection[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  heroImage,
  heroClassName,
  sections,
}) => {
  return (
    <>
      {/* Hero section with dynamic title and background image */}
      <Hero
        titleClassName="mt-[85px] md:mt-[110px] hidden"
        backgroundImage={heroImage}
        linkClassName="btn-hidden-all"
        className={cn("h-[540px] bg-cover md:h-[650px]", heroClassName)}
      />

      {/* Main content section */}
      <AnimatedSection>
        <section className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:gap-8 lg:px-8">
          <h1 className="text-3xl font-bold text-primary-base md:text-4xl">
            {title}
          </h1>

          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                {section.title}
              </h2>
              {typeof section.content === "string" ? (
                <p className="whitespace-pre-wrap text-sm md:text-base lg:text-lg">
                  {section.content}
                </p>
              ) : (
                section.content
              )}
            </div>
          ))}
        </section>
      </AnimatedSection>
    </>
  );
};

export default ServicePage;
