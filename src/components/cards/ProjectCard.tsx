import React, { FC } from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import BasicButton from "../buttons/BasicButton";
import LoadingImage from "../LoadingImage";

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
    <div className="h-fit w-full min-w-fit overflow-hidden rounded-lg transition-shadow duration-300 hover:scale-[102%] hover:shadow-xl">
      <div className="from-from-gradient to-to-gradient via-via-gradient relative aspect-video w-full bg-linear-to-b">
        <div className="absolute inset-0">
          <LoadingImage
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="from-from-gradient to-to-gradient via-via-gradient bg-linear-to-t p-6">
        <h3 className="text-off-white mb-2 text-2xl font-bold">{title}</h3>
        <p className="text-silver-gray mb-4">{description}</p>

        <div className="flex gap-4">
          {projectUrl && (
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <BasicButton className="bg-expressive-amethyst text-white">
                <ExternalLink size={24} />
                Info
              </BasicButton>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <BasicButton className="bg-dark-slate-blue text-off-white">
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
