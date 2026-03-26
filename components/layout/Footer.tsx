"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-brand-black text-white pt-20 pb-10 px-6 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-gold/20 pb-16">
                {/* Column 1: Brand */}
                <div className="col-span-1 md:col-span-1">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6 tracking-tight">
                        Realce da <span className="text-brand-gold">Beleza</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                        Ajudamos mulheres a brilharem em momentos especiais com vestidos elegantes sem precisar comprar. Proposta de luxo acessível para todas as mulheres.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://instagram.com/realce.da.beleza" target="_blank" className="p-2 rounded-full border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-all">
                            <Instagram size={18} />
                        </Link>
                        <Link href="https://facebook.com/realce.da.beleza" target="_blank" className="p-2 rounded-full border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-all">
                            <Facebook size={18} />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-brand-gold">Informações</h3>
                    <ul className="space-y-4">
                        <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Página Inicial</Link></li>
                        <li><Link href="/vestidos" className="text-gray-400 hover:text-white transition-colors text-sm">Nossos Vestidos</Link></li>
                        <li><Link href="/acessorios" className="text-gray-400 hover:text-white transition-colors text-sm">Acessórios de Luxo</Link></li>
                        <li><Link href="/sobre" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre Nós</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Details */}
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-brand-gold">Contacto</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-sm group">
                            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl group-hover:bg-brand-gold group-hover:text-white transition-all">
                                <Phone size={16} />
                            </div>
                            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">+244 943 700 307</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm group">
                            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl group-hover:bg-brand-gold group-hover:text-white transition-all">
                                <Mail size={16} />
                            </div>
                            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">info@realcedabeleza.com</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm group">
                            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl group-hover:bg-brand-gold group-hover:text-white transition-all whitespace-nowrap">
                                <MapPin size={16} />
                            </div>
                            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors leading-tight">
                                Camama, Frente ao Cemitério<br />
                                Luanda, Angola
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Location Map Intro */}
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-brand-gold">Horário</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex justify-between text-gray-400">
                            <span>Seg. - Sex.</span>
                            <span className="text-white">09h às 18h</span>
                        </li>
                        <li className="flex justify-between text-gray-400">
                            <span>Sábado</span>
                            <span className="text-white">09h às 15h</span>
                        </li>
                        <li className="flex justify-between text-gray-400">
                            <span>Dom. e Feriados</span>
                            <span className="text-brand-pink italic">Agendado</span>
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
