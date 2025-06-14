import React, { FC } from "react";
import { TimelineEntry as TimelineEntryType } from "@/types/timeline";

interface TimelineEntryProps {
  entry: TimelineEntryType;
  isLeft: boolean;
}

const TimelineEntry: FC<TimelineEntryProps> = ({ entry, isLeft }) => {
  const dotSize = 10;

  return (
    <div
      className={`z-10 mb-12 flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"} relative justify-center`}
    >
      {/* Desktop */}
      <div className="relative hidden w-1/2 items-center md:flex">
        {isLeft && (
          <>
            <div
              className="z-20 max-w-[340px] min-w-[280px] rounded-xl px-8 py-6 font-medium text-white shadow-lg"
              style={{ background: entry.color }}
            >
              <div className="mb-2 text-xl font-bold">
                <h3>{entry.title}</h3>
              </div>
              {entry.subtitle && (
                <div className="mb-2 text-base font-medium">
                  <h5>{entry.subtitle}</h5>
                </div>
              )}
              <div className="mb-2 text-lg font-bold">
                {entry.startMonth ? ` ${entry.startMonth}` : ""}{" "}
                {entry.startYear} - {entry.endMonth ? ` ${entry.endMonth}` : ""}{" "}
                {entry.endYear}
              </div>
              <div className="text-base leading-tight font-normal whitespace-pre-line opacity-95">
                <p className="text-pretty">{entry.description}</p>
              </div>
            </div>
            {/* connector */}
            <div
              className="relative flex flex-1 items-center"
              style={{ minWidth: 0 }}
            >
              <div
                className="absolute top-1/2 right-0 z-20"
                style={{
                  transform: `translateY(-50%) translateX(50%)`,
                }}
              >
                <div
                  className="h-5 w-5 rounded-full border-4"
                  style={{
                    borderColor: entry.color,
                    backgroundColor: entry.color,
                    left: `-${dotSize / 2 - 4 / 2}px`,
                  }}
                />
              </div>
              <div
                className="h-1"
                style={{ backgroundColor: entry.color, width: "100%" }}
              />
            </div>
          </>
        )}
        {!isLeft && (
          <>
            {/* connector */}
            <div
              className="relative flex flex-1 items-center justify-end"
              style={{ minWidth: 0 }}
            >
              <div
                className="h-1"
                style={{ backgroundColor: entry.color, width: "100%" }}
              />
              <div
                className="absolute top-1/2 left-0 z-20"
                style={{
                  transform: `translateY(-50%) translateX(-50%)`,
                }}
              >
                <div
                  className="h-5 w-5 rounded-full border-4"
                  style={{
                    borderColor: entry.color,
                    backgroundColor: entry.color,
                    left: `${dotSize / 2 - 4 / 2}px`,
                  }}
                />
              </div>
            </div>
            <div
              className="z-20 max-w-[340px] min-w-[280px] rounded-xl px-8 py-6 font-medium text-white shadow-lg"
              style={{ background: entry.color }}
            >
              <div className="mb-2 text-xl font-bold">
                <h3>{entry.title}</h3>
              </div>
              {entry.subtitle && (
                <div className="mb-2 text-base font-medium">
                  <h5>{entry.subtitle}</h5>
                </div>
              )}
              <div className="mb-2 text-lg font-bold">
                {entry.startMonth ? ` ${entry.startMonth}` : ""}{" "}
                {entry.startYear} - {entry.endMonth ? ` ${entry.endMonth}` : ""}{" "}
                {entry.endYear}
              </div>
              <div className="text-base leading-tight font-normal whitespace-pre-line opacity-95">
                <p className="text-pretty">{entry.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Mobile */}
      <div className="relative flex w-full flex-col items-center md:hidden">
        <div className="flex flex-col items-center">
          <div
            className="z-20 h-5 w-5 rounded-full border-4"
            style={{ borderColor: entry.color, background: entry.color }}
          />
          <div className="h-8 w-1" style={{ backgroundColor: entry.color }} />
        </div>
        <div
          className="text-off-white z-20 w-full max-w-xs rounded-xl px-4 py-6 font-medium shadow-lg"
          style={{ background: entry.color }}
        >
          <div className="mb-2 text-xl font-bold">
            <h3>{entry.title}</h3>
          </div>
          {entry.subtitle && (
            <div className="mb-2 font-medium">
              <h5>{entry.subtitle}</h5>
            </div>
          )}
          <div className="my-auto mb-2 text-lg font-bold">
            {entry.startMonth ? ` ${entry.startMonth}` : ""} {entry.startYear} -{" "}
            {entry.endMonth ? ` ${entry.endMonth}` : ""} {entry.endYear}
          </div>
          <div className="text-base leading-tight font-normal text-pretty opacity-95">
            <p className="text-pretty">{entry.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEntry;
