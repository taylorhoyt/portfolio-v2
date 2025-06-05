import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import BasicButton from "../buttons/BasicButton";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="h-fit w-full min-w-fit overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:scale-[102%] hover:shadow-xl">
      <div className="relative aspect-video w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="from-electric-blue to-expressive-amethyst bg-linear-to-t p-6">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>

        <div className="flex gap-4">
          {projectUrl && (
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <BasicButton className="bg-expressive-amethyst hover:bg-expressive-blue text-white">
                <ExternalLink size={24} />
                Info
              </BasicButton>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <BasicButton className="bg-dark-slate-blue hover:bg-deep-charcoal text-white">
                <Github size={24} />
              </BasicButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
