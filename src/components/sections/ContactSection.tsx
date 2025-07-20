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
      <div className="flex max-w-[80vw] flex-row justify-center pt-8 pb-6">
        <h1 className="text-primary-text text-center text-6xl font-bold">
          Contact Me!
        </h1>
      </div>
      <div className={`${className}`}>{children}</div>
    </section>
  );
};

export default ContactSection;
