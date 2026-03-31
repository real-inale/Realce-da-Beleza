import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-8 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-title mb-4 text-gold">Realce da Beleza</h3>
          <p className="font-body text-gray-200">O luxo e a elegância ao seu alcance. Ajudamos mulheres a brilharem em momentos especiais com vestidos de alta costura sem a necessidade de compra.</p>
        </div>
        <div>
          <h3 className="text-xl font-title mb-4 text-gold">Informações</h3>
          <ul className="space-y-2 font-body text-gray-200">
            <li><Link href="/" className="hover:text-gold transition">Página Inicial</Link></li>
            <li><Link href="/vestidos" className="hover:text-gold transition">Nossos Vestidos</Link></li>
            <li><Link href="/acessorios" className="hover:text-gold transition">Acessórios</Link></li>
            <li><Link href="/sobre" className="hover:text-gold transition">Sobre Nós</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-title mb-4 text-gold">Contacto</h3>
          <div className="font-body text-gray-200 space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold group-hover:text-brand-black transition-colors duration-300">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <a href="tel:+244943700307" className="hover:text-gold transition">+244 943 700 307</a>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold group-hover:text-brand-black transition-colors duration-300">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <a href="mailto:info@realcedabeleza.com" className="hover:text-gold transition text-sm sm:text-base">info@realcedabeleza.com</a>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gold transition-colors duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold group-hover:text-brand-black transition-colors duration-300">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="text-sm sm:text-base">Camama, Frente ao Cemitério, Luanda, Angola</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-title mb-4 text-gold shrink-0">Horário</h3>
          <div className="font-body text-gray-200 space-y-2">
            <div>Seg. - Sex.: 09h às 18h</div>
            <div>Sábado: 09h às 15h</div>
            <div>Dom. e Feriados: Sob Agendamento</div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <div className="text-gold font-title text-xl">Realce da Beleza</div>
            <div className="text-gray-400 font-body">&copy; {new Date().getFullYear()} Realce da Beleza. Todos os direitos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}