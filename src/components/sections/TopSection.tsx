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
    <section className={"h-full w-full"} id={"home"}>
      <div
        className={`grid h-fit w-[1200px] max-w-[90vw] grid-cols-1 gap-4 lg:grid-cols-5 ${className}`}
      >
        {/* Text / CTA column */}
        <div className="bg-primary flex h-full w-full flex-col rounded-xl lg:col-span-3">
          <div
            className={
              "from-from-gradient to-to-gradient via-via-gradient h-full content-center rounded-xl bg-linear-to-t lg:bg-linear-to-b lg:shadow-xl"
            }
          >
            {rightSide()}
          </div>
          {/* Buttons below text — visible on mobile AND desktop */}
          <div className="flex gap-2 p-4">{buttonRow()}</div>
        </div>

        {/* Photo column */}
        <div className="bg-primary flex h-full w-full rounded-xl lg:col-span-2 lg:w-fit">
          <div
            className={
              "from-from-gradient to-to-gradient via-via-gradient flex h-full w-full rounded-xl bg-linear-to-b shadow-[-10px_0px_15px_-3px_rgba(0,0,0,0.3)] lg:mx-auto lg:bg-linear-to-b lg:shadow-none"
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
