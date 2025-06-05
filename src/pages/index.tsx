import TopSection from "@/components/sections/TopSection";
import Image from "next/image";
import React from "react";
import ProjectSection from "@/components/sections/ProjectSection";
import ProjectCard from "@/components/cards/ProjectCard";

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
                <h1 className="text-expressive-blue text-4xl font-bold">
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
              <div className="m-auto h-fit w-fit text-center">
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
        <ProjectSection>
          <ProjectCard
            title={"Project"}
            description={"This is a project card"}
            imageUrl={"/project-images/stig.jpg"}
          />
          <ProjectCard
            title={"Project"}
            description={"This is a project card"}
            imageUrl={"/project-images/stig.jpg"}
          />
          <ProjectCard
            title={"Project"}
            description={"This is a project card"}
            imageUrl={"/project-images/stig.jpg"}
          />
        </ProjectSection>
      </div>
    </>
  );
}
