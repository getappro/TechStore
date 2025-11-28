// Catalogue de démonstration, utilisable pour getStaticPaths/getStaticProps
export type Product = {
  id: string
  title: string
  price: number
  description?: string
  image?: string
}

export const products: Product[] = [
  {
    id: 'p1',
    title: 'Sneakers',
    price: 79,
    description: "Sneakers confortables pour tous les jours.",
  },
  {
    id: 'p2',
    title: 'T-shirt',
    price: 29,
    description: "T-shirt en coton bio, coupe droite.",
  },
  {
    id: 'p3',
    title: 'Backpack',
    price: 59,
    description: "Sac à dos résistant, parfait pour le quotidien.",
  },
]

export function getProductById(id: string) {
  return products.find((p) => p.id === id) ?? null
}
