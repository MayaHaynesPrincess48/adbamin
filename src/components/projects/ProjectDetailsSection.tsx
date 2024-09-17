import React from "react";
import { Project } from "../../utils/projectData";
import { Calendar, MapPin, Briefcase, Users } from "lucide-react";

interface ProjectDetailsSectionProps {
  project: Project;
}

const ProjectDetailsSection: React.FC<ProjectDetailsSectionProps> = ({
  project,
}) => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
      <h1 className="mb-8 text-2xl font-bold text-primary-base md:text-4xl">
        {project.title}
      </h1>

      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <DetailItem
          icon={<MapPin />}
          label="Location"
          value={project.location}
        />
        <DetailItem icon={<Calendar />} label="Date" value={project.date} />
        <DetailItem
          icon={<Briefcase />}
          label="Service"
          value={project.service}
        />
        <DetailItem icon={<Users />} label="Client" value={project.client} />
      </div>

      <div className="space-y-10">
        <Section title="Project Overview" content={project.description} />
        <Section title="Scope of Work" content={project.scope} />
        <Section
          title="Key Features"
          content={
            <ul className="list-disc space-y-2 pl-5">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          }
        />
        <Section title="Project Impact" content={project.outcome} />
      </div>
    </div>
  );
};

const DetailItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="text-primary-base">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const Section: React.FC<{ title: string; content: React.ReactNode }> = ({
  title,
  content,
}) => (
  <div>
    <h2 className="mb-4 text-2xl font-bold text-primary-base">{title}</h2>
    <div className="text-gray-700">{content}</div>
  </div>
);

export default ProjectDetailsSection;
