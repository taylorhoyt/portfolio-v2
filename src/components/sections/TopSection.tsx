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
        <div className={"h-fit lg:col-span-3"}>{rightSide()}</div>
        <div className={"h-fit lg:col-span-2"}>{leftSide()}</div>
      </div>
    </section>
  );
};

export default TopSection;
