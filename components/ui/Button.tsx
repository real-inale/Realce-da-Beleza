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
    primary: "bg-brand-black text-white hover:bg-brand-gold hover:text-white border border-brand-black hover:border-brand-gold shadow-lg shadow-black/5 hover:shadow-brand-gold/20",
    secondary: "bg-brand-pink text-brand-black hover:bg-white hover:text-brand-black border border-brand-pink",
    outline: "border border-brand-black text-brand-black hover:bg-brand-black hover:text-white bg-transparent",
    ghost: "bg-transparent text-brand-black hover:bg-brand-nude",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-[10px]",
    md: "px-10 py-4 text-xs font-black tracking-[0.2em]",
    lg: "px-14 py-5 text-sm font-black tracking-[0.3em]",
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
