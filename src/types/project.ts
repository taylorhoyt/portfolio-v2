export interface ButtonConfig {
  type: string; // "external" | "github" | "custom"
  label?: string;
  url: string;
  icon?: string;
  className?: string;
}

export interface ProjectConfig {
  title: string;
  description: string;
  imagesFolder: string;
  imageFiles: string[];
  buttons?: ButtonConfig[];
}
