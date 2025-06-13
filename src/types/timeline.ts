export interface Timeline {
  timelineEntries: TimelineEntry[];
}

export interface TimelineEntry {
  id: string;
  startYear: number;
  endYear: number;
  startMonth?: string;
  endMonth?: string;
  description: string;
  color: string;
  iconPath?: string;
}
