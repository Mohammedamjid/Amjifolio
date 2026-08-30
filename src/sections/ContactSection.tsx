import React, { useRef } from "react";
import { useIsVisible } from "../utils/hooks";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail} from "lucide-react";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#ff6f20]" />,
      title: "Location",
      details: "Bangalore, IND",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#ff6f20]" />,
      title: "Email",
      details: "mohammedamjid1217@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#ff6f20]" />,
      title: "Phone",
      details: "+91 94884 65646",
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-8 pb-1 bg-black text-white relative overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,111,32,0.06),_transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADING (same style as Projects) */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h2>

          <div className="w-16 h-[2px] bg-[#ff6f20] mx-auto mt-4"></div>

          <p className="text-gray-400 mt-4">
            Let's talk about your project
          </p>

        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* CONTACT INFO */}
          <div
            className={`lg:w-1/3 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-black border border-gray-700 rounded-2xl p-8 h-full">

              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">

                    <div className="p-3 border border-gray-700 rounded-lg">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="text-gray-400 text-sm">
                        {item.details}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

    

            </div>
          </div>

          {/* CONTACT FORM */}
          <div
            className={`lg:w-2/3 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-black border border-gray-700 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>

              <ContactForm />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;