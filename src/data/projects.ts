import { ProjectConfig } from "@/types/project";

/**
 * Project configurations for the portfolio
 *
 * Each project should have:
 * - title: Project name
 * - description: Short description of the project
 * - imagesFolder: Directory path where project images are stored
 * - imageFiles: Array of image filenames in the folder
 * - buttons: Array of button configurations for links (optional)
 */
export const projectConfigs: ProjectConfig[] = [
  {
    title: "Persona AI Portal",
    description:
      "Delivered end-to-end front end for the Persona AI Portal using Next.js and Tailwind, handling complex UI logic\n" +
      "including persona selection, wallet authentication flow, AI integration, and dynamic chat interfaces",
    imagesFolder: "/project-images/portal",
    imageFiles: ["chat.webp", "edit-chat-history.webp", "select-avatar.webp"],
    buttons: [
      {
        type: "external",
        label: "Live",
        url: "https://dapp.kondux.io/ai-portal",
      },
      {
        type: "youtube",
        label: "",
        url: "https://youtu.be/AxoxBu4IUzU",
      },
    ],
  },
  {
    title: "Muscle Contraction Monitoring System",
    description:
      "Collaborated with 4 colleagues and 4 biomedical engineers to build and design " +
      "a data-sensitive monitoring system with secure storage, and a " +
      "companion app to allow users to login and " +
      "securely access monitoring data.",
    imagesFolder: "/project-images/mcms",
    imageFiles: ["1.webp", "2.webp", "4.webp", "5.webp", "6.webp", "7.webp"],
    buttons: [
      {
        type: "external",
        label: "View Project Links",
        url: "https://mcms.taylorhoyt.com",
      },
    ],
  },
  {
    title: "Solar-Powered Lawnmower",
    description:
      "Collaborated with 3 colleagues to design and build a solar-powered, emission-free lawn mower over the course of four months.",
    imagesFolder: "/project-images/splm",
    imageFiles: [
      "complete.webp",
      "closeup.webp",
      "cloudy-charge.webp",
      "under-hood.webp",
      "build.webp",
      "cad.webp",
      "cad-drawing.webp",
    ],
    buttons: [
      {
        type: "youtube",
        label: "",
        url: "https://www.youtube.com/watch?v=v86RlL8Y8OQ",
      },
      {
        type: "external",
        label: "Presentation",
        url: "https://empactsstudentprojects.wordpress.com/wp-content/uploads/2022/08/solar-lawnmower-project-taylor-hoyta-2.pdf",
      },
      {
        type: "external",
        label: "Design Doc",
        url: "https://empactsstudentprojects.wordpress.com/wp-content/uploads/2022/08/solar_lawnmower_design_document.pdf",
      },
    ],
  },
];
