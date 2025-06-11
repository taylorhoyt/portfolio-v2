import React from "react";
import ThemeToggleButton from "../buttons/ThemeToggleButton";
import MenuButton from "@/components/buttons/MenuButton";
import Link from "next/link";

const HeaderContents = () => {
  return (
    <>
      <div className="flex h-full gap-4">
        <div className="my-auto flex h-fit">
          <MenuButton />
        </div>
        <div className="my-auto flex h-fit">
          <Link href="/" rel="noopener noreferrer">
            <h1 className="text-primary-text pb-1 text-center text-3xl font-bold">
              Taylor Hoyt
            </h1>
          </Link>
        </div>
      </div>
      <div className="my-auto flex h-fit">
        <ThemeToggleButton />
      </div>
    </>
  );
};

export default HeaderContents;
