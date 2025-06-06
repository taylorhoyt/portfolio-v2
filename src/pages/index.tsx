import TopSection from "@/components/sections/TopSection";
import Image from "next/image";
import React from "react";
import ProjectSection from "@/components/sections/ProjectSection";
import ProjectCard from "@/components/cards/ProjectCard";
import BasicButton from "@/components/buttons/BasicButton";

export default function Home() {
  return (
    <>
      <div className="flex h-fit flex-col gap-4">
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
                <h3 className="text-light-gray text-wrap">
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
                  src="/landing-images/me.jpg"
                  width={2585}
                  height={2585}
                  className="rounded-full p-6"
                  alt="distinctly not me"
                />
              </div>
            );
          }}
          buttonRow={() => {
            return (
              <>
                <BasicButton className="bg-expressive-red h-[35px] w-[35px]"></BasicButton>
                <BasicButton
                  className="bg-expressive-yellow h-[35px] w-[35px]"
                  tooltipLabel="label"
                ></BasicButton>
                <BasicButton className="bg-expressive-blue h-[35px] w-[35px]"></BasicButton>
                <BasicButton className="bg-expressive-amethyst h-[35px] w-[35px]"></BasicButton>
              </>
            );
          }}
        />
        <ProjectSection>
          <ProjectCard
            title={"Project"}
            description={"This is a project card"}
            imageUrl={"/project-images/lawnmower.jpg"}
            projectUrl={"mcms.taylorhoyt.com"}
            githubUrl={"https://github.com/taylorhoyt"}
          />
          <ProjectCard
            title={"Project"}
            description={"This is a project card"}
            imageUrl={"/project-images/lawnmower.jpg"}
          />
          <ProjectCard
            title={"Project"}
            description={"This is a project card"}
            imageUrl={"/project-images/lawnmower.jpg"}
          />
        </ProjectSection>
      </div>
    </>
  );
}
