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
    <div className="relative group">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center gap-2 rounded-full p-4 transition-colors duration-300 hover:brightness-50 ${className}`}
        {...props}
      >
        {children}
      </button>
      {tooltipLabel && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          {tooltipLabel}
        </div>
      )}
    </div>
  );
};

export default Button;
