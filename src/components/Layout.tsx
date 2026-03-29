import React, { FC } from "react";
import HeaderSection from "@/components/sections/HeaderSection";
import HeaderContents from "@/components/contents/HeaderContents";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={`flex h-screen flex-col overflow-hidden`}>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>
      <HeaderSection>
        <HeaderContents />
      </HeaderSection>
      <main id="main-content" className="bg-primary-background flex-1 items-center overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default Layout;
