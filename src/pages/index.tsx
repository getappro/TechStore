import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import { products } from '../lib/products'

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
              <h2>
                <Link href={`/products/${p.id}`}>{p.title}</Link>
              </h2>
              <p>Prix: €{p.price}</p>
              <Link href={`/products/${p.id}`}>
                <button className="btn">Voir</button>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}
