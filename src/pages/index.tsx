import Head from 'next/head'
import Header from '../components/Header'

const products = [
  { id: 'p1', title: 'Sneakers', price: 79 },
  { id: 'p2', title: 'T-shirt', price: 29 },
  { id: 'p3', title: 'Backpack', price: 59 }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>TechStore - Learning Starter</title>
        <meta name="description" content="TechStore e-commerce starter" />
      </Head>
      <Header />
      <main className="container">
        <h1>Bienvenue sur TechStore</h1>
        <p>Exemple simple de catalogue produit pour apprendre.</p>

        <section className="grid">
          {products.map((p) => (
            <article key={p.id} className="card">
              <h2>{p.title}</h2>
              <p>Prix: €{p.price}</p>
              <button className="btn">Ajouter au panier</button>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}