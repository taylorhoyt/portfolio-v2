import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import BasicButton from "./BasicButton";

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BasicButton
      onClick={() => setIsOpen(!isOpen)}
      className="bg-secondary-background text-primary-text"
      tooltipLabel={`${isOpen ? "Close menu" : "Open menu"}`}
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </BasicButton>
  );
};

export default MenuButton;
