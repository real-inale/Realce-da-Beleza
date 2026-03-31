'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <header className="bg-brand-black sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 z-50" onClick={() => setIsOpen(false)}>
          <Image src="/images/logo_realce.svg" alt="Realce da Beleza" width={200} height={46} className="object-contain h-10 md:h-12 w-auto" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {[
            { name: 'Home', href: '/' },
            { name: 'Vestidos', href: '/vestidos' },
            { name: 'Acessórios', href: '/acessorios' },
            { name: 'Sobre', href: '/sobre' },
            { name: 'Contacto', href: '/contacto' }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`font-title tracking-wide text-lg transition-colors duration-300 ${pathname === link.href ? 'text-gold' : 'text-gray-200 hover:text-gold'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold z-50 p-2 focus:outline-none" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-black z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        >
          {[
            { name: 'Home', href: '/' },
            { name: 'Vestidos', href: '/vestidos' },
            { name: 'Acessórios', href: '/acessorios' },
            { name: 'Sobre', href: '/sobre' },
            { name: 'Contacto', href: '/contacto' }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={toggleMenu} 
              className={`font-title text-3xl tracking-wide transition-colors duration-300 ${pathname === link.href ? 'text-gold' : 'text-white hover:text-gold'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/244943700307" className="mt-8 bg-gold text-brand-black px-8 py-3 rounded-full font-title text-xl">
            Agendar Prova
          </a>
        </div>
      </div>
    </header>
  )
}