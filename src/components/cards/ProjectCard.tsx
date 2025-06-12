import React, { FC, useState, useCallback } from "react";
import Link from "next/link";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import BasicButton from "../buttons/BasicButton";
import LoadingImage from "../LoadingImage";
import { ProjectConfig, ButtonConfig } from "@/types/project";

interface ProjectCardProps {
  config: ProjectConfig;
}

const ProjectCard: FC<ProjectCardProps> = ({ config }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === config.imageFiles.length - 1 ? 0 : prevIndex + 1
    );
  }, [config.imageFiles.length]);
  
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? config.imageFiles.length - 1 : prevIndex - 1
    );
  }, [config.imageFiles.length]);

  const currentImageUrl = `${config.imagesFolder}/${config.imageFiles[currentImageIndex]}`;

  const getButtonStyling = useCallback((button: ButtonConfig) => {
    let buttonClassName = button.className || "";
    let buttonIcon = null;
    let buttonLabel = button.label || "";
    
    switch (button.type) {
      case "external":
        buttonClassName = buttonClassName || "bg-expressive-amethyst text-white";
        buttonIcon = <ExternalLink size={24} />;
        buttonLabel = buttonLabel || "Info";
        break;
      case "github":
        buttonClassName = buttonClassName || "bg-dark-slate-blue text-off-white";
        buttonIcon = <Github size={24} />;
        buttonLabel = buttonLabel || "Code";
        break;
    }
    
    return { buttonClassName, buttonIcon, buttonLabel };
  }, []);

  return (
    <div className="h-fit w-full min-w-fit overflow-hidden rounded-lg transition-shadow duration-300 hover:scale-[102%] hover:shadow-xl">
      <div className="from-from-gradient to-to-gradient via-via-gradient relative aspect-video w-full bg-linear-to-b">
        <div className="absolute inset-0">
          <LoadingImage
            src={currentImageUrl}
            alt={`${config.title} - ${currentImageIndex + 1}/${config.imageFiles.length}`}
            fill
            className="object-cover"
          />
        </div>
        
        {config.imageFiles.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Image pagination indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {config.imageFiles.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="bg-primary-background p-6">
        <h3 className="text-primary-text mb-2 text-2xl font-bold">{config.title}</h3>
        <p className="text-secondary-text mb-4">{config.description}</p>

        {config.buttons && config.buttons.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {config.buttons.map((button, index) => {
              const { buttonClassName, buttonIcon, buttonLabel } = getButtonStyling(button);
              
              return (
                <Link 
                  key={index} 
                  href={button.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <BasicButton className={buttonClassName}>
                    {buttonIcon}
                    {buttonLabel}
                  </BasicButton>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
