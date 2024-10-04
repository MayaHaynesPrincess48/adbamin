import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../utils/projectData";
import Hero from "../../components/layout/Hero";
import SEO from "../../components/layout/SEO";
import ProjectDetailsSection from "../../components/projects/ProjectDetailsSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import ProjectNotFound from "../../components/projects/ProjectNotFound";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <>
      <SEO
        title={project.seoTitle}
        description={project.seoDescription}
        keywords={[
          project.service,
          project.location,
          "Abdamin",
          "construction project",
        ]}
        ogUrl={`https://www.abdamin.com/portfolio/${project.id}`}
      />
      <Hero
        backgroundImage={project.mainImage || ""}
        className="h-[540px] bg-cover md:h-[650px]"
        titleClassName="mt-[85px] md:mt-[110px] hidden"
        linkClassName="btn-hidden-all"
      />
      {/* <section className="bg-gradient-to-b from-gray-100 to-white py-16"> */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <ProjectDetailsSection project={project} />
        </div>
      </div>
      {/* </section> */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary-base md:mb-10 md:text-3xl">
            Project Gallery
          </h2>
          <Carousel className="mx-auto w-full max-w-6xl">
            <CarouselContent className="-ml-2 md:-ml-4">
              {project.additionalImages.length > 0 ? (
                project.additionalImages.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:basis-1/2 md:pl-4"
                  >
                    <div className="group relative aspect-video overflow-hidden rounded-xl">
                      <img
                        src={img}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-center">
                          <p className="mt-2 text-sm text-white">
                            Image {index + 1}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <CarouselItem className="pl-2 md:basis-1/2 md:pl-4">
                  <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gray-200">
                    <span className="text-lg text-gray-400">
                      No images available
                    </span>
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <div className="mt-14 flex justify-between pb-0 md:justify-center">
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

export default ProjectPage;
