"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, MessageCircle, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />
            
            {/* Header Section */}
            <section className="relative pt-[150px] md:pt-[220px] pb-32 md:pb-48 px-6 bg-brand-black text-white text-center overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
                 <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-xs uppercase tracking-[0.3em] font-black text-brand-gold mb-4 inline-block opacity-80 animate-fade-in">Fale Conosco</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black mb-6 leading-tight drop-shadow-sm px-4">Entre em <br className="sm:hidden" /><span className="italic text-brand-gold">Sintonia</span></h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-medium px-4">Pronta para reservar sua peça favorita ou agendar uma prova? Nossa equipe está à disposição para te atender com carinho.</p>
                 </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-10 order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                             <div className="p-10 border border-brand-nude rounded-3xl shadow-xl shadow-brand-pink/5 hover:-translate-y-2 transition-all group cursor-pointer duration-500">
                                 <div className="p-4 bg-brand-nude text-brand-gold rounded-full w-fit mb-8 group-hover:scale-110 transition-transform">
                                     <Phone size={24} />
                                 </div>
                                 <h3 className="text-xl font-bold text-brand-black mb-2 uppercase tracking-widest font-serif">Ligue para reserva</h3>
                                 <p className="text-gray-500 text-sm mb-6">+244 943 700 307</p>
                                 <Link 
                                    href="tel:+244943700307"
                                    className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold hover:text-brand-black transition-colors"
                                 >
                                    Ligar agora
                                 </Link>
                             </div>
                             <div className="p-10 border border-brand-nude rounded-3xl shadow-xl shadow-brand-pink/5 hover:-translate-y-2 transition-all group cursor-pointer duration-500">
                                 <div className="p-4 bg-brand-nude text-brand-gold rounded-full w-fit mb-8 group-hover:scale-110 transition-transform">
                                     <MessageCircle size={24} />
                                 </div>
                                 <h3 className="text-xl font-bold text-brand-black mb-2 uppercase tracking-widest font-serif">WhatsApp Direto</h3>
                                 <p className="text-gray-500 text-sm mb-6">Fale agora com um especialista</p>
                                 <Link 
                                    href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido."
                                    target="_blank"
                                    className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold hover:text-brand-black transition-colors"
                                 >
                                    Enviar mensagem
                                 </Link>
                             </div>
                        </div>

                        <div className="p-10 border border-brand-nude rounded-3xl shadow-xl shadow-brand-pink/5 hover:-translate-y-2 transition-all group cursor-pointer duration-500">
                             <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                                 <div className="p-4 bg-brand-nude text-brand-gold rounded-full w-fit group-hover:scale-110 transition-transform">
                                     <MapPin size={24} />
                                 </div>
                                 <div className="flex-1">
                                     <h3 className="text-xl font-bold text-brand-black mb-2 uppercase tracking-widest font-serif">Localização Física</h3>
                                     <p className="text-gray-500 text-sm mb-2">Camama, Frente ao Cemitério, Luanda - Angola</p>
                                     <p className="text-xs text-brand-gold font-bold uppercase tracking-widest">Aberto de Seg à Sáb</p>
                                 </div>
                                 <Link 
                                    href="https://maps.google.com?q=Camama,Luanda,Angola"
                                    target="_blank"
                                    className="px-6 py-3 bg-brand-black text-white rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors"
                                 >
                                    Como Chegar
                                 </Link>
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="flex items-center gap-6 p-8 border border-brand-nude rounded-3xl hover:bg-brand-nude/30 transition-all duration-300">
                                 <Mail size={20} className="text-brand-gold shrink-0" />
                                 <div>
                                     <h4 className="font-bold text-xs uppercase tracking-widest text-brand-black mb-1">E-mail</h4>
                                     <p className="text-xs text-brand-black">info@realcedabeleza.com</p>
                                 </div>
                             </div>
                             <div className="flex items-center gap-6 p-8 border border-brand-nude rounded-3xl hover:bg-brand-nude/30 transition-all duration-300">
                                 <Clock size={20} className="text-brand-gold shrink-0" />
                                 <div>
                                     <h4 className="font-bold text-xs uppercase tracking-widest text-brand-black mb-1">Horário</h4>
                                     <p className="text-xs text-brand-black">09:00 - 18:00</p>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Integrated Map */}
                    <div className="order-1 lg:order-2 h-[500px] lg:h-full w-full rounded-3xl overflow-hidden shadow-2xl relative group">
                         <div className="absolute inset-0 bg-brand-nude/30 animate-pulse group-hover:opacity-0 transition-opacity z-[1]" />
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.57790757262!2d13.25!3d-8.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f38e4a9e5b7b%3A0x6bba4f2795f9c6d3!2sCamama%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1711475000000!5m2!1spt-PT!2sao" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="relative z-0 grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-1000"
                         ></iframe>
                         <div className="absolute top-10 left-10 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white z-10 shadow-xl max-w-[200px]">
                            <p className="text-[10px] uppercase tracking-widest font-black text-brand-gold mb-2">Visite-nos</p>
                            <p className="text-xs text-brand-black font-bold leading-tight">Frente ao Cemitério do Camama, o ponto mais fácil de encontrar.</p>
                         </div>
                    </div>
                 </div>
            </section>

            {/* Social Connection CTA */}
            <section className="py-24 px-6 bg-brand-nude/50 mb-10">
                 <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-12 leading-tight">Siga o nosso <span className="italic text-brand-gold">Dia a Dia</span></h2>
                    <div className="flex flex-wrap justify-center gap-10">
                         <Link 
                            href="https://instagram.com/realce.da.beleza"
                            target="_blank"
                            className="flex items-center gap-3 p-6 bg-white rounded-3xl shadow-xl shadow-brand-pink/5 border border-brand-nude hover:border-brand-gold hover:scale-105 transition-all duration-500"
                         >
                            <Instagram size={24} className="text-brand-gold" />
                            <span className="font-bold uppercase tracking-widest text-xs text-brand-black">Instagram</span>
                         </Link>
                         <Link 
                            href="https://facebook.com/realce.da.beleza"
                            target="_blank"
                            className="flex items-center gap-3 p-6 bg-white rounded-3xl shadow-xl shadow-brand-pink/5 border border-brand-nude hover:border-brand-gold hover:scale-105 transition-all duration-500"
                         >
                            <Facebook size={24} className="text-brand-gold" />
                            <span className="font-bold uppercase tracking-widest text-xs text-brand-black">Facebook</span>
                         </Link>
                    </div>
                 </div>
            </section>

            <Footer />
        </main>
    );
}
