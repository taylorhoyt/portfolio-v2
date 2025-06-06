import React from "react";
import ThemeToggleButton from "../buttons/ThemeToggleButton";
import MenuButton from "@/components/buttons/MenuButton";

const HeaderContents = () => {
  return (
    <>
      <div className="flex gap-4">
        <MenuButton />
        <div className="my-auto flex h-fit">
          <h1 className="text-bold text-primary-text text-2xl">Name</h1>
        </div>
      </div>
      <ThemeToggleButton />
    </>
  );
};

export default HeaderContents;
