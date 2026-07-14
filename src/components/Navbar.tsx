import React, { useState } from "react";
import { navLinks } from "../data/navigation";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "../utils/hooks";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 50;

  const scrollToSection = (path: string) => {
    const element = document.querySelector(path);

    if (element) {
      // Adjust this if your navbar height changes
      const offset = window.innerWidth < 768 ? 72 : 88;

      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black md:bg-black/95 backdrop-blur-lg shadow-xl py-3 border-b border-[#ff6f20]/30"
          : "bg-black py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="text-left text-3xl md:text-4xl font-black tracking-widest relative group"
        >
          <span className="text-[#ff6f20] font-archivo tracking-tight text-2xl md:text-3xl">
            AmjiFolio
          </span>

          <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-[#ff6f20] to-[#ff9a3c] transition-all duration-500 group-hover:w-full"></span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.path)}
              className="relative text-base font-semibold tracking-wide text-[#ff6f20] group transition duration-300"
            >
              {link.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff6f20] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-[#ff6f20]/40 text-[#ff6f20] hover:bg-[#ff6f20]/10 transition duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-1/2 bg-black shadow-2xl z-[60] transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#ff6f20] border border-[#ff6f20]/40 p-2 rounded-md hover:bg-[#ff6f20]/10 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col px-8 mt-4">
          {navLinks.map((link, index) => (
            <div key={link.id}>
              <button
                onClick={() => scrollToSection(link.path)}
                className="block w-full text-left py-5 text-xl font-semibold text-[#ff6f20] hover:translate-x-2 transition-all duration-300"
              >
                {link.title}
              </button>

              {index !== navLinks.length - 1 && (
                <div className="w-full h-[1px] bg-[#ff6f20]/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;