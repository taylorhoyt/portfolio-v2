import React, { FC, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import LoadingImage from "../LoadingImage";
import BasicButton from "@/components/buttons/BasicButton";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onIndexChange: (index: number) => void;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
  onIndexChange,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="absolute top-4 right-4">
        <BasicButton
          onClick={onClose}
          className="rounded-full p-2 text-white transition-colors hover:brightness-50"
          aria-label="Close modal"
        >
          <X size={64} className="text-expressive-red" />
        </BasicButton>
      </div>

      <div className="flex h-full w-[90vw] max-w-7xl flex-col md:flex-row">
        <div className="my-auto hidden md:block">
          <BasicButton
            onClick={onPrev}
            className="cursor-pointer rounded-full p-2 text-white transition-colors hover:brightness-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={64} />
          </BasicButton>
        </div>
        <LoadingImage
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1} of ${images.length}`}
          fill
          className="object-contain"
        />
        <div className="my-auto hidden md:block">
          <BasicButton
            onClick={onNext}
            className="cursor-pointer rounded-full p-2 text-white transition-colors hover:brightness-50"
            aria-label="Next image"
          >
            <ChevronRight size={64} />
          </BasicButton>
        </div>
      </div>

      <div className="absolute bottom-14 md:hidden">
        <div className="flex flex-row">
          <BasicButton
            onClick={onPrev}
            className="cursor-pointer rounded-full p-2 text-white transition-colors hover:brightness-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={64} />
          </BasicButton>
          <BasicButton
            onClick={onNext}
            className="cursor-pointer rounded-full p-2 text-white transition-colors hover:brightness-50"
            aria-label="Next image"
          >
            <ChevronRight size={64} />
          </BasicButton>
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => onIndexChange(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageModal;
