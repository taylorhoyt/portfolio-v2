import React, { FC } from "react";
import HeaderSection from "@/components/sections/HeaderSection";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={`flex h-screen flex-col overflow-hidden`}>
      <HeaderSection>
        <div>hamburger | name</div>
        <div>sun</div>
      </HeaderSection>
      <main className="bg-primary-background flex-1 items-center overflow-y-scroll py-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
