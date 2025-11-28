import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">TechStore</Link>
      </div>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/cart">Panier ({totalItems})</Link>
      </nav>
    </header>
  )
}
