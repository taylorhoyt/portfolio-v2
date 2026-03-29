import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import BasicButton from "./BasicButton";
import SideMenu from "../menus/SideMenu";

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <BasicButton
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary-text bg-transparent"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </BasicButton>
      <SideMenu
        id="mobile-nav-menu"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default MenuButton;
