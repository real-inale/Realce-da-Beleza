import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SummarySection } from "@/components/sections/SummarySection";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { MessageCircle, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About & Workflow Section */}
      <SummarySection />

      {/* Highlight Catalog Section */}
      <CatalogSection />

      {/* Mini Testimonial Section */}
      <section className="testimonials py-32 px-6 bg-brand-pink/10 luxury-gradient">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
             <div className="text-center mb-20 max-w-2xl flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-gold mb-6 inline-block">Depoimentos Realce</span>
                <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-black leading-tight mb-8">
                    O que nossas <br /><span className="italic font-normal text-brand-gold">clientes dizem</span>
                </h2>
                <div className="w-20 h-1 bg-brand-gold/20 rounded-full mb-10" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Ana Paula", role: "Casamento - Madrinha", text: "Fiquei encantada com a variedade! O vestido coube perfeitamente e recebi muitos elogios. Recomendo muito!" },
                  { name: "Beatriz Silva", role: "Formatura", text: "Processo de aluguer super simples e o atendimento no Camama é maravilhoso. Me senti uma princesa." },
                  { name: "Carla Mendes", role: "Sessão Fotográfica", text: "Vestidos de altíssima qualidade. O 'Aurora Elegance' é simplesmente deslumbrante na câmera." },
                ].map((testimonial, i) => (
                  <div key={i} className="glass-card p-10 rounded-3xl border-brand-nude hover:border-brand-gold transition-all duration-500 shadow-xl shadow-brand-pink/5">
                     <p className="text-gray-600 italic mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                     <div className="flex items-center gap-4 pt-4 border-t border-brand-nude">
                        <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center font-serif font-bold text-lg uppercase tracking-widest shadow-lg">
                           {testimonial.name[0]}
                        </div>
                        <div>
                           <h4 className="font-bold text-brand-black uppercase tracking-widest text-xs mb-1">{testimonial.name}</h4>
                           <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">{testimonial.role}</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-32 px-6 bg-brand-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-gold mb-8 inline-block opacity-80">FAÇA PARTE DO LUXO</span>
            <h2 className="text-4xl md:text-7xl font-serif font-black mb-10 leading-tight">
                Pronta para <span className="text-brand-gold italic font-normal">brilhar</span> no seu próximo evento? ✨
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-[600px] mx-auto leading-relaxed font-sans">
                Não deixe para a última hora. Reserve seu vestido exclusivo hoje mesmo e garanta sua data favorita no <span className="text-white font-bold">Camama</span>.
            </p>
            <Link 
                href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido."
                target="_blank"
            >
                <Button size="lg" className="rounded-full px-16 group hover:shadow-brand-gold/30 shadow-2xl shadow-brand-gold/10 transition-all duration-700 active:scale-90 bg-white text-black hover:bg-brand-gold hover:text-white border-white hover:border-brand-gold">
                   Agendar Minha Reserva
                   <MessageCircle size={20} className="ml-4 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                </Button>
            </Link>
        </div>
      </section>

      {/* Location Bar */}
      <div className="location-bar bg-brand-nude py-6 px-6 border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-brand-black/70">
            <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-gold" />
                <span>Camama (Frente ao Cemitério)</span>
            </div>
            <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold" />
                <span>+244 943 700 307</span>
            </div>
            <div className="flex items-center gap-3">
                <Instagram size={16} className="text-brand-gold" />
                <span>@realcedabeleza</span>
            </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
