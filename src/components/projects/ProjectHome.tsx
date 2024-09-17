import HeadingSection from "../common/HeadingSection";
import ProjectCard from "./ProjectCard";
import { projects } from "../../utils/projectData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Link } from "react-router-dom";

const ProjectHome = () => {
  return (
    <section className="mx-auto flex max-w-8xl flex-col gap-16 px-4 pt-16 sm:px-6 lg:px-8">
      <HeadingSection
        title="Projects"
        subtitle="Our Remarkable Projects Portfolio"
        description="Explore our extensive portfolio showcasing the breadth of our expertise. From iconic structures to sustainable solutions, all meticulously crafted to perfection."
      />
      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-7xl">
          <CarouselContent className="p-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.title}
                className="basis-full pl-4 last:pr-4 sm:basis-1/2 xl:mx-auto xl:basis-1/3"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mb-[-40px] mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className="relative inset-auto mx-2 h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
            <Link to="/portfolio" className="btn-primary btn mb-12 text-nowrap">
              View All
            </Link>
            <CarouselNext className="relative inset-auto mx-2 h-[52px] w-[52px] border border-primary-base transition-colors duration-200 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectHome;
