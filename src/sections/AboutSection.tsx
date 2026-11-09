import React, { useRef } from "react";
import { useIsVisible } from "../utils/hooks";
import { Code, Server, Layers } from "lucide-react";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const services = [
    {
      icon: <Code className="w-8 h-8 text-[#ff6f20]" />,
      title: "Web Development",
      description: "Modern, fast and scalable web applications.",
    },
    {
      icon: <Server className="w-8 h-8 text-[#ff6f20]" />,
      title: "API Integration",
      description: "Seamless third-party service integration.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#ff6f20]" />,
      title: "Responsive Design",
      description: "Perfect layouts across all devices.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-2 pb-12 md:pb-16 bg-black text-white overflow-hidden"
    >
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,111,32,0.06),_transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ABOUT HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-[#ff6f20] mx-auto mt-3"></div>
        </div>

        {/* ABOUT DESCRIPTION */}
        <div className="max-w-3xl mx-auto text-center mb-12">

          <p className="text-gray-300 leading-relaxed  text-left">
            I'm a Freelance Web Developer passionate about creating modern, responsive, and high-performance websites that help businesses and individuals establish a strong online presence. I turn ideas into engaging digital experiences through clean design, efficient development, and user-focused solutions.
            I specialize in building custom websites and web applications using modern technologies and frameworks, focusing on performance, scalability, and seamless user experiences.
            Whether it's building a website from scratch or improving an existing one, I'm dedicated to delivering quality solutions that meet client needs and bring their ideas to life.
          </p>
  
        </div>

        {/* WHAT I DO */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What I Do
          </h2>
          <div className="w-16 h-[2px] bg-[#ff6f20] mx-auto mt-3"></div>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border border-[#ff6f20]/40 rounded-2xl p-6 text-center transition-all duration-700 transform hover:scale-105 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>

              <h4 className="text-lg font-semibold mb-2 text-white">
                {service.title}
              </h4>

              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;