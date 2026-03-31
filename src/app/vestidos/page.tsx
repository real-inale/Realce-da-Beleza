'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { dresses } from '../../lib/dresses'

export default function Vestidos() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [colorsOpen, setColorsOpen] = useState(false)
  // use shared dress data
  const dressesData = dresses

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7710/ingest/ad6744e7-9db0-45c9-a5cf-f861a5ebc74f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36abe8'},body:JSON.stringify({sessionId:'36abe8',runId:'pre-fix',hypothesisId:'H1',location:'src/app/vestidos/page.tsx:14',message:'vestidos list mounted',data:{totalDresses:dressesData.length,hasImageInCards:dressesData.some((d)=>Boolean(d.images?.length))},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }, [dressesData])

  const filteredDresses = selectedColor ? dressesData.filter(d => d.colors.includes(selectedColor)) : dressesData

  const colorGroups = [
    {
      name: 'Pastéis',
      colors: [
        { key: 'rosa', name: 'Rosa', hex: '#F8D7DA' },
        { key: 'nude', name: 'Nude', hex: '#F5E6E8' },
      ],
    },
    {
      name: 'Escuros',
      colors: [
        { key: 'preto', name: 'Preto', hex: '#111111' },
        { key: 'azul-escuro', name: 'Azul', hex: '#1E3A8A' },
      ],
    },
    {
      name: 'Neutros',
      colors: [
        { key: 'branco', name: 'Branco', hex: '#FFFFFF' },
        { key: 'bege', name: 'Bege', hex: '#EDE6E3' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-title text-center mb-8">Nossos Vestidos</h1>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center items-center">
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => setColorsOpen(!colorsOpen)}
              aria-expanded={colorsOpen}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white hover:shadow-sm"
            >
              <span className="font-body font-semibold">Cor</span>
              <span className="ml-2 text-sm text-gray-500">{selectedColor ? selectedColor : ''}</span>
              <svg className={`w-4 h-4 ml-2 transition-transform ${colorsOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {colorsOpen && (
              <div className="bg-white border border-gray-200 p-4 rounded shadow-sm ml-2">
                <div className="flex flex-col gap-2">
                  {colorGroups.map((group) => (
                    <div key={group.name} className="flex items-start gap-3">
                      <div className="text-sm font-semibold text-gray-700 w-28 mt-1">{group.name}:</div>
                      <div className="flex gap-2 flex-wrap">
                        {group.colors.map((c) => (
                          <button
                            key={c.key}
                            type="button"
                            onClick={() => setSelectedColor(c.key === selectedColor ? null : c.key)}
                            aria-pressed={c.key === selectedColor}
                            className={`flex items-center gap-2 px-3 py-1 rounded-full border ${c.key === selectedColor ? 'ring-2 ring-gold' : 'border-gray-300'} focus:outline-none`}
                          >
                            <span className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }} />
                            <span className="font-body">{c.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <select className="border border-black px-4 py-2 rounded">
            <option>Tamanho</option>
            <option>P</option>
            <option>M</option>
            <option>G</option>
          </select>
          <select className="border border-black px-4 py-2 rounded">
            <option>Tipo de Evento</option>
            <option>Casamento</option>
            <option>Aniversário</option>
            <option>Formatura</option>
          </select>
          {/* Clear filters button */}
          {(selectedColor) && (
            <button
              type="button"
              onClick={() => {
                setSelectedColor(null)
                setColorsOpen(false)
              }}
              className="ml-2 px-4 py-2 rounded bg-white border border-gray-300 hover:shadow-sm"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Dress Cards - modern grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDresses.map((d) => (
            <div key={d.id} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <Link href={`/vestidos/${d.id}`} className="relative block aspect-[3/4] overflow-hidden bg-gray-100 shrink-0 cursor-pointer">
                {d.images && d.images.length > 0 ? (
                  <img src={d.images[0]} alt={d.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <div className="p-5 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-title mb-2">{d.title}</h3>
                <div className="text-xs font-semibold uppercase tracking-wider mb-4 mx-auto w-fit px-2 py-1 rounded bg-gray-100 text-gray-800">
                  {d.availability === 'available' ? 'Disponível' : d.availability === 'low' ? 'Poucas unidades' : 'Indisponível'}
                </div>
                <div className="mt-auto">
                  <p className="text-lg text-gold font-semibold mb-3">{d.price ?? 'Sob consulta'}</p>
                  <a href={`https://wa.me/244943700307?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o ${d.title}. Está disponível?`)}`} className="bg-gold text-black px-5 py-2.5 w-full rounded-md mt-2 inline-flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                    Reservar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}