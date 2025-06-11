import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  tooltipLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  tooltipLabel,
  ...props
}) => {
  return (
    <div className="group relative">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center gap-2 rounded-full p-4 transition-colors duration-300 hover:brightness-50 ${className} cursor-pointer`}
        {...props}
      >
        {children}
      </button>
      {tooltipLabel && (
        <div className="bg-secondary-background text-primary-text pointer-events-none absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 rounded px-2 py-1 text-sm whitespace-nowrap opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          {tooltipLabel}
        </div>
      )}
    </div>
  );
};

export default Button;
