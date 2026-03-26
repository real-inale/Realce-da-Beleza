"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, MessageCircle, MapPin, Mail, Clock, Instagram, Facebook, Heart, Shield, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 bg-brand-nude luxury-gradient text-center overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 inline-block">Nossa Essência</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-brand-black leading-tight">Valorizando a <span className="italic">Beleza Feminina</span></h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">Conheça a história e o propósito por trás da Realce da Beleza, o ponto de referência para aluguer de vestidos de luxo em Luanda.</p>
                </div>
            </section>

            {/* Emotional Story telling */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
                    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl skew-x-1 group">
                         <Image src="/catalog_main.png" alt="Realce da Beleza Store" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
                         <div className="absolute bottom-10 left-10 p-8 glass-card rounded-2xl border-white bg-white/20 text-white">
                            <h3 className="text-2xl font-serif font-bold mb-2">Fundado com Ambição</h3>
                            <p className="text-sm">Criado para empoderar mulheres angolanas.</p>
                         </div>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-10 leading-tight">
                            Uma história de <br /><span className="text-brand-gold italic">elegância e confiança</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                A <span className="font-bold text-brand-black">Realce da Beleza</span> nasceu de um desejo simples: permitir que toda mulher se sinta extraordinária em seus momentos mais especiais, sem a necessidade de investir grandes quantias em peças que usará poucas vezes.
                            </p>
                            <p>
                                Nossa curadoria é feita com o maior cuidado, selecionando vestidos que não apenas seguem as tendências internacionais de alta costura, mas que também valorizam a diversidade de corpos e estilos da mulher moderna em Luanda.
                            </p>
                            <p>
                                Situados no coração do <span className="text-brand-gold font-bold">Camama</span>, abrimos nossas portas para oferecer não apenas um catálogo, mas uma verdadeira experiência de transformação. Cada atendimento é único, cada ajuste é preciso e cada cliente é tratada como a estrela que ela é.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-brand-nude">
                             <div>
                                <h4 className="text-3xl font-serif font-bold text-brand-black mb-2 tracking-tighter">Missão</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">Proporcionar luxo acessível e elevar a autoestima feminina através da moda de alta qualidade.</p>
                             </div>
                             <div>
                                <h4 className="text-3xl font-serif font-bold text-brand-black mb-2 tracking-tighter">Visão</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">Ser a marca líder em aluguer de vestidos em Angola, reconhecida pela exclusividade e excelência.</p>
                             </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-brand-black text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
                <div className="max-w-7xl mx-auto">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-16 inline-block">Nossos Valores</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                         {[
                             { icon: <Heart className="text-brand-gold" />, title: "Paixão", desc: "Amamos o que fazemos e isso reflete em cada detalhe de nossa curadoria." },
                             { icon: <Shield className="text-brand-gold" />, title: "Confiança", desc: "Local físico estabelecido no Camama para total segurança de nossas clientes." },
                             { icon: <Star className="text-brand-gold" />, title: "Qualidade", desc: "Apenas vestidos de alta costura e acessórios de luxo impecáveis." },
                             { icon: <Sparkles className="text-brand-gold" />, title: "Exclusividade", desc: "Peças limitadas para garantir que você seja única no seu evento speciale." }
                         ].map((item, i) => (
                             <div key={i} className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all group scale-100 hover:scale-105 duration-500">
                                 <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-brand-gold/10 transition-colors">
                                     {item.icon}
                                 </div>
                                 <h3 className="text-lg font-bold uppercase tracking-widest">{item.title}</h3>
                                 <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                             </div>
                         ))}
                    </div>
                </div>
            </section>

            {/* Visit Us Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-center">
                 <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-brand-black mb-8 leading-tight">Visite nosso <span className="italic text-brand-gold">Espaço Físico</span></h2>
                    <p className="text-gray-600 mb-12 text-lg">Nada substitui o toque e a prova de um vestido perfeito. Estamos localizados no Camama, prontos para te receber com carinho.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        <div className="flex flex-col items-center gap-4 p-8 border border-brand-nude rounded-3xl shadow-lg shadow-brand-pink/10 hover:-translate-y-2 transition-transform duration-500">
                             <div className="p-4 bg-brand-nude text-brand-gold rounded-full">
                                <MapPin size={24} />
                             </div>
                             <h4 className="font-bold text-brand-black uppercase tracking-widest text-sm">Localização</h4>
                             <p className="text-gray-500 text-sm">Camama, Frente ao Cemitério, Luanda - Angola</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-8 border border-brand-nude rounded-3xl shadow-lg shadow-brand-pink/10 hover:-translate-y-2 transition-transform duration-500">
                             <div className="p-4 bg-brand-nude text-brand-gold rounded-full">
                                <Phone size={24} />
                             </div>
                             <h4 className="font-bold text-brand-black uppercase tracking-widest text-sm">Atendimento</h4>
                             <p className="text-gray-500 text-sm">+244 943 700 307 - Agende sua Prova</p>
                        </div>
                    </div>

                    <Link 
                        href="https://wa.me/244943700307?text=Olá, gostaria de agendar uma visita para provar vestidos."
                        target="_blank"
                    >
                        <Button size="lg" className="rounded-full px-12 gap-3 group">
                            Agendar Visita Agora
                            <MessageCircle size={20} className="group-hover:scale-125 transition-all" />
                        </Button>
                    </Link>
                 </div>
            </section>

            <Footer />
        </main>
    );
}
