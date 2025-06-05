import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:scale-[102%] hover:shadow-xl">
      <div className="relative aspect-video w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="from-electric-blue to-expressive-amethyst bg-linear-to-t p-6">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>

        <div className="flex gap-4">
          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
            >
              View Project
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-gray-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-900"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
