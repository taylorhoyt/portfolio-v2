import React, { FC, useRef, useEffect, useState } from "react";
import { TimelineEntries } from "@/types/timeline";
import TimelineEntry from "./TimelineEntry";

interface TimelineProps {
  timelineEntries: TimelineEntries;
}

const Timeline: FC<TimelineProps> = ({ timelineEntries }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [timelineEntries]);

  return (
    <div className="flex min-h-screen w-full justify-center py-10">
      <div
        ref={containerRef}
        className="relative flex w-full max-w-4xl flex-col items-center"
      >
        <div
          className="bg-off-white absolute top-0 left-1/2 z-0 -translate-x-1/2"
          style={{
            width: `4px`,
            height: containerHeight || "100%",
          }}
        />
        {timelineEntries.timelineEntries.map((entry, idx) => (
          <TimelineEntry key={entry.id} entry={entry} isLeft={idx % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
