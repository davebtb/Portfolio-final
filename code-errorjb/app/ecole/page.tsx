import Link from "next/link"
import { ArrowLeft, MapPin, Users, BookOpen, Briefcase } from "lucide-react"

export default function EcolePage() {
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
            <h1 className="text-2xl md:text-4xl font-bold">ÉCOLE.EDU</h1>
          </div>
        </div>
      </header>

      <section className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="border-2 border-white p-8 mb-8">
            <div className="border-b-2 border-green-400 pb-4 mb-6">
              <h2 className="text-3xl font-bold text-green-400">IPSSI_PARIS_GRANDE_ÉCOLE_INFORMATIQUE</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-green-400">DESCRIPTION:</h3>
                <p className="mb-6 leading-relaxed text-justify">
                  L'IPSSI est une école d'informatique reconnue, spécialisée dans les formations en développement,
                  cybersécurité, cloud, data et intelligence artificielle. Elle propose des cursus de Bac à Bac+5,
                  alliant théorie et pratique, avec une forte ouverture à l'alternance et à l'insertion professionnelle.
                  Présente à Paris, Marne-la-Vallée, Lyon et à l'international, l'IPSSI forme des profils tech
                  opérationnels et adaptés aux besoins du marché.
                </p>
              </div>

              <div className="border-2 border-white p-4">
                <h3 className="text-lg font-bold mb-4 text-green-400">INFOS_RAPIDES:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-green-400" />
                    <span className="text-sm">BAC à BAC+5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-green-400" />
                    <span className="text-sm">ALTERNANCE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-green-400" />
                    <span className="text-sm">INSERTION PRO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-green-400" />
                    <span className="text-sm">MULTI-CAMPUS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">DÉVELOPPEMENT</h3>
              </div>
              <div className="p-4">
                <p className="text-sm">Formation complète en développement web, mobile et logiciel</p>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">CYBERSÉCURITÉ</h3>
              </div>
              <div className="p-4">
                <p className="text-sm">Spécialisation en sécurité informatique et protection des données</p>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">CLOUD & DATA</h3>
              </div>
              <div className="p-4">
                <p className="text-sm">Technologies cloud et analyse de données massives</p>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">INTELLIGENCE ARTIFICIELLE</h3>
              </div>
              <div className="p-4">
                <p className="text-sm">IA, machine learning et technologies émergentes</p>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">ALTERNANCE</h3>
              </div>
              <div className="p-4">
                <p className="text-sm">Formation en alternance avec entreprises partenaires</p>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">INTERNATIONAL</h3>
              </div>
              <div className="p-4">
                <p className="text-sm">Campus à Paris, Marne-la-Vallée, Lyon et international</p>
              </div>
            </div>
          </div>

          {/* Campus Locations */}
          <div className="border-2 border-white p-8">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-2 text-green-400">CAMPUS.MAP</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border border-white p-4 text-center">
                <MapPin className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold">PARIS</h3>
                <p className="text-sm text-gray-300">Campus principal</p>
              </div>
              <div className="border border-white p-4 text-center">
                <MapPin className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold">MARNE-LA-VALLÉE</h3>
                <p className="text-sm text-gray-300">Campus secondaire</p>
              </div>
              <div className="border border-white p-4 text-center">
                <MapPin className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold">LYON</h3>
                <p className="text-sm text-gray-300">Campus régional</p>
              </div>
              <div className="border border-white p-4 text-center">
                <MapPin className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold">INTERNATIONAL</h3>
                <p className="text-sm text-gray-300">Partenariats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 Coulibaly Abdoulaye | ÉTUDIANT IPSSI BTS SIO SISR</p>
      </footer>
    </div>
  )
}
