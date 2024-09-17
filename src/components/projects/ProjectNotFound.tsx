/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";

const ProjectNotFound: React.FC = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary-10">
          <Search className="h-12 w-12 text-primary-base" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Project Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We couldn't find the project you're looking for. It might have been
          removed or doesn't exist.
        </p>
        <Link
          to="/portfolio"
          className="hover:bg-primary-dark inline-flex items-center rounded-full bg-primary-base px-6 py-3 text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default ProjectNotFound;
