import React, { useRef, useState } from "react";
import { useIsVisible } from "../utils/hooks";
import { Plus, Minus } from "lucide-react";

const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openCert, setOpenCert] = useState<number | null>(null);

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Anna University",
      duration: "2020 - 2024",
      percentage: "80.5%",
      description:
        "Focused on web technologies, algorithms, and software engineering principles.",
    },
    {
      degree: "HSC - MPC",
      institution: "Tamilnadu State Board",
      duration: "2018 - 2020",
      percentage: "70%",
      description: "Mathematics, Physics & Chemistry specialization.",
    },
    {
      degree: "SSLC",
      institution: "Tamilnadu State Board",
      duration: "2017 - 2018",
      percentage: "81%",
      description: "Strong foundation in core academic subjects.",
    },
  ];

  const certifications = [
    {
      name: "Python for Data Science",
      issuer: "IIT Madras - NPTEL",
      description: "Data analysis & visualization techniques.",
    },
    {
      name: "Software Testing",
      issuer: "IIT Kharagpur - NPTEL",
      description: "Test design, debugging & QA principles.",
    },
    {
      name: "Full Stack with Python",
      issuer: "Guvi",
      description: "Built full-stack apps with React & APIs.",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "AWS",
      description: "Cloud computing & AWS fundamentals.",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative pt-8 pb-8 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,111,32,0.06),_transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>
          <div className="w-16 h-[2px] bg-[#ff6f20] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Academics
            </h3>

            {education.map((edu, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border border-[#ff6f20]/40 rounded-xl mb-6 transition-all duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* CARD HEADER */}
                  <div
                    className="flex justify-between items-center p-5 cursor-pointer"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <h4 className="font-semibold text-white">
                      {edu.degree}
                    </h4>

                    <div className="text-[#ff6f20]">
                      {isOpen ? <Minus /> : <Plus />}
                    </div>
                  </div>

                  {/* DETAILS */}
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-gray-400">

                      <p className="text-[#ff6f20]">
                        {edu.institution}
                      </p>

                      <p>
                        {edu.duration} | {edu.percentage}
                      </p>

                      <p className="mt-2 text-gray-500">
                        {edu.description}
                      </p>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Professional Certifications
            </h3>

            {certifications.map((cert, index) => {
              const isOpen = openCert === index;

              return (
                <div
                  key={index}
                  className="border border-[#ff6f20]/40 rounded-xl mb-6 transition-all duration-500"
                >
                  {/* CARD HEADER */}
                  <div
                    className="flex justify-between items-center p-5 cursor-pointer"
                    onClick={() =>
                      setOpenCert(isOpen ? null : index)
                    }
                  >
                    <h4 className="font-semibold text-white">
                      {cert.name}
                    </h4>

                    <div className="text-[#ff6f20]">
                      {isOpen ? <Minus /> : <Plus />}
                    </div>
                  </div>

                  {/* DETAILS */}
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-gray-400">

                      <p className="text-[#ff6f20]">
                        {cert.issuer}
                      </p>

                      <p className="mt-2 text-gray-500">
                        {cert.description}
                      </p>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;