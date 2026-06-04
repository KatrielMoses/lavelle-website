"use client";

import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#0078D4] text-white hover:bg-[#005A9E] focus-visible:ring-[#0078D4]",
  secondary:
    "bg-white text-[#0078D4] border border-[#0078D4] hover:bg-[#E6F3FB] focus-visible:ring-[#0078D4]",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10 focus-visible:ring-white",
  outline:
    "bg-transparent text-[#0078D4] border border-[#C8D6E5] hover:border-[#0078D4] hover:bg-[#E6F3FB] focus-visible:ring-[#0078D4]",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium",
          "transition-all duration-200 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
