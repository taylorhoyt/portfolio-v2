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
    <section id="projects">
      <div className="flex flex-row justify-center py-12">
        <h1 className="text-primary-text text-center text-6xl font-bold">
          Projects
        </h1>
      </div>
      <div
        className={`grid h-fit w-[1200px] max-w-[90vw] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ProjectSection;
