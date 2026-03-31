'use client'
import { useState } from 'react'
import Link from 'next/link'
import { accessories } from '../../lib/accessories'

export default function Acessorios() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string | null>(null)

  // Extrair todos os tipos únicos de acessórios
  const types = Array.from(new Set(accessories.map(a => a.type)))

  // Filtragem
  const filteredAccessories = accessories.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || (a.description || '').toLowerCase().includes(searchTerm.toLowerCase())
    const matchType = selectedType ? a.type === selectedType : true
    return matchSearch && matchType
  })

  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-title text-center mb-8">Nossos Acessórios</h1>

        {/* Buscador e Filtros */}
        <div className="mb-10 w-full max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por colar, tiara, brincos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
            />
            <div className="absolute left-4 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors ${selectedType === null ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-gold hover:text-gold'}`}
            >
              Todos
            </button>
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors ${selectedType === type ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-gold hover:text-gold'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Acessórios */}
        {filteredAccessories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredAccessories.map((a) => (
              <div key={a.id} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <Link href={`/acessorios/${a.id}`} className="relative block aspect-square bg-gray-100 shrink-0 cursor-pointer overflow-hidden">
                  {a.images && a.images.length > 0 ? (
                    <img src={a.images[0]} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Sem Imagem</div>
                  )}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <div className="p-5 text-center flex-1 flex flex-col">
                  <h3 className="text-xl font-title mb-2">{a.title}</h3>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-4 mx-auto w-fit px-2 py-1 rounded bg-gray-100 text-gray-800">
                    {a.availability === 'available' ? 'Disponível' : a.availability === 'low' ? 'Poucas unidades' : 'Indisponível'}
                  </div>
                  <div className="mt-auto">
                    <p className="text-lg text-gold font-semibold mb-3">{a.price ?? 'Sob consulta'}</p>
                    <a href={`https://wa.me/244943700307?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o acessório ${a.title}. Está disponível?`)}`} className="bg-gold text-black px-5 py-2.5 w-full rounded-md mt-2 inline-flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                      Reservar via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 font-body">Nenhum acessório encontrado com essa busca.</p>
            <button onClick={() => { setSearchTerm(''); setSelectedType(null); }} className="mt-4 text-gold hover:underline">Limpar filtros</button>
          </div>
        )}
      </div>
    </div>
  )
}