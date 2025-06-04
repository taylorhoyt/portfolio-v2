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
      className={`bg-secondary-background text-primary-text flex w-full justify-between px-8 py-4 ${className}`}
    >
      {children}
    </header>
  );
};

export default HeaderSection;
