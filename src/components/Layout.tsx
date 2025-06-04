import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={`flex h-screen flex-col overflow-hidden`}>
      <header className="w-full border-b border-orange-400 p-4 text-center"></header>
      <main className="flex-1 items-center overflow-y-scroll">{children}</main>
      <footer className="w-full border-t border-orange-400 p-4 text-center"></footer>
    </div>
  );
};

export default Layout;
