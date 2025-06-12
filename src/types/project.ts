export interface ButtonConfig {
  type: string; // "external" | "github" | "custom"
  label?: string;
  url: string;
  icon?: string; // For future extensibility
  className?: string;
}

export interface ProjectConfig {
  title: string;
  description: string;
  imagesFolder: string; // Path to the folder containing images
  imageFiles: string[]; // Array of image filenames
  buttons?: ButtonConfig[];
}
