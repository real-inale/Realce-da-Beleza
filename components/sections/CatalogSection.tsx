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
        <section className="catalog py-24 px-6 font-sans bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 inline-block">Galeria Exclusiva</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-black leading-tight">
                            Destaques da <span className="italic">Nossa Coleção</span>
                        </h2>
                    </div>
                    <Link href="/vestidos">
                        <Button variant="ghost" size="lg" className="group">
                            Ver Catálogo Completo
                            <div className="ml-2 w-10 h-[1px] bg-brand-black transition-all group-hover:w-16 group-hover:bg-brand-gold" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {vestidosDestaque.map((item) => (
                        <div key={item.id} className="group flex flex-col items-center">
                            {/* Card Image Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl bg-brand-nude shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-2">
                                <Image 
                                    src={item.img} 
                                    alt={item.name} 
                                    fill 
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col gap-4">
                                    <Link 
                                        href={`https://wa.me/244943700307?text=Olá, gostaria de reservar o vestido ${item.name}.`} 
                                        target="_blank"
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-brand-gold border-brand-gold hover:bg-white hover:text-brand-gold hover:border-white transition-all">
                                            <MessageCircle size={18} className="mr-2" />
                                            Reservar via WhatsApp
                                        </Button>
                                    </Link>
                                </div>
                                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-all duration-500">
                                    <button className="p-3 bg-white text-brand-black rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-md">
                                        <Heart size={18} />
                                    </button>
                                    <button className="p-3 bg-white text-brand-black rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-md">
                                        <Eye size={18} />
                                    </button>
                                </div>
                                <div className="absolute top-6 left-6 py-1 px-4 bg-white/50 backdrop-blur-md rounded-full border border-white/20 text-[10px] uppercase tracking-widest font-bold">
                                    {item.type}
                                </div>
                            </div>
                            
                            {/* Info */}
                            <div className="mt-8 text-center">
                                <h4 className="text-xl font-serif font-bold text-brand-black mb-2 hover:text-brand-gold transition-colors cursor-pointer">{item.name}</h4>
                                <p className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">{item.price}</p>
                                <div className="flex gap-2 justify-center">
                                    <div className="w-3 h-3 rounded-full bg-brand-pink border border-gray-200" />
                                    <div className="w-3 h-3 rounded-full bg-brand-gold border border-gray-200" />
                                    <div className="w-3 h-3 rounded-full bg-brand-black border border-gray-200" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
