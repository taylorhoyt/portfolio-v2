import TopSection from "@/components/sections/TopSection";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex h-fit flex-col gap-16">
        <TopSection
          className={"m-auto"}
          rightSide={() => {
            return (
              <div className="flex h-fit w-full flex-col rounded-xl p-4">
                <h1 className="text-off-white text-3xl font-bold">
                  Many things will be built
                </h1>
                <h1 className="text-expressive-blue pb-2 text-4xl font-bold underline underline-offset-4">
                  in a real timeframe
                </h1>
                <h1 className="text-off-white text-3xl font-bold">
                  Maybe even soon
                </h1>
                <h3 className="text-silver-gray text-wrap">
                  Fullstack software engineer experienced in turning dreams into
                  reality
                </h3>
              </div>
            );
          }}
          leftSide={() => {
            return (
              <div className="m-auto h-fit w-fit">
                <Image
                  src="/landing-images/alien.png"
                  width={500}
                  height={500}
                  className="rounded-full p-6"
                  alt="distinctly not me"
                />
              </div>
            );
          }}
        />
      </div>
    </>
  );
}
