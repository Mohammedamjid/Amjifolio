import React, { useRef } from "react";
import { useIsVisible } from "../utils/hooks";
import AmjiFL from "../assets/Amji_Logo.png";
import labmentixlog from "../assets/labmentix logo.jpeg";

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const experiences = [
    {
      company: "Freelancer",
      logo: AmjiFL,
      role: "Full Stack Developer",
      period: "Sep 2025 – Present",
      description:
        "Designing and developing modern, responsive, and scalable web applications tailored to client requirements. Building full-stack solutions using the MERN stack, developing secure REST APIs, integrating databases, and optimizing application performance to deliver seamless user experiences."
    },
    {
      company: "Labmentix IT Services",
      logo: labmentixlog,
      role: "Web Developer Intern",
      period: "May 2025 – Aug 2025",
      description:
        "Developed responsive and user-friendly web interfaces, integrated RESTful APIs, and collaborated on building functional web applications. Focused on improving UI/UX, optimizing frontend performance, and ensuring seamless interaction between frontend components and backend services."
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="pt-8 pb-8 bg-black"
    >
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>

          <div className="w-16 h-[2px] bg-[#ff6f20] mx-auto mt-3"></div>

          <p className="text-gray-400 mt-3">
            My professional journey
          </p>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="max-w-4xl mx-auto space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:items-start gap-5 transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >

              {/* COMPANY LOGO */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center border border-gray-800 rounded-lg">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div>

                <h3 className="text-lg font-semibold text-white">
                  {exp.company}
                </h3>

                <p className="text-sm text-gray-300">
                  {exp.role}
                </p>

                <p className="text-[#ff6f20] text-sm mt-1">
                  {exp.period}
                </p>

                <p className="text-gray-400 mt-2 leading-relaxed text-sm">
                  {exp.description}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;