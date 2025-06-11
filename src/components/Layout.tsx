import React, { FC } from "react";
import HeaderSection from "@/components/sections/HeaderSection";
import HeaderContents from "@/components/contents/HeaderContents";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={`flex h-screen flex-col overflow-hidden`}>
      <HeaderSection>
        <HeaderContents />
      </HeaderSection>
      <main className="bg-primary-background flex-1 items-center overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default Layout;
