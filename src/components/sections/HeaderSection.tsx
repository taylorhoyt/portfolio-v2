import React, { FC } from "react";

interface HeaderSectionProps {
  children: React.ReactNode;
  className?: string;
}

const HeaderSection: FC<HeaderSectionProps> = ({
  children,
  className = "",
}: HeaderSectionProps) => {
  return (
    <header
      className={`bg-secondary-background text-primary-text flex h-[10vh] max-h-[70px] min-h-[60px] w-full justify-between px-1 shadow-xl lg:px-8 ${className}`}
    >
      {children}
    </header>
  );
};

export default HeaderSection;
