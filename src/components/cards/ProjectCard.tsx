import React, { FC, useState, useCallback } from "react";
import Link from "next/link";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import BasicButton from "../buttons/BasicButton";
import LoadingImage from "../LoadingImage";
import ImageModal from "../modals/ImageModal";
import { ProjectConfig, ButtonConfig } from "@/types/project";

interface ProjectCardProps {
  config: ProjectConfig;
}

const ProjectCard: FC<ProjectCardProps> = ({ config }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === config.imageFiles.length - 1 ? 0 : prevIndex + 1,
    );
  }, [config.imageFiles.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? config.imageFiles.length - 1 : prevIndex - 1,
    );
  }, [config.imageFiles.length]);

  const currentImageUrl = `${config.imagesFolder}/${config.imageFiles[currentImageIndex]}`;
  const allImageUrls = config.imageFiles.map(
    (file) => `${config.imagesFolder}/${file}`,
  );

  const getButtonStyling = useCallback((button: ButtonConfig) => {
    let buttonClassName = button.className || "";
    let buttonIcon = null;
    let buttonLabel = button.label || "";

    switch (button.type) {
      case "external":
        buttonClassName =
          buttonClassName || "bg-expressive-amethyst text-white";
        buttonIcon = <ExternalLink size={24} />;
        buttonLabel = buttonLabel || "Info";
        break;
      case "github":
        buttonClassName =
          buttonClassName || "bg-dark-slate-blue text-off-white";
        buttonIcon = <Github size={24} />;
        buttonLabel = buttonLabel || "Code";
        break;
    }

    return { buttonClassName, buttonIcon, buttonLabel };
  }, []);

  return (
    <>
      <div className="h-fit w-full min-w-fit overflow-hidden rounded-lg transition-shadow duration-300 hover:scale-[102%] hover:shadow-xl">
        <div
          className="from-from-gradient to-to-gradient via-via-gradient relative aspect-video w-full cursor-pointer bg-linear-to-b"
          onClick={() => setIsModalOpen(true)}
        >
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
              <div
                className="absolute top-1/2 -left-4 -translate-y-1/2"
                onClick={(e) => e.stopPropagation()}
              >
                <BasicButton
                  onClick={prevImage}
                  className="text-white transition-colors hover:brightness-50"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={64} />
                </BasicButton>
              </div>
              <div
                className="absolute top-1/2 -right-4 -translate-y-1/2"
                onClick={(e) => e.stopPropagation()}
              >
                <BasicButton
                  onClick={nextImage}
                  className="text-white transition-colors hover:brightness-50"
                  aria-label="Next image"
                >
                  <ChevronRight size={64} />
                </BasicButton>
              </div>

              {/* Image pagination indicators */}
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                {config.imageFiles.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="bg-primary-background p-6">
          <h3 className="text-primary-text mb-2 text-2xl font-bold">
            {config.title}
          </h3>
          <p className="text-secondary-text mb-4">{config.description}</p>

          {config.buttons && config.buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {config.buttons.map((button, index) => {
                const { buttonClassName, buttonIcon, buttonLabel } =
                  getButtonStyling(button);

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

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={allImageUrls}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
        onIndexChange={setCurrentImageIndex}
      />
    </>
  );
};

export default ProjectCard;
