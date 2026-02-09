import Link from "next/link"
import { ArrowLeft, Building, Users, BookOpen, Target, Award, Heart, Share2, Zap, ShieldCheck } from "lucide-react"

export default function EntreprisePage() {
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
            <h1 className="text-2xl md:text-4xl font-bold">ENTREPRISE.CORP</h1>
          </div>
        </div>
      </header>

      <section className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Company Info */}
          <div className="border-2 border-white p-8 mb-8">
            <div className="border-b-2 border-green-400 pb-4 mb-6">
              <h2 className="text-3xl font-bold text-green-400 flex items-center gap-3">
                <Building size={32} />
                METRO FRANCE
              </h2>
              <p className="text-lg mt-2">{"Nanterre | Leader de la distribution de gros pour les professionnels"}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">{"PRÉSENTATION:"}</h3>
                <p className="mb-4 leading-relaxed">
                  {"METRO France est le premier fournisseur de proximité des professionnels de la bouche et des commerces indépendants. Avec plus de 90 entrepôts en France, l'entreprise accompagne les restaurateurs et commerçants dans leur succès quotidien en leur proposant une offre de produits et de services unique."}
                </p>
                <p className="mb-4 leading-relaxed">
                  {"Reconnu pour son expertise produit et sa logistique de pointe, METRO France met un point d'honneur à former les futurs talents du secteur via des stages et des parcours d'alternance dynamiques."}
                </p>
                <p className="leading-relaxed">
                  {"L'entreprise offre un environnement stimulant pour découvrir les métiers du commerce, de la supply chain et du conseil client. L'accent est mis sur la passion du produit et l'excellence opérationnelle, permettant aux apprenants de développer des compétences concrètes au cœur du secteur de la gastronomie française."}
                </p>
              </div>

              <div className="border-2 border-white p-6">
                <h3 className="text-lg font-bold mb-4 text-green-400">INFOS_ENTREPRISE:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-green-400" />
                    <span className="text-sm">DISTRIBUTION PROFESSIONNELLE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-green-400" />
                    <span className="text-sm">ACCOMPAGNEMENT CLIENTS HORECA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-green-400" />
                    <span className="text-sm">EXCELLENCE PRODUIT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-green-400" />
                    <span className="text-sm">{"LOGISTIQUE ET COMMERCE"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activities & Missions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">{"EXPERTISE MÉTIER"}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm mb-3">
                  {"Programmes de développement adaptés aux exigences du secteur de la restauration et du commerce spécialisé."}
                </p>
                <ul className="text-xs space-y-1">
                  <li>{"• Filières Produits Frais"}</li>
                  <li>{"• Management d'Entrepôt"}</li>
                  <li>{"• Conseil de Vente Expert"}</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">ACCOMPAGNEMENT</h3>
              </div>
              <div className="p-6">
                <p className="text-sm mb-3">
                  {"Support et transmission de savoir-faire par des tuteurs passionnés tout au long du parcours."}
                </p>
                <ul className="text-xs space-y-1">
                  <li>{"• Parrainage métier"}</li>
                  <li>{"• Immersion terrain"}</li>
                  <li>{"• Développement de l'autonomie"}</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">{"RÉSEAU ET PARTENARIATS"}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm mb-3">
                  {"Écosystème puissant reliant les producteurs locaux aux professionnels de la gastronomie."}
                </p>
                <ul className="text-xs space-y-1">
                  <li>{"• Stages opérationnels"}</li>
                  <li>{"• Alternance diplômante"}</li>
                  <li>{"• Perspectives de carrière interne"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values & Approach */}
          <div className="border-2 border-white p-8">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-2 text-green-400">
              VALEURS_ENTREPRISE.VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border border-white p-4 text-center">
                <Heart className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold text-green-400 mb-2">PASSION</h3>
                <p className="text-sm">{"L'amour du produit et du service client au quotidien"}</p>
              </div>
              <div className="border border-white p-4 text-center">
                <Share2 className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold text-green-400 mb-2">PARTAGE</h3>
                <p className="text-sm">Transmission des savoir-faire entre experts et apprenants</p>
              </div>
              <div className="border border-white p-4 text-center">
                <Zap className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold text-green-400 mb-2">{"EFFICACITÉ"}</h3>
                <p className="text-sm">{"Réactivité et rigueur pour satisfaire les besoins des pros"}</p>
              </div>
              <div className="border border-white p-4 text-center">
                <ShieldCheck className="mx-auto mb-2 text-green-400" size={24} />
                <h3 className="font-bold text-green-400 mb-2">ENGAGEMENT</h3>
                <p className="text-sm">{"Soutien à l'indépendance des restaurateurs et commerçants"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">{"© 2025 Coulibaly Abdoulaye | STAGIAIRE METRO FRANCE"}</p>
      </footer>
    </div>
  )
}
