import React, { FC } from "react";

interface HeroSectionProps {
  rightSide: () => React.ReactNode;
  leftSide: () => React.ReactNode;
  buttonRow: () => React.ReactNode;
  className?: string;
}

const TopSection: FC<HeroSectionProps> = ({
  rightSide,
  leftSide,
  buttonRow,
  className = "",
}: HeroSectionProps) => {
  return (
    <section className={"h-fit w-full"}>
      <div
        className={`grid h-fit w-[1200px] max-w-[75vw] grid-cols-1 gap-4 lg:grid-cols-5 ${className}`}
      >
        <div className="bg-primary flex h-full w-full flex-col rounded-xl lg:col-span-3">
          <div
            className={
              "from-electric-blue to-expressive-amethyst h-full content-center rounded-xl bg-linear-to-t shadow-xl lg:bg-linear-to-b"
            }
          >
            {rightSide()}
          </div>
          <div className="hidden gap-2 p-4 lg:flex">{buttonRow()}</div>
        </div>
        <div className="bg-primary flex h-full w-full flex-row rounded-xl lg:col-span-2 lg:w-fit">
          <div className="flex flex-col gap-2 p-4 lg:hidden">{buttonRow()}</div>
          <div
            className={
              "from-electric-blue to-expressive-amethyst h-full w-full rounded-xl bg-linear-to-b lg:mx-auto lg:bg-linear-to-b"
            }
          >
            {leftSide()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
