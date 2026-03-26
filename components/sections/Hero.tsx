"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Sparkles } from "lucide-react";
import gsap from "gsap";

export const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(contentRef.current, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <section 
            ref={heroRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/hero.png" 
                    alt="Modelo com vestido de luxo" 
                    fill 
                    className="object-cover object-center scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content Overflow */}
            <div 
                ref={contentRef}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center"
            >
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8 animate-fade-down duration-1000">
                   <span className="text-white text-[10px] uppercase tracking-[0.4em] font-black">✨ Coleção Exclusiva de Luxo ✨</span>
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black mb-6 flex flex-col gap-2 md:gap-4 leading-tight">
                  <span className="text-white drop-shadow-2xl">Realce a sua beleza nos</span>
                  <span className="text-brand-gold italic drop-shadow-2xl brightness-110 px-2">momentos mais especiais</span>
                </h1>

                <p className="description text-lg md:text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
                   Sinta-se única e poderosa. Alugamos vestidos exclusivos que transformam a sua presença em qualquer evento, sem precisar comprar.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-20 animate-fade-up duration-1000">
                  <Link href="/vestidos" className="w-full sm:w-auto">
                     <Button size="lg" className="w-full rounded-xl px-12 group bg-brand-black text-white hover:bg-white hover:text-brand-black transition-all duration-500 whitespace-nowrap shadow-2xl">
                       Ver Vestidos
                       <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                     </Button>
                  </Link>
                  <Link href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido." target="_blank" className="w-full sm:w-auto">
                     <Button variant="outline" size="lg" className="w-full rounded-xl px-8 bg-white border-white text-brand-black hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-500 whitespace-nowrap shadow-xl">
                       Reservar Agora (WhatsApp)
                     </Button>
                  </Link>
                </div>

                {/* Stats Section with improved spacing */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl animate-fade-in duration-1000">
                  {[
                    { label: "500+", value: "Vestidos" },
                    { label: "2K+", value: "Clientes Felizes" },
                    { label: "5 Estrelas", value: "Avaliação" },
                    { label: "Camama", value: "Localização" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-brand-gold mb-1 group-hover:scale-110 transition-transform duration-500">{stat.label}</span>
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 group-hover:text-white transition-colors">{stat.value}</span>
                    </div>
                  ))}
                </div>
            </div>

            {/* Decorative Scroll Hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold">Descobrir</span>
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-brand-gold to-white/10" />
            </div>
        </section>
    );
};
