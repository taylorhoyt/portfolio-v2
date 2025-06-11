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
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </BasicButton>
      <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MenuButton;
