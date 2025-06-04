import React, { FC } from "react";

interface HeroSectionProps {
  rightSide: () => React.ReactNode;
  leftSide: () => React.ReactNode;
  className?: string;
}

const TopSection: FC<HeroSectionProps> = ({
  rightSide,
  leftSide,
  className = "",
}: HeroSectionProps) => {
  return (
    <section className={"h-fit w-full"}>
      <div
        className={`grid h-fit w-[1200px] max-w-[75vw] grid-cols-1 gap-4 lg:grid-cols-5 ${className}`}
      >
        <div className="bg-primary h-fit rounded-xl lg:col-span-3">
          <div
            className={
              "from-electric-blue to-expressive-amethyst h-fit rounded-xl bg-linear-to-tl shadow-xl lg:col-span-3"
            }
          >
            {rightSide()}
          </div>
          <div className="flex gap-2 p-4">
            <div className="bg-expressive-red h-[35px] w-[35px] rounded-full"></div>
            <div className="bg-bright-gold h-[35px] w-[35px] rounded-full"></div>
            <div className="bg-expressive-blue h-[35px] w-[35px] rounded-full"></div>
            <div className="bg-expressive-amethyst h-[35px] w-[35px] rounded-full"></div>
          </div>
        </div>
        <div
          className={
            "from-electric-blue to-expressive-amethyst mx-auto h-fit w-fit rounded-xl bg-linear-to-tr lg:col-span-2 lg:row-span-2"
          }
        >
          {leftSide()}
        </div>
      </div>
    </section>
  );
};

export default TopSection;
