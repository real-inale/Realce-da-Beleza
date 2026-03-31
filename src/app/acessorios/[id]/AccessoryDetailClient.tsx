"use client"
import { useState } from 'react'
import Link from 'next/link'
import { getAccessoryById } from '../../../lib/accessories'

type Props = {
  params: { id: string }
}

export default function AccessoryDetailClient({ params }: Props) {
  const id = Number(params.id)
  const accessory = getAccessoryById(id)
  const [mainIndex, setMainIndex] = useState(0)

  if (!accessory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-title mb-4">Acessorio nao encontrado</h2>
          <Link href="/acessorios" className="text-gold font-body hover:underline">Voltar a listagem</Link>
        </div>
      </div>
    )
  }

  const images = accessory.images && accessory.images.length > 0 ? accessory.images : ['https://images.unsplash.com/photo-1599643478514-4a1102521bc8?q=80&w=800&auto=format&fit=crop']
  const mainImage = images[mainIndex]

  const whatsappUrl = `https://wa.me/244943700307?text=${encodeURIComponent(`Ola, gostaria de reservar o acessorio ${accessory.title}. Esta disponivel?`)}`

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto mb-6">
        <Link href="/acessorios" className="text-gray-500 font-body hover:text-gold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Voltar para Acessorios
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square mb-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            <img src={mainImage} alt={accessory.title} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((src, idx) => (
                <button key={src} onClick={() => setMainIndex(idx)} className={`w-20 h-20 rounded overflow-hidden border ${idx === mainIndex ? 'ring-2 ring-gold' : 'border-gray-200'}`}>
                  <img src={src} alt={`${accessory.title} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-title mb-2">{accessory.title}</h1>
          <div className="inline-block text-xs uppercase tracking-wider bg-gray-100 px-2 py-1 rounded text-gray-600 mb-2 w-fit">
            Categoria: {accessory.type}
          </div>
          <div className="text-2xl text-gold font-semibold mb-4">{accessory.price ?? 'Sob consulta'}</div>
          <div className="mb-6 border-y border-gray-100 py-3 flex items-center gap-3">
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded ${accessory.availability === 'available' ? 'bg-green-100 text-green-800' : accessory.availability === 'low' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
              {accessory.availability === 'available' ? 'Disponivel' : accessory.availability === 'low' ? 'Poucas unidades' : 'Indisponivel'}
            </span>
            <span className="text-sm font-body text-gray-600">
              Cores: {accessory.colors.join(', ')}
            </span>
          </div>
          <p className="text-gray-700 font-body leading-relaxed mb-6">{accessory.description}</p>
          {accessory.details && Object.keys(accessory.details).length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold font-title text-lg mb-3">Detalhes do Artigo</h4>
              <ul className="space-y-2 text-gray-700 font-body">
                {Object.entries(accessory.details).map(([k, v]) => (
                  <li key={k} className="flex border-b border-dashed border-gray-200 pb-1">
                    <strong className="font-medium min-w-[120px]">{k}</strong>
                    <span className="text-gray-600">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-auto pt-6">
            <a href={whatsappUrl} className="flex justify-center items-center gap-3 bg-gold text-black px-6 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300 text-lg">
              Reservar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
