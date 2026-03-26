"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-brand-black text-white hover:bg-brand-gold hover:text-white border-2 border-brand-black",
    secondary: "bg-brand-pink text-brand-black hover:bg-white hover:text-brand-black border-2 border-brand-pink",
    outline: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white bg-transparent",
    ghost: "bg-transparent text-brand-black hover:bg-brand-nude",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-medium tracking-wide",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest font-sans",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
