import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-50'}`}></div>
      </div>
      
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex space-x-3 mt-auto">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;