import React, { FC } from "react";
import Iframe from "react-iframe";

interface ResumeSectionProps {
  className?: string;
}

const ResumeSection: FC<ResumeSectionProps> = ({
  className = "",
}: ResumeSectionProps) => {
  return (
    <section className={`h-full w-full ${className}`}>
      <div className="mx-auto h-full w-[1200px] max-w-[90vw]">
        <div className="bg-primary h-full rounded-xl shadow-xl">
          <div className="h-full p-4">
            <Iframe
              url="/resume/TaylorHoytResumeS25.pdf"
              width="100%"
              height="100%"
              className="rounded-lg"
              display="block"
              position="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
