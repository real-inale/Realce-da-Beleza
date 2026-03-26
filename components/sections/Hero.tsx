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
                className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white"
            >
                <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-sm font-medium tracking-widest uppercase animate-pulse">
                    <Sparkles size={16} className="text-brand-gold" />
                    <span>Coleção Exclusiva de Luxo</span>
                    <Sparkles size={16} className="text-brand-gold" />
                </div>

                <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-xl">
                    Realce a sua beleza nos <br />
                    <span className="text-brand-gold italic">momentos mais especiais</span> ✨
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
                    Sinta-se única e poderosa. Alugamos vestidos exclusivos que transformam a sua presença em qualquer evento, sem precisar comprar.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/vestidos" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full gap-3 shadow-xl hover:shadow-brand-gold/20">
                            Ver Vestidos
                            <ChevronRight size={20} />
                        </Button>
                    </Link>
                    <Link 
                        href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido."
                        target="_blank"
                        className="w-full sm:w-auto"
                    >
                        <Button size="lg" variant="secondary" className="w-full gap-3 bg-white/90 backdrop-blur-xl border-white shadow-xl hover:bg-brand-gold hover:text-white">
                            Reservar agora (WhatsApp)
                        </Button>
                    </Link>
                </div>

                {/* Achievement Badge */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-80 border-t border-white/10 pt-10">
                   <div className="flex flex-col items-center">
                        <span className="text-3xl font-serif font-bold text-brand-gold mb-1">500+</span>
                        <span className="text-xs uppercase tracking-widest font-bold">Vestidos</span>
                   </div>
                   <div className="flex flex-col items-center">
                        <span className="text-3xl font-serif font-bold text-brand-gold mb-1">2k+</span>
                        <span className="text-xs uppercase tracking-widest font-bold">Clientes Felizes</span>
                   </div>
                   <div className="flex flex-col items-center">
                        <span className="text-3xl font-serif font-bold text-brand-gold mb-1">5 Estrelas</span>
                        <span className="text-xs uppercase tracking-widest font-bold">Avaliação</span>
                   </div>
                   <div className="flex flex-col items-center">
                        <span className="text-3xl font-serif font-bold text-brand-gold mb-1">Camama</span>
                        <span className="text-xs uppercase tracking-widest font-bold">Localização</span>
                   </div>
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
