import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <header className="border-b-4 border-green-400 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="border-2 border-white px-3 py-2 hover:bg-white hover:text-black flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              RETOUR
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold">CONTACT.SH</h1>
          </div>
        </div>
      </header>

      <section className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white p-8 text-center">
            <h2 className="text-xl font-bold mb-4 text-green-400">PAGE EN CONSTRUCTION</h2>
            <p>Contenu à ajouter...</p>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 Coulibaly Abdoulaye | TECHNICIEN SYSTÈME RÉSEAU</p>
      </footer>
    </div>
  )
}
