import React from "react";
import SEO from "../../components/layout/SEO";
import Hero from "../../components/layout/Hero";
import { serviceData } from "../../utils/serviceData";

// Importing Carousel components for product showcase
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// GauniWater component definition
const GauniWater: React.FC = () => {
  // Extracting gauniWater data from serviceData
  const { gauniWater } = serviceData;

  return (
    <>
      {/* SEO optimization for the page */}
      <SEO
        title="Gauni Water - Pure Refreshment"
        description="Experience the purity of Gauni Water by Abdamin International Limited - Nigeria's premium table water for health and refreshment"
        keywords={[
          "Gauni Water",
          "table water",
          "pure water",
          "clean water",
          "drinking water",
          "pure refreshment",
          "health",
          "Abdamin",
          "bottled water",
          "healthy hydration",
        ]}
        ogUrl="https://www.abdamin.com/services/gauni-water"
      />
      {/* Hero section with background image and title */}
      <Hero
        titleClassName="mt-[85px] md:mt-[110px]"
        backgroundImage={gauniWater.heroImage}
        linkClassName="btn-hidden-all"
        className="h-[540px] bg-cover md:h-[650px]"
      />
      {/* Main content section */}
      <section className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:gap-8 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-base md:text-4xl">
          {gauniWater.title}
        </h1>

        {/* Mapping through sections to display content */}
        {gauniWater.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
              {section.title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg">{section.content}</p>
          </div>
        ))}

        {/* Products showcase section */}
        <div className="mt-12">
          <h2 className="mb-8 text-xl font-semibold text-primary-base md:text-2xl">
            Our Products
          </h2>
          <Carousel className="mx-auto w-full max-w-6xl">
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Mapping through products to display in the carousel */}
              {gauniWater.products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 md:pl-4">
                  <div className="group relative overflow-hidden lg:rounded-xl">
                    <img
                      src={product.image}
                      alt={`${product.name} - Gauni Water Product`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-center">
                        <h3 className="text-2xl font-bold text-white">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm text-white">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-14 flex justify-between pb-0">
              {/* Carousel navigation controls */}
              <CarouselPrevious className="relative inset-auto mx-2 h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
              <CarouselNext className="relative inset-auto mx-2 h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default GauniWater;
