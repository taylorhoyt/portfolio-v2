import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={`flex h-screen flex-col overflow-hidden`}>
      <header className="w-full p-4 text-center">header</header>
      <main className="bg-primary-background flex-1 items-center overflow-y-scroll py-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
