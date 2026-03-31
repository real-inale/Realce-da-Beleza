export default function Sobre() {
  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-title text-center mb-8">Sobre Nós</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-title mb-4">Nossa História</h2>
          <p className="font-body text-lg mb-4">
            Criamos este espaço com carinho para valorizar a beleza feminina em momentos especiais.
            A Realce da Beleza nasceu da paixão por ajudar mulheres a se sentirem confiantes e elegantes
            em eventos importantes, sem a necessidade de comprar vestidos caros.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-title mb-4">Nossa Missão</h2>
          <p className="font-body text-lg">
            Oferecer vestidos e acessórios elegantes para alugar, com atendimento personalizado,
            preços acessíveis e um local físico confiável em Camama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-title mb-4">Nossa Loja</h3>
            <div className="h-64 bg-gray-200"></div>
          </div>
          <div>
            <h3 className="text-xl font-title mb-4">Atendimento Personalizado</h3>
            <p className="font-body">
              Cada cliente é única. Oferecemos consultoria personalizada para encontrar o look perfeito
              para o seu evento.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}