"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getDressById } from '../../../lib/dresses'

type Props = {
  params: { id: string }
}

export default function DressDetailClient({ params }: Props) {
  const id = Number(params.id)
  const dress = getDressById(id)
  const [mainIndex, setMainIndex] = useState(0)
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7710/ingest/ad6744e7-9db0-45c9-a5cf-f861a5ebc74f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36abe8'},body:JSON.stringify({sessionId:'36abe8',runId:'pre-fix',hypothesisId:'H2',location:'src/app/vestidos/[id]/DressDetailClient.tsx:15',message:'dress detail mounted',data:{id,found:Boolean(dress),imageCount:dress?.images?.length ?? 0},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }, [id, dress])

  if (!dress) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-title mb-4">Vestido não encontrado</h2>
          <Link href="/vestidos" className="text-gold">Voltar à listagem</Link>
        </div>
      </div>
    )
  }

  const images = dress.images && dress.images.length > 0 ? dress.images : ['/images/dresses/dress-1.svg']
  const mainImage = images[mainIndex]
  const whatsappUrl = `https://wa.me/244943700307?text=${encodeURIComponent(`Olá, gostaria de reservar o ${dress.title}. Está disponível?`)}`

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="h-96 mb-4 overflow-hidden rounded-lg border border-gray-200">
            <img src={mainImage} alt={dress.title} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex gap-2">
            {images.map((src, idx) => (
              <button key={src} onClick={() => setMainIndex(idx)} className={`w-20 h-20 rounded overflow-hidden border ${idx === mainIndex ? 'ring-2 ring-gold' : 'border-gray-200'}`}>
                <img src={src} alt={`${dress.title} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-title mb-2">{dress.title}</h1>
          <div className="text-xl text-gold font-semibold mb-4">{dress.price ?? 'Sob consulta'}</div>
          <div className="mb-4">
            <span className="inline-block mr-3">{dress.availability === 'available' ? '✅ Disponível' : dress.availability === 'low' ? '⚠️ Poucas unidades' : '—'}</span>
          </div>
          <a href={whatsappUrl} className="inline-block bg-gold text-black px-6 py-3 rounded-lg font-semibold mb-6">Reservar no WhatsApp</a>
          <h3 className="text-lg font-semibold mb-2">Descrição</h3>
          <p className="text-gray-700 mb-4">{dress.description}</p>
          <h4 className="font-semibold mb-2">Detalhes técnicos</h4>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            {dress.details && Object.entries(dress.details).map(([k, v]) => (
              <li key={k}><strong>{k}:</strong> {v}</li>
            ))}
          </ul>
          {dress.accessories && dress.accessories.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold">Acessórios recomendados</h4>
              <div className="flex gap-2 mt-2">
                {dress.accessories.map((a) => (
                  <span key={a} className="bg-gray-100 px-3 py-1 rounded text-sm">{a}</span>
                ))}
              </div>
            </div>
          )}
          {dress.testimonials && dress.testimonials.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Depoimentos</h4>
              <blockquote className="italic text-gray-700">“{dress.testimonials[0].text}” — <span className="font-semibold">{dress.testimonials[0].author}</span></blockquote>
            </div>
          )}
          <div className="mt-8">
            <h4 className="font-semibold mb-2">Como funciona o aluguer</h4>
            <ol className="list-decimal pl-5 text-gray-700">
              <li>Escolha o vestido</li>
              <li>Entre em contacto via WhatsApp</li>
              <li>Agende a prova</li>
              <li>Levante na loja</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
