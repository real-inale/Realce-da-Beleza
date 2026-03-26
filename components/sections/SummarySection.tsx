"use client";

import React from "react";
import Image from "next/image";
import { Check, Heart, Shield, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const workflow = [
  { id: 1, title: "Escolha seu Estilo", desc: "Explore nosso catálogo exclusivo de vestidos de luxo e acessórios sofisticados." },
  { id: 2, title: "Reserve sua Data", desc: "Fale com nossos especialistas via WhatsApp para garantir a sua peça favorita." },
  { id: 3, title: "Levanta e Brilha", desc: "Vá até nosso local físico no Camama para o ajuste final e saia pronta para brilhar." },
  { id: 4, title: "Momento Inesquecível", desc: "Aproveite seu evento com a confiança e elegância que um vestido de luxo proporciona." },
];

export const SummarySection = () => {
    return (
        <section className="summary py-24 px-6 font-sans luxury-gradient">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Brand Emotion */}
                <div className="text-center mb-24 max-w-3xl">
                    <div className="flex justify-center gap-1 mb-6 text-brand-gold">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-8 leading-tight">
                        Criamos este espaço com carinho para <br />
                        <span className="italic font-normal">valorizar a beleza feminina</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Acreditamos que cada mulher merece sentir-se deslumbrante em momentos especiais sem comprometer o orçamento. Nosso compromisso é oferecer elegância, exclusividade e confiança a cada cliente que entra no nosso mundo.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <div className="flex items-center gap-2 text-brand-black">
                            <Check className="text-brand-gold" size={20} />
                            <span className="text-xs uppercase tracking-widest font-bold">Vestidos de Grife</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-black">
                            <Check className="text-brand-gold" size={20} />
                            <span className="text-xs uppercase tracking-widest font-bold">Atendimento VIP</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-black">
                            <Check className="text-brand-gold" size={20} />
                            <span className="text-xs uppercase tracking-widest font-bold">Local Seguro</span>
                        </div>
                    </div>
                </div>

                {/* Workflow Cards */}
                <div className="w-full">
                    <h3 className="text-center text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-16">
                        Como Funciona a Experiência
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 group">
                        {workflow.map((item) => (
                            <div key={item.id} className="relative flex flex-col items-center text-center p-8 bg-white border border-brand-nude rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-brand-pink/30 hover:-translate-y-2 group-hover:scale-[0.98] hover:!scale-105 z-10">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-serif text-xl font-bold shadow-lg border-4 border-white">
                                    {item.id}
                                </div>
                                <h4 className="text-lg font-bold text-brand-black mb-4 mt-4 uppercase tracking-wider">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Button for this section */}
                <div className="mt-20">
                    <Button variant="outline" size="lg" className="rounded-xl px-12 uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold">
                        Agende sua prova hoje
                    </Button>
                </div>
            </div>
        </section>
    );
};
