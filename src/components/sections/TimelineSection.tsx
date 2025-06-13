import React, { FC, ReactNode } from "react";

interface TimelineSectionProps {
  className?: string;
  children: ReactNode;
}

const TimelineSection: FC<TimelineSectionProps> = ({
  className = "",
  children,
}: TimelineSectionProps) => {
  return (
    <section id="timeline">
      <div className="flex flex-row justify-center py-12">
        <h1 className="text-primary-text text-center text-6xl font-bold">
          Career Timeline
        </h1>
      </div>
      <div
        className={`from-from-gradient to-to-gradient via-via-gradient mx-auto flex w-[1000px] max-w-[90vw] rounded-xl bg-linear-to-b p-2 shadow ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default TimelineSection;
