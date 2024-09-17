import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../../utils/projectData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex h-[650px] w-full max-w-md flex-col items-center gap-6 overflow-hidden rounded-xl bg-white shadow-lg">
      <figure className="h-[300px] w-full overflow-hidden">
        {project.mainImage ? (
          <img
            src={project.mainImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-lg text-gray-400">No image available</span>
          </div>
        )}
      </figure>
      <div className="flex w-full flex-col gap-6 p-6">
        <header className="flex flex-col gap-3">
          <h2 className="line-clamp-2 text-lg font-bold text-neutral-base md:text-xl">
            {project.title}
          </h2>
          <p className="line-clamp-3 text-sm font-medium text-neutral-50 md:text-base">
            {project.description}
          </p>
        </header>
        <dl className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <dt className="text-sm font-medium text-neutral-base md:text-base">
              Location:
            </dt>
            <dd className="text-sm font-bold text-neutral-base md:text-base">
              {project.location}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm font-medium text-neutral-base md:text-base">
              Date:
            </dt>
            <dd className="text-sm font-bold text-neutral-base md:text-base">
              {project.date}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm font-medium text-neutral-base md:text-base">
              Service:
            </dt>
            <dd className="text-sm font-bold text-neutral-base md:text-base">
              {project.service}
            </dd>
          </div>
        </dl>
        <footer>
          <Link
            to={`/portfolio/${project.id}`}
            className="flex items-center justify-center rounded-full border border-solid border-primary-base p-2 text-center text-base font-semibold text-primary-base transition-all duration-300 hover:bg-primary-10/50 md:p-3"
          >
            Read more
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
