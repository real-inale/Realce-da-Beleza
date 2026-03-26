"use client";

import React from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const workflow = [
  { id: 1, title: "Escolha seu Estilo", desc: "Explore nosso catálogo exclusivo de vestidos de luxo." },
  { id: 2, title: "Reserve sua Data", desc: "Fale com nossos especialistas via WhatsApp." },
  { id: 3, title: "Levanta e Brilha", desc: "Ajuste final no nosso espaço físico no Camama." },
  { id: 4, title: "Momento Inesquecível", desc: "Aproveite seu evento com toda elegância." },
];

export const SummarySection = () => {
    return (
        <section className="summary py-20 md:py-32 px-6 font-sans luxury-gradient">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Brand Emotion */}
                <div className="text-center mb-20 md:mb-32 max-w-3xl flex flex-col items-center">
                    <div className="flex justify-center gap-1 mb-8 text-brand-gold opacity-80">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-brand-black mb-8 md:mb-10 leading-tight">
                        Criamos este espaço com carinho para <br className="hidden lg:block" />
                        <span className="italic font-normal text-brand-gold">valorizar a beleza feminina</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-[600px] font-medium">
                        Acreditamos que cada mulher merece sentir-se deslumbrante em momentos especiais sem comprometer o orçamento. Nosso compromisso é oferecer elegância, exclusividade e confiança.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-20">
                        <div className="flex items-center gap-3 text-brand-black group">
                            <div className="p-2 bg-brand-gold/10 rounded-full">
                                <Check className="text-brand-gold" size={16} />
                            </div>
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black whitespace-nowrap">Vestidos de Grife</span>
                        </div>
                        <div className="flex items-center gap-3 text-brand-black group">
                            <div className="p-2 bg-brand-gold/10 rounded-full">
                                <Check className="text-brand-gold" size={16} />
                            </div>
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black whitespace-nowrap">Atendimento VIP</span>
                        </div>
                        <div className="flex items-center gap-3 text-brand-black group">
                            <div className="p-2 bg-brand-gold/10 rounded-full">
                                <Check className="text-brand-gold" size={16} />
                            </div>
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black whitespace-nowrap">Local Seguro</span>
                        </div>
                    </div>
                </div>

                {/* Workflow Cards */}
                <div className="w-full">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.4em] font-black text-brand-gold mb-4 inline-block">EXPERIÊNCIA REALCE</span>
                        <h3 className="text-3xl font-serif font-black text-brand-black leading-tight">Como <span className="italic font-normal">Funciona</span></h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 group">
                        {workflow.map((item) => (
                            <div key={item.id} className="relative flex flex-col items-center text-center p-10 bg-white border border-brand-nude rounded-[2.5rem] transition-all duration-700 hover:shadow-2xl hover:shadow-brand-pink/20 hover:-translate-y-2 group-hover:opacity-70 hover:!opacity-100 z-10 shadow-xl shadow-brand-pink/5">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-brand-black text-white rounded-full flex items-center justify-center font-serif text-2xl font-black shadow-2xl border-4 border-white group-hover:bg-brand-gold transition-colors duration-500">
                                    {item.id}
                                </div>
                                <h4 className="text-lg font-serif font-black text-brand-black mb-4 mt-6 uppercase tracking-[0.1em] leading-tight group-hover:text-brand-gold transition-colors">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-sans">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Button for this section */}
                <div className="mt-20">
                    <Button variant="outline" size="lg" className="rounded-xl px-12 uppercase tracking-widest hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-500 font-black text-xs">
                        Agende sua prova hoje
                    </Button>
                </div>
            </div>
        </section>
    );
};
