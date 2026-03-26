"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShoppingBag, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

const vestidosDestaque = [
    { id: 1, name: "Noir Elegance", price: "20.000 Kz", type: "Festa/Gala", img: "/blak1.jpg" },
    { id: 2, name: "Emerald Forest", price: "18.000 Kz", type: "Casamento", img: "/gree1.jpg" },
    { id: 3, name: "Passion Red", price: "20.000 Kz", type: "Aniversário", img: "/red1.jpg" },
    { id: 4, name: "Obsidian Night", price: "25.000 Kz", type: "Gala", img: "/blak3.jpg" },
    { id: 5, name: "Jade Mist", price: "15.000 Kz", type: "Formatura", img: "/gree2.jpg" },
    { id: 6, name: "Scarlet Night", price: "28.000 Kz", type: "Casamento", img: "/red2.jpg" },
];

export const CatalogSection = () => {
    return (
        <section className="catalog py-32 px-6 font-sans bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-4 md:px-0">
                    <div className="max-w-xl">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-gold mb-6 inline-block opacity-80 animate-fade-in">Galeria de Destaque</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-black leading-tight">
                            A <span className="italic font-normal text-brand-gold">Essência</span> do <br className="hidden md:block" /> Nosso Acervo
                        </h2>
                    </div>
                    <Link href="/vestidos">
                        <Button variant="ghost" size="lg" className="group">
                            Ver Catálogo Completo
                            <div className="ml-2 w-10 h-[1px] bg-brand-black transition-all group-hover:w-16 group-hover:bg-brand-gold" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14">
                    {vestidosDestaque.map((item) => (
                        <div key={item.id} className="group flex flex-col items-center">
                            {/* Card Image Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-brand-nude shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-2">
                                <Image 
                                    src={item.img} 
                                    alt={item.name} 
                                    fill 
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 flex flex-col gap-4">
                                    <Link 
                                        href={`https://wa.me/244943700307?text=Olá, gostaria de reservar o vestido ${item.name}.`} 
                                        target="_blank"
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-white text-black border-white hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-500 rounded-xl py-6 font-black text-[10px] tracking-widest active:scale-95">
                                            <ShoppingBag size={18} className="mr-3" />
                                            Reservar via WhatsApp
                                        </Button>
                                    </Link>
                                </div>
                                <div className="absolute top-6 left-6 py-2 px-6 bg-white/95 backdrop-blur-md rounded-full border border-black/5 text-[9px] uppercase tracking-[0.2em] font-black group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                                    {item.type}
                                </div>
                            </div>
                            
                            {/* Info */}
                            <div className="mt-10 text-center px-4">
                                <h4 className="text-xl md:text-2xl font-serif font-black text-brand-black mb-3 hover:text-brand-gold transition-colors cursor-pointer leading-tight">{item.name}</h4>
                                <p className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs md:text-sm font-sans mb-6 opacity-90">{item.price}</p>
                                <div className="flex gap-4 justify-center">
                                    <div className="w-4 h-4 rounded-full bg-brand-pink border border-black/5 shadow-inner" title="Rosa" />
                                    <div className="w-4 h-4 rounded-full bg-brand-gold border border-black/5 shadow-inner" title="Dourado" />
                                    <div className="w-4 h-4 rounded-full bg-brand-black border border-black/5 shadow-inner" title="Preto" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
