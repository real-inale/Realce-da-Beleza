export default function Contacto() {
  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-title text-center mb-8">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-title mb-4">Entre em Contacto</h2>
            <p className="font-body mb-4">Telefone: 943 700 307</p>
            <a href="https://wa.me/244943700307" className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block mb-4 hover:bg-green-600 transition">
              Contactar via WhatsApp
            </a>
            <p className="font-body">Localização: Camama (frente ao cemitério), Angola</p>
          </div>
          <div>
            <h2 className="text-2xl font-title mb-4">Mapa</h2>
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p>Mapa do Google Maps aqui</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}