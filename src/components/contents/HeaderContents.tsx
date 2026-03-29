import React from "react";
import ThemeToggleButton from "../buttons/ThemeToggleButton";
import MenuButton from "@/components/buttons/MenuButton";
import Link from "next/link";
import { menuItems } from "@/data/menu-items";

const HeaderContents = () => {
  return (
    <>
      <div className="flex h-full max-w-3/4 gap-4">
        <div className="my-auto flex h-fit lg:hidden">
          <MenuButton menuItems={menuItems} />
        </div>
        <div className="my-auto flex h-fit">
          <Link href="/" rel="noopener noreferrer">
            <h1 className="text-primary-text pr-2.5 pb-1 text-center text-3xl font-bold text-nowrap">
              Taylor Hoyt
            </h1>
          </Link>
        </div>
        <div className="my-auto hidden w-full justify-between gap-6 lg:flex">
          {menuItems.map((menuItem) => (
            <Link
              href={menuItem.href}
              className="hover:text-expressive-blue text-sm tracking-tight underline-offset-4 hover:underline"
            >
              {menuItem.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="my-auto flex h-fit">
        <ThemeToggleButton />
      </div>
    </>
  );
};

export default HeaderContents;
