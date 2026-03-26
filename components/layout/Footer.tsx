"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-brand-black text-white pt-20 pb-10 px-6 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 border-b border-brand-gold/20 pb-16 px-4 md:px-0">
                {/* Column 1: Brand */}
                <div className="col-span-1">
                    <h2 className="text-3xl font-serif font-black text-white mb-6 tracking-tight">
                        Realce da <span className="text-brand-gold">Beleza</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8 font-sans">
                        Ajudamos mulheres a brilharem em momentos especiais com vestidos elegantes sem precisar comprar. Proposta de luxo acessível para todas as mulheres.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://instagram.com/realce.da.beleza" target="_blank" className="p-3 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                            <Instagram size={20} />
                        </Link>
                        <Link href="https://facebook.com/realce.da.beleza" target="_blank" className="p-3 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                            <Facebook size={20} />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="col-span-1 lg:pl-10">
                    <h3 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-brand-gold font-sans">Informações</h3>
                    <ul className="space-y-4 font-sans uppercase text-[10px] tracking-[0.2em] font-black">
                        <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Página Inicial</Link></li>
                        <li><Link href="/vestidos" className="text-gray-400 hover:text-white transition-colors">Nossos Vestidos</Link></li>
                        <li><Link href="/acessorios" className="text-gray-400 hover:text-white transition-colors">Acessórios</Link></li>
                        <li><Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Details */}
                <div className="col-span-1">
                    <h3 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-brand-gold font-sans">Contacto</h3>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 text-sm group">
                            <div className="p-3 bg-brand-gold/5 text-brand-gold rounded-full border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                                <Phone size={16} />
                            </div>
                            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors font-sans">+244 943 700 307</span>
                        </li>
                        <li className="flex items-center gap-4 text-sm group">
                            <div className="p-3 bg-brand-gold/5 text-brand-gold rounded-full border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                                <Mail size={16} />
                            </div>
                            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors font-sans">info@realcedabeleza.com</span>
                        </li>
                        <li className="flex items-start gap-4 text-sm group">
                            <div className="p-3 bg-brand-gold/5 text-brand-gold rounded-full border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shrink-0">
                                <MapPin size={16} />
                            </div>
                            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors leading-relaxed font-sans">
                                Camama, Frente ao Cemitério<br />
                                Luanda, Angola
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Schedule */}
                <div className="col-span-1 lg:pl-10">
                    <h3 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-brand-gold font-sans">Horário</h3>
                    <ul className="space-y-4 text-xs font-sans">
                        <li className="flex justify-between items-center text-gray-400 border-b border-brand-gold/5 pb-2">
                            <span className="uppercase tracking-widest font-black text-[9px]">Seg. - Sex.</span>
                            <span className="text-white font-bold">09h às 18h</span>
                        </li>
                        <li className="flex justify-between items-center text-gray-400 border-b border-brand-gold/5 pb-2">
                            <span className="uppercase tracking-widest font-black text-[9px]">Sábado</span>
                            <span className="text-white font-bold">09h às 15h</span>
                        </li>
                        <li className="flex justify-between items-center text-gray-400">
                            <span className="uppercase tracking-widest font-black text-[9px]">Dom. e Feriados</span>
                            <span className="text-brand-pink italic font-medium">Sob Agendamento</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p>&copy; {currentYear} Realce da Beleza. Todos os direitos reservados.</p>
                <div className="flex gap-6 uppercase tracking-widest font-mono text-[10px]">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacidade</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Termos de Uso</Link>
                </div>
            </div>
        </footer>
    );
};
