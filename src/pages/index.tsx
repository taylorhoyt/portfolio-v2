import TopSection from "@/components/sections/TopSection";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex h-fit flex-col gap-16">
        <TopSection
          className={"m-auto"}
          rightSide={() => {
            return <div className="bg-expressive-blue h-[200px] w-full"></div>;
          }}
          leftSide={() => {
            return (
              <div className="bg-secondary-background h-[200px] w-full"></div>
            );
          }}
        />
      </div>
    </>
  );
}
