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
    imageFiles: ["chat.png", "edit-chat-history.png", "select-avatar.png"],
    buttons: [
      {
        type: "external",
        label: "Live",
        url: "https://dapp.kondux.io/ai-portal",
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
    imageFiles: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
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
      "Collaborated with a team of four to design and build a solar-powered, emission-free lawn mower over the course of four months.",
    imagesFolder: "/project-images",
    imageFiles: ["lawnmower.webp"],
    buttons: [],
  },
];
