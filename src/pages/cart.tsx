import Head from 'next/head'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart()

  return (
    <>
      <Head>
        <title>Panier - TechStore</title>
      </Head>
      <main className="container">
        <h1>Panier</h1>
        {cart.length === 0 ? (
          <>
            <p>Votre panier est vide.</p>
            <Link href="/">Voir les produits</Link>
          </>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((item) => (
                <li key={item.product.id} style={{ marginBottom: '1rem', background: '#fff', padding: '1rem', borderRadius: 8 }}>
                  <strong>{item.product.title}</strong>
                  <p>Prix: €{item.product.price}</p>
                  <div>
                    Quantité:{' '}
                    <input
                      type="number"
                      min={0}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                      style={{ width: 60 }}
                    />
                    <button className="btn" onClick={() => removeFromCart(item.product.id)} style={{ marginLeft: 8 }}>
                      Retirer
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '1rem' }}>
              <p>Total items: {totalItems}</p>
              <p>
                Total prix: <strong>€{totalPrice}</strong>
              </p>
              <button className="btn" onClick={() => alert('Mode test — intégration Stripe à venir')}>
                Passer au paiement (test)
              </button>
              <button style={{ marginLeft: 8 }} onClick={() => clearCart()}>
                Vider le panier
              </button>
            </div>
          </>
        )}
      </main>
    </>
  )
}
