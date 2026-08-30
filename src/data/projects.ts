import { Project } from "../types";

import aban from "../assets/aban.jpeg";
import hmh from "../assets/hmh.jpeg";
import mba from "../assets/mba.jpeg";
import pgt from "../assets/pgt.jpeg";

export const projects: Project[] = [
  {
    id: 1,
    title: "HMH Tech",
    description:
      "Developed an online learning platform providing structured courses, user-friendly navigation, and seamless content access. Implemented responsive design, interactive UI, and scalable architecture to enhance user engagement and deliver an efficient digital learning experience.",
    image: hmh,
    demo: "https://hmhtechhub.com/",
  },
  {
    id: 2,
    title: "MBA Bazaar",
    description:
      "Developed an online platform focused on MBA entrance exam preparation, offering structured study materials, mock tests, and exam-focused resources. Designed a responsive and intuitive interface to enhance user engagement and support efficient learning for competitive exam aspirants.",
    image: mba,
    demo: "https://mbabazaar.com/",
  },
  {
    id: 3,
    title: "Aban",
    description:
      "Designed and developed a responsive website for a construction company, showcasing projects, services, and company profile. Focused on clean UI, intuitive navigation, and performance optimization to establish a strong digital presence and effectively communicate business offerings.",
    image: aban,
    demo: "https://www.aban-is.com/",
  },
  {
    id: 4,
    title: "PGT",
    description:
      "Developed a professional website for an industrial trading company, highlighting instrumentation, automation solutions, and sector expertise. Designed a responsive and structured interface to effectively present services across oil & gas, water, power, and other industries, enhancing digital presence and client engagement.",
    image: pgt,
    demo: "https://www.pgt-me.com/",
  }
];

export default projects;