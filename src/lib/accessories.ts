export type Accessory = {
  id: number
  title: string
  price?: string
  availability?: 'available' | 'low' | 'sold'
  type: string
  colors: string[]
  description?: string
  details?: Record<string, string>
  images?: string[]
}

export const accessories: Accessory[] = [
  {
    id: 1,
    title: 'Conjunto Colar e Brincos Cristal',
    price: '5.000 Kz',
    availability: 'available',
    type: 'Conjunto',
    colors: ['prata'],
    description: 'Um conjunto brilhante perfeito para complementar vestidos de gala escuros.',
    details: { Material: 'Liga de Zinco e Cristal', Fecho: 'Lagosta' },
    images: ['https://images.unsplash.com/photo-1599643478514-4a1102521bc8?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 2,
    title: 'Brincos Longos Dourados',
    price: '2.500 Kz',
    availability: 'low',
    type: 'Brincos',
    colors: ['dourado'],
    description: 'Brincos leves e elegantes que afinam o rosto e dão um toque de luxo.',
    details: { Material: 'Banhado a ouro 18k' },
    images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 3,
    title: 'Clutch de Festa Prateada',
    price: '8.000 Kz',
    availability: 'available',
    type: 'Bolsa',
    colors: ['prata'],
    description: 'Bolsa de mão revestida com brilhantes, tamanho ideal para o essencial.',
    details: { Tamanho: 'Pequeno', Alça: 'Removível' },
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 4,
    title: 'Tiara de Pérolas',
    price: '3.500 Kz',
    availability: 'available',
    type: 'Cabelo',
    colors: ['branco', 'prata'],
    description: 'Tiara delicada feita à mão, ideal para penteados românticos e cerimónias.',
    details: { Material: 'Pérolas artificiais e fio de prata' },
    images: ['https://images.unsplash.com/photo-1565251268388-724bc2f19d20?q=80&w=800&auto=format&fit=crop'],
  },
]

export function getAccessoryById(id: number) {
  return accessories.find((a) => a.id === id) || null
}
