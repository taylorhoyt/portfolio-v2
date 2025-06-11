import React from "react";
import ThemeToggleButton from "../buttons/ThemeToggleButton";
import MenuButton from "@/components/buttons/MenuButton";
import Link from "next/link";

const HeaderContents = () => {
  return (
    <>
      <div className="flex gap-4">
        <MenuButton />
        <div className="my-auto flex h-fit">
          <Link href="/" rel="noopener noreferrer">
            <h1 className="text-primary-text text-3xl leading-none font-bold">
              Taylor Hoyt
            </h1>
          </Link>
        </div>
      </div>
      <ThemeToggleButton />
    </>
  );
};

export default HeaderContents;
