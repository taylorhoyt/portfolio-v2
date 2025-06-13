export interface TimelineEntries {
  timelineEntries: TimelineEntry[];
}

export interface TimelineEntry {
  id: string;
  title: string;
  subtitle?: string;
  startYear: number;
  endYear: number;
  startMonth?: string;
  endMonth?: string;
  description: string;
  color: string;
  iconPath?: string;
}
