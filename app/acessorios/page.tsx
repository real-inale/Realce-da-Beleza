"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle, ShoppingBag, Eye, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const allAcessorios = [
    { id: 101, name: "Brincos Crystal Drop", price: "5.500 Kz", type: "Brincos", color: "Prata/Cristal", img: "/catalog_main.png" },
    { id: 102, name: "Clutch Satin Rose", price: "8.000 Kz", type: "Malas", color: "Rosa Cetim", img: "/catalog_main.png" },
    { id: 103, name: "Tiara Royal Pearl", price: "12.000 Kz", type: "Coroas/Tiaras", color: "Pérola/Branco", img: "/catalog_main.png" },
    { id: 104, name: "Colar Majestic Gold", price: "9.500 Kz", type: "Colares", color: "Dourado", img: "/catalog_main.png" },
    { id: 105, name: "Brincos Golden Leaf", price: "4.800 Kz", type: "Brincos", color: "Dourado", img: "/catalog_main.png" },
    { id: 106, name: "Bolsa Velvet Night", price: "10.000 Kz", type: "Malas", color: "Preto Veludo", img: "/catalog_main.png" },
    { id: 107, name: "Coroa Diamond Dream", price: "15.000 Kz", type: "Coroas/Tiaras", color: "Prata/Brilhante", img: "/catalog_main.png" },
    { id: 108, name: "Brincos Emerald Light", price: "6.200 Kz", type: "Brincos", color: "Verde Esmeralda", img: "/catalog_main.png" },
];

export default function AcessoriosPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />
            
            {/* Header Section */}
            <section 
                className="relative w-full min-h-[65vh] flex flex-col items-center justify-center px-6 bg-brand-black text-white text-center overflow-hidden z-10"
                style={{ paddingTop: '160px', paddingBottom: '80px' }}
            >
                 <div className="absolute -top-10 -right-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px]" />
                 <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px]" />
                 
                 <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex justify-center gap-1 mb-6 text-brand-gold">
                        <Sparkles size={20} fill="currentColor" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 inline-block">Detalhes que fazem a diferença</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-black">Acessórios de <span className="italic">Luxo</span></h1>
                    <p className="text-gray-600 max-w-xl mx-auto">O toque final perfeito para o seu look. Alugue acessórios exclusivos de altíssima qualidade para completar sua elegância.</p>
                 </div>
            </section>

            {/* Accessories Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {allAcessorios.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="relative aspect-square rounded-full overflow-hidden bg-brand-nude mb-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 border-4 border-white hover:border-brand-gold">
                                <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Link 
                                        href={`https://wa.me/244943700307?text=Olá, gostaria de reservar o acessório ${item.name}.`}
                                        target="_blank"
                                    >
                                        <Button className="bg-white text-brand-black border-white hover:bg-brand-gold hover:text-white hover:border-brand-gold text-[10px] px-4 py-2">
                                            Reservar
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-1">{item.type}</p>
                                <h3 className="text-base font-serif font-bold text-brand-black mb-1">{item.name}</h3>
                                <p className="text-xs font-bold tracking-[0.1em] text-gray-500 uppercase">{item.color}</p>
                                <div className="mt-4 text-brand-black font-black tracking-widest text-sm">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Pack Section */}
            <section className="py-24 px-6 bg-brand-black text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl relative group">
                         <Image src="/catalog_main.png" alt="Combo Promo" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
                         <div className="absolute bottom-10 left-10 py-2 px-6 bg-brand-gold text-white font-bold rounded-full text-xs uppercase tracking-widest">Oferta de Inauguração</div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            Combo <span className="text-brand-gold italic">Look Completo</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Ao alugar um de nossos vestidos premium, você ganha 20% de desconto no aluguer de qualquer acessório da nossa galeria. Sinta-se pronta sem complicação.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/vestidos" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full">Escolher Vestido</Button>
                            </Link>
                            <Link 
                                href="https://wa.me/244943700307?text=Olá, quero saber mais sobre o combo Look Completo."
                                target="_blank"
                                className="w-full sm:w-auto"
                            >
                                <Button variant="secondary" size="lg" className="w-full bg-white text-brand-black hover:bg-brand-gold hover:text-white border-white">Mais Info</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
