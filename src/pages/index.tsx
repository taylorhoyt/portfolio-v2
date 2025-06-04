import HeroSection from "@/components/sections/HeroSection";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-green-400">
        <HeroSection
          rightSide={() => {
            return <div className="h-[200px] w-full bg-orange-400"></div>;
          }}
          leftSide={() => {
            return <div className="h-[200px] w-full bg-orange-400"></div>;
          }}
        />
      </div>
      <div className="min-h-screen bg-blue-400"></div>
    </>
  );
}
