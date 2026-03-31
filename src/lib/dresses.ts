export type Dress = {
  id: number
  title: string
  price?: string
  availability?: 'available' | 'low' | 'sold'
  colors: string[]
  description?: string
  details?: Record<string, string>
  images?: string[]
  accessories?: string[]
  testimonials?: { text: string; author?: string }[]
}

export const dresses: Dress[] = [
  {
    id: 1,
    title: 'Vestido Elegance Dourado',
    price: '25.000 Kz',
    availability: 'available',
    colors: ['dourado', 'nude'],
    description:
      'Um vestido elegante e sofisticado, ideal para eventos especiais como casamentos, aniversários e formaturas. Com um caimento perfeito, este modelo realça a silhueta e garante presença marcante.',
    details: {
      Cor: 'Dourado',
      Tamanho: 'P / M / G',
      Tecido: 'Cetim premium',
      Estilo: 'Longo / Festa',
    },
    images: ['/images/dresses/dress-1.jpg', '/images/dresses/dress-2.jpg'],
    accessories: ['Brincos dourados', 'Bolsa clutch'],
    testimonials: [
      { text: 'Amei o vestido, me senti incrível no meu evento!', author: 'Cliente satisfeita' },
    ],
  },
  {
    id: 2,
    title: 'Vestido Clássico Preto',
    price: 'Sob consulta',
    availability: 'low',
    colors: ['preto'],
    description: 'Clássico e versátil.',
    details: { Cor: 'Preto', Tamanho: 'P / M / G', Tecido: 'Crepe' },
    images: ['/images/dresses/dress-3.jpg'],
    accessories: ['Cinto fino'],
  },
  // keep other example items minimal
  { id: 3, title: 'Vestido Romântico Rosa', price: '18.000 Kz', availability: 'available', colors: ['rosa'], description: 'Romântico e leve.', details: { Cor: 'Rosa', Tamanho: 'M', Tecido: 'Tule' }, images: ['/images/dresses/dress-4.jpg'], accessories: [] },
]

export function getDressById(id: number) {
  return dresses.find((d) => d.id === id) || null
}
