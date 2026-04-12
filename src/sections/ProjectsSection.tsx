import React, { useRef } from "react";
import { useIsVisible } from "../utils/hooks";
import projects from "../data/projects";

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector(".card-inner") as HTMLElement;
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const w = rect.width;

    if (x < w / 2) {
      card.style.transform = "rotateY(-180deg)";
    } else {
      card.style.transform = "rotateY(180deg)";
    }
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector(".card-inner") as HTMLElement;
    card.style.transform = "rotateY(0deg)";
  };

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

        {/* Grid */}
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

              <div
                className="relative w-full h-[360px]"
                style={{ perspective: "1000px" }}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >

                <div
                  className="card-inner relative w-full h-full transition-transform duration-500 ease-out transform-gpu will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* FRONT */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden border border-gray-700"
                    style={{ backfaceVisibility: "hidden" }}
                  >

                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60 flex items-end justify-center pb-8">

                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>

                    </div>

                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 rounded-xl bg-black border border-[#ff6f20] flex items-center justify-center"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >

                    <div className="text-center px-6">

                      <h3 className="text-xl font-semibold mb-4">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6">
                        {project.description}
                      </p>

                      <button
                        onClick={() => window.open(project.demo, "_blank")}
                        className="border border-[#ff6f20] px-6 py-2 rounded-md text-sm hover:bg-[#ff6f20] transition"
                      >
                        Live Demo
                      </button>

                    </div>

                  </div>

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