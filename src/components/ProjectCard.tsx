import React from "react";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Demo Link */}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#ff6f20] hover:text-white"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#ff6f20] dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;