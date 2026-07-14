import React, { useEffect, useRef } from "react";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import AmjidImage from "../assets/Amjid_cp.jpg";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      heroRef.current.style.setProperty("--x-offset", `${x * 20}px`);
      heroRef.current.style.setProperty("--y-offset", `${y * 20}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="w-full bg-black text-white pt-16 pb-10 flex justify-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="relative w-44 h-44 md:w-52 md:h-52 mb-6">
          <div
            className="relative w-full h-full rounded-full overflow-hidden shadow-lg"
            style={{
              transform:
                "translate(calc(var(--x-offset, 0) * -0.5), calc(var(--y-offset, 0) * -0.5))",
            }}
          >
            <img
              src={AmjidImage}
              alt="Mohammed Amjid"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-2">
          Mohammed Amjid
        </h2>

        {/* Role */}
        <p className="text-base font-semibold text-gray-400 mb-6">
          Web Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/mohammedamjid"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff6f20] text-[#ff6f20] transition-transform duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="#about"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff6f20] text-[#ff6f20] transition-transform duration-300 hover:scale-110"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=mohammedamjid1217@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff6f20] text-[#ff6f20] transition-transform duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;