"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle, Filter, ChevronDown, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const allVestidos = [
    { id: 1, name: "Noir Elegance", price: "20.000 Kz", type: "Festa/Gala", color: "Preto", size: "M", img: "/blak1.jpg" },
    { id: 2, name: "Onyx Glow", price: "22.000 Kz", type: "Casamento", color: "Preto", size: "S", img: "/blak2.jpg" },
    { id: 3, name: "Obsidian Night", price: "25.000 Kz", type: "Gala", color: "Preto", size: "L", img: "/blak3.jpg" },
    { id: 4, name: "Emerald Forest", price: "18.000 Kz", type: "Casamento", color: "Verde", size: "M", img: "/gree1.jpg" },
    { id: 5, name: "Jade Mist", price: "15.000 Kz", type: "Formatura", color: "Verde", size: "S", img: "/gree2.jpg" },
    { id: 6, name: "Verde Imperial", price: "30.000 Kz", type: "Gala", color: "Verde", size: "M", img: "/gree3.jpg" },
    { id: 7, name: "Passion Red", price: "20.000 Kz", type: "Aniversário", color: "Vermelho", size: "M", img: "/red1.jpg" },
    { id: 8, name: "Scarlet Night", price: "28.000 Kz", type: "Casamento", color: "Vermelho", size: "L", img: "/red2.jpg" },
    { id: 9, name: "Mint Breeze", price: "15.000 Kz", type: "Sessão Fotográfica", color: "Verde Água", size: "S", img: "/gree_clen1.jpg" },
    { id: 10, name: "Classic Green", price: "12.000 Kz", type: "Festa", color: "Verde", size: "M", img: "/gree_clen2.jpg" },
    { id: 11, name: "Elegance Gold", price: "35.000 Kz", type: "Noiva/Civil", color: "Dourado", size: "M", img: "/610871831_1358911129589293_7812603932684902453_n.jpg" },
    { id: 12, name: "Royal Purple", price: "25.000 Kz", type: "Aniversário", color: "Roxo", size: "L", img: "/587778859_18031797932727519_3048144037810329104_n.jpg" },
    { id: 13, name: "Sparkle Dream", price: "30.000 Kz", type: "Gala", color: "Dourado", size: "M", img: "/631697038_18039536825727519_3775104951079426099_n.jpg" },
];

export default function VestidosPage() {
    const [selectedType, setSelectedType] = useState("Todos");
    const [selectedSize, setSelectedSize] = useState("Todos");

    const filteredVestidos = allVestidos.filter(v => 
        (selectedType === "Todos" || v.type === selectedType) &&
        (selectedSize === "Todos" || v.size === selectedSize)
    );

    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />
            
            {/* Header Section */}
            <section className="relative pt-40 pb-20 px-6 bg-brand-black text-white text-center">
                 <div className="absolute inset-0 opacity-20">
                     <Image src="/catalog_main.png" alt="Catalog background" fill className="object-cover" />
                 </div>
                 <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 inline-block">Nossa Coleção 2026</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Vestidos que <span className="italic">contam histórias</span></h1>
                    <p className="text-gray-400 max-w-xl mx-auto">Encontre a peça perfeita para o seu próximo grande momento. Aluguer exclusivo com atendimento personalizado no Camama.</p>
                 </div>
            </section>

            {/* Catalog & Filters */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                {/* Filters Bar */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-gray-100 pb-10">
                    <div className="flex items-center gap-2 text-brand-black font-bold uppercase tracking-widest text-xs">
                        <Filter size={18} className="text-brand-gold" />
                        <span>Filtros</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Tipo:</span>
                            <div className="flex gap-2">
                                {["Todos", "Casamento", "Festa/Gala", "Noiva/Civil", "Formatura"].map(t => (
                                    <button 
                                        key={t}
                                        onClick={() => setSelectedType(t)}
                                        className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${selectedType === t ? "bg-brand-black text-white" : "bg-brand-nude text-brand-black hover:bg-brand-gold hover:text-white"}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Tamanho:</span>
                            <div className="flex gap-2">
                                {["Todos", "S", "M", "L"].map(s => (
                                    <button 
                                        key={s}
                                        onClick={() => setSelectedSize(s)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold transition-all border ${selectedSize === s ? "bg-brand-black text-white border-brand-black" : "bg-white text-brand-black border-gray-200 hover:border-brand-gold hover:text-brand-gold"}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em]">
                        Mostrando <span className="text-brand-black">{filteredVestidos.length}</span> resultados
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                    {filteredVestidos.map((vestido) => (
                        <div key={vestido.id} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-brand-nude mb-5 shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                                <Image 
                                    src={vestido.img} 
                                    alt={vestido.name} 
                                    fill 
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-brand-black shadow-xl z-10">
                                    {vestido.size}
                                </div>
                                <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6 z-20">
                                    <Link 
                                        href={`https://wa.me/244943700307?text=Olá, gostaria de reservar o vestido ${vestido.name} am tamanho ${vestido.size}.`}
                                        target="_blank"
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-white text-brand-black border-white hover:bg-brand-gold hover:text-white hover:border-brand-gold shadow-2xl transition-all duration-500 py-6 rounded-2xl text-[10px] uppercase font-black tracking-widest translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                            <ShoppingBag size={14} className="mr-2" />
                                            Reservar agora
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="px-2">
                                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-gold mb-1 opacity-80">{vestido.type}</p>
                                <h3 className="text-base md:text-lg font-serif font-black text-brand-black mb-1 group-hover:text-brand-gold transition-colors truncate">{vestido.name}</h3>
                                <p className="text-sm font-black tracking-widest text-brand-black/70">{vestido.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredVestidos.length === 0 && (
                    <div className="py-20 text-center flex flex-col items-center gap-6">
                        <ShoppingBag size={64} className="text-brand-nude" />
                        <h3 className="text-2xl font-serif font-bold text-brand-black">Nenhum vestido encontrado</h3>
                        <p className="text-gray-500">Tente ajustar seus filtros para encontrar o que procura.</p>
                        <Button variant="outline" onClick={() => { setSelectedType("Todos"); setSelectedSize("Todos"); }}>Limpar Filtros</Button>
                    </div>
                )}
            </section>

            {/* Support CTA */}
            <section className="py-20 px-6 bg-brand-nude">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-black mb-4">Ainda com dúvidas?</h2>
                        <p className="text-gray-600">Peça ajuda a uma de nossas especialistas para escolher o modelo ideal para o seu corpo e evento.</p>
                    </div>
                    <Link href="https://wa.me/244943700307?text=Olá, preciso de ajuda para escolher um vestido." target="_blank">
                        <Button size="lg" variant="primary" className="gap-2">
                            <MessageCircle size={20} />
                            Falar com Especialista
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
