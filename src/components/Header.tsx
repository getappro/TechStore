import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">TechStore</Link>
      </div>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/cart">Panier</Link>
      </nav>
    </header>
  )
}
