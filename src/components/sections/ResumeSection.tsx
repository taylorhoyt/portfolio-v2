import React, { FC, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface ResumeSectionProps {
  className?: string;
}

const ResumeSection: FC<ResumeSectionProps> = ({
  className = "",
}: ResumeSectionProps) => {
  const router = useRouter();
  const hasOpenedPdf = useRef(false);

  useEffect(() => {
    if (!hasOpenedPdf.current) {
      // Open PDF in new tab when component mounts
      window.open("/resume/Resume-2025.pdf", "_blank");
      // Redirect to home page
      router.push("/");
      hasOpenedPdf.current = true;
    }
  }, [router]);

  return (
    <section className={`h-full w-full ${className}`}>
      <div className="mx-auto h-fit w-fit max-w-[90vw]">
        <div className="bg-primary h-full rounded-xl shadow-xl">
          <div className="flex h-full flex-col items-center justify-center space-y-4 p-4 text-center">
            <p className="text-primary-text text-lg font-medium">
              Opening resume in a new tab...
            </p>
            <p className="text-secondary-text text-sm">
              If it doesn&#39;t open automatically,{" "}
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
