import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-r from-primary to-nude px-6 py-20">
        <div className="text-center text-black z-10 max-w-3xl border-t-gold">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-title mb-6 leading-[1.15]">Realce a sua beleza nos<br className="hidden sm:block"/> momentos mais especiais ✨</h1>
          <p className="text-lg sm:text-xl font-body mb-10 opacity-90 max-w-xl mx-auto">Vestidos elegantes para alugar em Camama. Encontre o look perfeito para o seu próximo grande evento.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto sm:max-w-none">
            <Link href="/vestidos" className="w-full sm:w-auto bg-black text-white px-8 py-3.5 rounded-md hover:bg-gold transition font-medium text-lg shadow-lg">
              Ver Coleção
            </Link>
            <a href="https://wa.me/244943700307?text=Olá, gostaria de reservar um vestido." className="w-full sm:w-auto bg-gold text-black px-8 py-3.5 rounded-md hover:bg-black hover:text-white transition font-medium text-lg shadow-lg">
              Reservar Via WhatsApp
            </a>
          </div>
        </div>
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-multiply" style={{backgroundImage: 'url(/hero-image.jpg)'}}></div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-title mb-8">Sobre a Realce da Beleza</h2>
          <p className="text-lg font-body">
            Criamos este espaço com carinho para valorizar a beleza feminina em momentos especiais.
            Oferecemos vestidos elegantes para alugar, com atendimento personalizado e preços acessíveis.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-8 bg-nude">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-title text-center mb-8">Nossos Vestidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <Link href={`/vestidos/${num}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image 
                    src={`/images/dresses/dress-${num}.jpg`} 
                    alt={`Vestido ${num}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-title mb-1">Vestido Especial {num}</h3>
                  <p className="font-body text-gray-500 mb-4">Sob consulta</p>
                  <a href={`https://wa.me/244943700307?text=Olá, gostaria de saber mais sobre o Vestido ${num}.`} className="bg-gold text-black px-5 py-2.5 w-full rounded-md mt-2 inline-flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                    Reservar via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-title mb-8">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-title mb-4">1. Escolhe</h3>
              <p>Selecione o vestido ideal para o seu evento.</p>
            </div>
            <div>
              <h3 className="text-2xl font-title mb-4">2. Reserva</h3>
              <p>Faça a reserva via WhatsApp e confirme disponibilidade.</p>
            </div>
            <div>
              <h3 className="text-2xl font-title mb-4">3. Levanta & Brilha</h3>
              <p>Retire na loja e brilhe no seu momento especial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-title mb-8">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <p>"Adorei o vestido! Perfeito para o meu casamento."</p>
              <p className="mt-4 font-body">- Maria Silva</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p>"Atendimento excelente e preços acessíveis."</p>
              <p className="mt-4 font-body">- Ana Costa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-title mb-8">Agende sua prova hoje mesmo</h2>
        <a href="https://wa.me/244943700307?text=Olá, gostaria de agendar uma prova." className="w-full sm:w-auto max-w-sm mx-auto bg-[#25D366] text-white px-8 py-4 rounded-full text-lg sm:text-xl font-medium hover:bg-[#1DA851] transition-transform hover:scale-105 inline-flex items-center justify-center gap-3 shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.447 20.452l-4.95-1.3a8.96 8.96 0 01-4.1-2.366 8.96 8.96 0 01-2.366-4.1l-1.3-4.95L12 2.5l9.447 17.952z" opacity="0.0" />
            <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.885-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.151-.173.2-.297.3-.495.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.208-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.015-1.04 2.479 0 1.462 1.064 2.88 1.213 3.078.149.198 2.095 3.198 5.077 4.487 2.982 1.29 2.982.861 3.518.807.537-.05 1.758-.717 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.273-.198-.57-.347z" />
          </svg>
          Contactar WhatsApp
        </a>
      </section>
    </div>
  )
}