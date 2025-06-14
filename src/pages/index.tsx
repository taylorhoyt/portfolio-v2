import TopSection from "@/components/sections/TopSection";
import React from "react";
import ProjectSection from "@/components/sections/ProjectSection";
import { Linkedin, Github, Mail, FileText } from "lucide-react";
import ProjectCard from "@/components/cards/ProjectCard";
import BasicButton from "@/components/buttons/BasicButton";
import LoadingImage from "@/components/LoadingImage";
import Link from "next/link";
import { projectConfigs } from "@/data/projects";
import { timelineEntries } from "@/data/timeline-entries";
import Timeline from "@/components/timelines/Timeline";
import TimelineSection from "@/components/sections/TimelineSection";

export default function Home() {
  return (
    <>
      <div className="flex h-fit flex-col">
        <div className="min-h-body flex w-full items-center justify-center py-4">
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
                    Fullstack software engineer experienced in turning dreams
                    into reality
                  </h3>
                </div>
              );
            }}
            leftSide={() => {
              return (
                <div className="m-auto h-fit w-fit text-center">
                  <LoadingImage
                    src="/landing-images/me.webp"
                    width={2585}
                    height={2585}
                    className="rounded-full p-6"
                    alt="me"
                  />
                </div>
              );
            }}
            buttonRow={() => {
              return (
                <>
                  <Link
                    href={"/resume/resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BasicButton
                      className="bg-expressive-red text-off-white"
                      tooltipLabel="View my resume"
                    >
                      <FileText size={24} />
                    </BasicButton>
                  </Link>
                  <Link
                    href={"mailto:me@taylorhoyt.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BasicButton
                      className="bg-expressive-yellow text-off-white"
                      tooltipLabel="Email Me!"
                    >
                      <Mail size={24} />
                    </BasicButton>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/taylorchoyt"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BasicButton
                      className="bg-expressive-blue text-off-white"
                      tooltipLabel="Connect with me!"
                    >
                      <Linkedin size={24} />
                    </BasicButton>
                  </Link>
                  <Link
                    href={"https://github.com/taylorhoyt"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BasicButton
                      className="bg-expressive-amethyst text-off-white"
                      tooltipLabel="View my code"
                    >
                      <Github size={24} />
                    </BasicButton>
                  </Link>
                </>
              );
            }}
          />
        </div>

        <div className="min-h-body from-from-gradient to-to-gradient via-via-gradient flex h-fit w-full items-center justify-center bg-gradient-to-t py-4">
          <ProjectSection>
            {projectConfigs.map((config, index) => (
              <ProjectCard key={index} config={config} />
            ))}
          </ProjectSection>
        </div>

        <TimelineSection>
          <Timeline timelineEntries={timelineEntries} />
        </TimelineSection>
      </div>
    </>
  );
}
