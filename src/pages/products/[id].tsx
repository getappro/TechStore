import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getProductById, products, type Product } from '../../lib/products'
import { useCart } from '../../context/CartContext'

type Props = {
  product: Product | null
}

export default function ProductPage({ product }: Props) {
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="container">
        <p>Produit introuvable.</p>
        <Link href="/">Retour</Link>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{`${product.title} - TechStore`}</title>
      </Head>
      <main className="container">
        <Link href="/">← Retour</Link>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Prix: €{product.price}</p>
        <button className="btn" onClick={() => addToCart(product)}>
          Ajouter au panier
        </button>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => ({ params: { id: p.id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const id = ctx.params?.id as string
  const product = getProductById(id)
  return { props: { product } }
}
