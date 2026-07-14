import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useIsVisible } from "../utils/hooks";
import projects from "../data/projects";

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pt-8 pb-8 bg-black text-white relative"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
          <div className="w-16 h-[2px] bg-[#ff6f20] mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4">
            Check out some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative h-[360px] rounded-xl overflow-hidden border border-gray-700 group">

                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/65 pointer-events-none"></div>

                {/* Demo Link */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute z-20 top-4 right-4 w-11 h-11 rounded-full bg-[#ff6f20] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#ff6f20]"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={20} />
                </a>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;