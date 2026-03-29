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
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <div className="mb-8 flex h-fit flex-col">
        <div className="min-h-body flex w-full items-center justify-center py-4">
          <TopSection
            className={"m-auto"}
            rightSide={() => {
              return (
                <div className="flex h-fit w-full flex-col gap-2 rounded-xl p-4">
                  <h1 className="text-off-white mb-2 text-5xl font-bold leading-tight">
                    Quality code,
                    <br />
                    Accelerated results.
                  </h1>
                  <p className="text-light-gray text-wrap">
                    Fullstack software engineer who thrives on transforming
                    complex challenges into elegant, efficient, and user-centric
                    applications that make a real difference.
                  </p>
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
                    alt="Taylor Hoyt, Fullstack Software Engineer"
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
                    aria-label="View Resume"
                  >
                    <BasicButton
                      className="bg-expressive-red text-off-white"
                      tooltipLabel="View my resume"
                      aria-label="View Resume"
                    >
                      <FileText size={24} />
                    </BasicButton>
                  </Link>
                  <Link
                    href={"mailto:me@taylorhoyt.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Me"
                  >
                    <BasicButton
                      className="bg-expressive-yellow text-off-white"
                      tooltipLabel="Email Me!"
                      aria-label="Email Me"
                    >
                      <Mail size={24} />
                    </BasicButton>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/taylorchoyt"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on LinkedIn"
                  >
                    <BasicButton
                      className="bg-expressive-blue text-off-white"
                      tooltipLabel="Connect with me!"
                      aria-label="Connect on LinkedIn"
                    >
                      <Linkedin size={24} />
                    </BasicButton>
                  </Link>
                  <Link
                    href={"https://github.com/taylorhoyt"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View my GitHub"
                  >
                    <BasicButton
                      className="bg-expressive-amethyst text-off-white"
                      tooltipLabel="View my code"
                      aria-label="View my GitHub"
                    >
                      <Github size={24} />
                    </BasicButton>
                  </Link>
                </>
              );
            }}
          />
        </div>

        <SkillsSection />

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

        <ContactSection />
      </div>
    </>
  );
}
