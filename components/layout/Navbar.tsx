"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Facebook, Phone, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Vestidos", href: "/vestidos/" },
  { name: "Acessórios", href: "/acessorios/" },
  { name: "Sobre Nós", href: "/sobre/" },
  { name: "Contacto", href: "/contacto/" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-500",
        isOpen ? "z-[9999]" : "z-50",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-2xl py-2" 
          : "bg-transparent py-4 mx-0 md:mx-4 lg:mx-10 mt-0 md:mt-4 md:rounded-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between font-sans">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <Image 
              src="/logo.png" 
              alt="Realce da Beleza" 
              fill 
              className={cn(
                "object-contain transition-all duration-700 group-hover:scale-110",
                scrolled ? "brightness-100" : (pathname === "/" ? "brightness-0 invert group-hover:brightness-100 group-hover:invert-0" : "brightness-100")
              )}
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
                "text-md md:text-xl font-serif font-black tracking-tighter transition-all duration-500 leading-none",
                scrolled ? "text-brand-black" : (pathname === "/" ? "text-white" : "text-brand-black")
              )}>
                Realce da
            </span>
            <span className={cn(
                "text-xs md:text-sm font-serif font-bold tracking-[0.2em] uppercase transition-all duration-500 leading-none",
                scrolled ? "text-brand-gold" : (pathname === "/" ? "text-brand-gold" : "text-brand-gold")
              )}>
                Beleza
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-brand-gold relative group whitespace-nowrap",
                pathname === link.href ? "text-brand-gold" : (scrolled ? "text-brand-black" : (pathname === "/" ? "text-white" : "text-brand-black"))
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full",
                pathname === link.href ? "w-full" : "w-0"
              )} />
            </Link>
          ))}
          <Link 
            href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido."
            target="_blank"
            className={cn(
                "ml-4 px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all shadow-xl hover:shadow-brand-gold/20 active:scale-95 whitespace-nowrap",
                scrolled 
                    ? "bg-brand-black text-white hover:bg-brand-gold" 
                    : (pathname === "/" ? "bg-white text-brand-black hover:bg-brand-gold hover:text-white" : "bg-brand-black text-white hover:bg-brand-gold")
            )}
          >
            Reservar Agora
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={cn(
            "lg:hidden p-3 rounded-full transition-all active:scale-90",
            scrolled || pathname !== "/" ? "bg-brand-black/5 text-brand-black" : "bg-white/10 text-white backdrop-blur-md"
          )}
          onClick={() => setIsOpen(true)}
        >
           <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed inset-0 bg-white z-[99999] flex flex-col transition-colors"
          >
            <div className="px-8 flex justify-between items-center py-6 border-b border-brand-nude/50 mb-10 shrink-0">
               <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                 <div className="relative w-12 h-12">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                 </div>
                 <div className="flex flex-col -gap-1">
                    <span className="font-serif font-black text-brand-black tracking-tighter text-lg leading-tight">Realce da</span>
                    <span className="font-serif font-bold text-brand-gold tracking-[0.2em] uppercase text-[10px] leading-tight opacity-80">Beleza</span>
                 </div>
               </Link>
               <button
                  className="p-3 rounded-full bg-brand-black/5 text-brand-black hover:bg-brand-black hover:text-white transition-all transform hover:rotate-90 duration-500"
                  onClick={() => setIsOpen(false)}
               >
                  <X size={24} />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                      "text-3xl font-serif font-black text-brand-black hover:text-brand-gold transition-colors",
                      pathname === link.name ? "text-brand-gold" : ""
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto p-10 flex flex-col items-center gap-8 bg-brand-nude/30">
                <Link 
                    href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido."
                    target="_blank"
                    className="w-full py-6 bg-brand-black text-white rounded-2xl text-center text-xs uppercase tracking-[0.3em] font-black group shadow-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    Reservar agora (WhatsApp)
                </Link>
                
                <div className="flex gap-10">
                   <Link href="#" className="p-4 bg-white rounded-full text-brand-black shadow-lg"><Instagram size={24} /></Link>
                   <Link href="#" className="p-4 bg-white rounded-full text-brand-black shadow-lg"><Facebook size={24} /></Link>
                   <Link href="tel:+244943700307" className="p-4 bg-white rounded-full text-brand-black shadow-lg"><Phone size={24} /></Link>
                </div>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center mt-4">Camama, Luanda - Angola</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
