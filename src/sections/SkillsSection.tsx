import { skills } from "../data/skills";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiAmazon,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiApachenetbeanside,
  SiGithub,
} from "react-icons/si";

import { FileSpreadsheet, Wrench, MonitorSpeakerIcon } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  html: <SiHtml5 className="w-5 h-5 text-orange-500" />,
  css: <SiCss3 className="w-5 h-5 text-blue-500" />,
  javascript: <SiJavascript className="w-5 h-5 text-yellow-500" />,
  react: <SiReact className="w-5 h-5 text-blue-400" />,
  bootstrap: <SiBootstrap className="w-5 h-5 text-purple-500" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-cyan-400" />,
  node: <SiNodedotjs className="w-5 h-5 text-green-500" />,
  express: <SiExpress className="w-5 h-5 text-gray-300" />,
  api: <SiApachenetbeanside className="w-5 h-5 text-blue-400" />,
  mongo: <SiMongodb className="w-5 h-5 text-green-500" />,
  sql: <SiMysql className="w-5 h-5 text-blue-500" />,
  aws: <SiAmazon className="w-5 h-5 text-orange-400" />,
  git: <SiGithub className="w-5 h-5 text-white" />,
  figma: <SiFigma className="w-5 h-5 text-pink-500" />,
  vs: <MonitorSpeakerIcon className="w-5 h-5 text-blue-400" />,
  ms: <FileSpreadsheet className="w-5 h-5 text-green-500" />,
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  database: "Database & Cloud",
  tools: "Development Tools",
};

const SkillsSection = () => {
  const categories = ["frontend", "backend", "database", "tools"];

  return (
    <section
      id="skills"
      className="relative pt-8 pb-8 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>

          <p className="text-gray-400 mt-3">
            Technologies I Use
          </p>

          <div className="w-16 h-[2px] bg-[#ff6f20] mx-auto mt-4"></div>
        </div>

        {categories.map((category, index) => {
          const filteredSkills = skills.filter(
            (skill) => skill.category === category
          );

          if (!filteredSkills.length) return null;

          return (
            <div key={index} className="mt-12">

              {/* Category */}
              <h3 className="text-center text-[#ff6f20] border border-[#ff6f20] w-fit mx-auto px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-8">
                {categoryLabels[category]}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group bg-black border-2 border-gray-700 rounded-xl p-5 flex items-start space-x-4
                    transition-all duration-300 transform cursor-pointer
                    hover:border-[#ff6f20] hover:-translate-y-2 hover:scale-[1.03]
                    hover:shadow-[0_0_25px_#ff6f20]
                    active:scale-[0.97]"
                  >

                    {/* Icon */}
                    <div className="p-3 bg-gray-900 rounded-lg transition-transform duration-300 group-hover:scale-125">
                      {iconMap[skill.icon] || <Wrench />}
                    </div>

                    {/* Skill Text */}
                    <div>
                      <h4 className="text-md font-semibold text-white">
                        {skill.name}
                      </h4>

                      {skill.description && (
                        <p className="text-sm text-gray-400 mt-1">
                          {skill.description}
                        </p>
                      )}
                    </div>

                  </div>
                ))}

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;