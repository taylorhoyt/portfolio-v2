import React from "react";
import Link from "next/link";
import { Home, User, Briefcase, FileText } from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: <Home size={24} />, label: "Home", href: "/#home" },
    { icon: <User size={24} />, label: "About", href: "/#timeline" },
    { icon: <Briefcase size={24} />, label: "Projects", href: "/#projects" },
    {
      icon: <FileText size={24} />,
      label: "Resume",
      href: "/resume/resume.pdf",
    },
  ];

  return (
    <div
      className={`fixed top-[76px] left-4 z-50 w-[260px] transform shadow transition-all duration-300 ease-in-out lg:left-11 ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <div className="bg-secondary-background rounded-lg shadow-xl">
        <nav className="p-2">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.label === "Resume" ? "_blank" : ""}
                  className="text-primary-text hover:bg-primary-background flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
                  onClick={() => {
                    onClose();
                  }}
                >
                  {item.icon}
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
