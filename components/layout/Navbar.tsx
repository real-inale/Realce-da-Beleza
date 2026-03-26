"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Vestidos", href: "/vestidos" },
  { name: "Acessórios", href: "/acessorios" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Contacto", href: "/contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-10">
            <h1 className={cn(
                "text-2xl font-serif font-bold tracking-tight transition-colors",
                scrolled ? "text-brand-black" : (pathname === "/" ? "text-white" : "text-brand-black shadow-sm")
              )}>
              Realce da Beleza
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-all hover:text-brand-gold relative group",
                pathname === link.href ? "text-brand-gold" : (scrolled ? "text-brand-black" : (pathname === "/" ? "text-white" : "text-brand-black"))
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full",
                pathname === link.href ? "w-full" : "w-0"
              )} />
            </Link>
          ))}
          <Link 
            href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido."
            target="_blank"
            className={cn(
                "px-6 py-2 rounded-full text-sm uppercase tracking-widest font-medium transition-all",
                scrolled 
                    ? "bg-brand-black text-white hover:bg-brand-gold" 
                    : (pathname === "/" ? "bg-white text-brand-black hover:bg-brand-gold hover:text-white" : "bg-brand-black text-white hover:bg-brand-gold")
            )}
          >
            Reservar
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-full focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled || pathname !== "/" ? "text-brand-black" : "text-white"} />
          ) : (
            <Menu className={scrolled || pathname !== "/" ? "text-brand-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 text-center"
          >
            <button
                className="absolute top-6 right-6 p-2 text-brand-black"
                onClick={() => setIsOpen(false)}
            >
                <X size={32} />
            </button>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                    "text-2xl font-serif font-bold text-brand-black hover:text-brand-gold",
                    pathname === link.href ? "text-brand-gold" : ""
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
                href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido."
                target="_blank"
                className="mt-8 px-10 py-4 bg-brand-black text-white rounded-full text-lg uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
            >
                Reservar agora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
