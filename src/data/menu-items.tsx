import { MenuItem } from "@/types/menu";
import { Home, User, Briefcase, FileText } from "lucide-react";

export const menuItems: MenuItem[] = [
  { icon: <Home size={24} />, label: "Home", href: "/#home" },
  {
    icon: <User size={24} />,
    label: "Professional Timeline",
    href: "/#timeline",
  },
  { icon: <Briefcase size={24} />, label: "Projects", href: "/#projects" },
  {
    icon: <FileText size={24} />,
    label: "Resume",
    href: "/resume/resume.pdf",
  },
];
