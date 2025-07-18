import React, { FC, ReactNode } from "react";

interface ProjectSectionProps {
  className?: string;
  children: ReactNode;
}

const ContactSection: FC<ProjectSectionProps> = ({
  className = "",
  children,
}: ProjectSectionProps) => {
  return (
    <section id="contact">
      <div className="flex flex-row justify-center py-12">
        <h1 className="text-primary-text text-center text-6xl font-bold">
          Contact Me!
        </h1>
      </div>
      <div className={`${className}`}>{children}</div>
    </section>
  );
};

export default ContactSection;
