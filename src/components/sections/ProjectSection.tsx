import React, { FC, ReactNode } from "react";

interface ProjectSectionProps {
  className?: string;
  children: ReactNode;
}

const ProjectSection: FC<ProjectSectionProps> = ({
  className = "",
  children,
}: ProjectSectionProps) => {
  return (
    <section>
      <div
        className={`mx-auto grid h-fit w-[1200px] max-w-[75vw] grid-cols-2 gap-4 lg:grid-cols-3 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ProjectSection;
