import Link from "next/link"
import { ArrowLeft, User, Target, Briefcase, Calendar } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-2xl md:text-4xl font-bold">À_PROPOS.TXT</h1>
          </div>
        </div>
      </header>

      <section className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Profile */}
          <div className="border-2 border-white p-8 mb-8">
            <div className="border-b-2 border-green-400 pb-4 mb-6">
              <h2 className="text-3xl font-bold text-green-400">COULIBALY ABDOULAYE</h2>
              <p className="text-lg mt-2">Étudiant BTS SIO SISR | Technicien Système et Réseau</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                  <User size={20} />
                  PROFIL:
                </h3>
                <p className="mb-4 leading-relaxed">
                  Actuellement étudiant en BTS SIO option SISR à l'IPSSI Paris, je suis en stage alterné de 2 mois.
                </p>
                <p className="mb-4 leading-relaxed">
                  Mon cursus et mes expériences m'ont permis de développer un profil polyvalent avec des compétences
                  solides dans l'administration système, le support informatique et le développement web.
                </p>
                <p className="leading-relaxed">
                  Je suis une personne rigoureuse, disciplinée, avec un bon esprit d'équipe et une grande capacité
                  d'adaptation. Je suis convaincu que ma polyvalence et ma motivation seraient un atout précieux pour
                  toute entreprise.
                </p>
              </div>

              <div className="border-2 border-white p-6">
                <h3 className="text-lg font-bold mb-4 text-green-400 flex items-center gap-2">
                  <Calendar size={16} />
                  STAGE_ACTUEL:
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>DURÉE:</span>
                    <span className="text-green-400">2 MOIS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TYPE:</span>
                    <span className="text-green-400">STAGE ALTERNÉ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATUT:</span>
                    <span className="text-green-400">EN COURS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">ADMINISTRATION SYSTÈME & RÉSEAU</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Configuration et gestion d'Active Directory</li>
                  <li>• Services DNS et SMB</li>
                  <li>• Monitoring avec Zabbix</li>
                  <li>• Serveurs FTP/FTPS et web</li>
                  <li>• Mise en place de réseaux</li>
                  <li>• Sécurisation des systèmes</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">SUPPORT INFORMATIQUE</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Gestion des systèmes d'exploitation</li>
                  <li>• Résolution de problèmes techniques</li>
                  <li>• Assistance aux utilisateurs</li>
                  <li>• Maintenance préventive</li>
                  <li>• Documentation technique</li>
                  <li>• Formation utilisateurs</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold">DÉVELOPPEMENT WEB</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Création d'interfaces utilisateur (UX/UI)</li>
                  <li>• Développement back-end</li>
                  <li>• Python, SQL, PHP</li>
                  <li>• Gestion de bases de données</li>
                  <li>• Intégration frontend/backend</li>
                  <li>• Optimisation performances</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="border-2 border-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-2 text-green-400 flex items-center gap-2">
              <Briefcase size={24} />
              EXPÉRIENCE_PRATIQUE.LOG
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">IPSSI - TECHNICIEN SYSTÈME ET RÉSEAUX</h3>
                <p className="mb-4 text-sm">
                  Mon expérience en tant que Technicien Système et Réseaux à l'IPSSI m'a permis de développer des
                  compétences pratiques concrètes :
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Création de domaine Active Directory</li>
                  <li>• Configuration de services DNS et SMB</li>
                  <li>• Installation et paramétrage de Zabbix</li>
                  <li>• Mise en place de réseaux NAT</li>
                  <li>• Configuration de serveurs FTP/FTPS et web</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">FREELANCE - DÉVELOPPEMENT WEB</h3>
                <p className="mb-4 text-sm">
                  Mon activité en freelance m'a apporté une expérience significative en développement web et gestion de
                  bases de données :
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Création de sites web pour TPE</li>
                  <li>• Développement d'interfaces utilisateur</li>
                  <li>• Programmation backend</li>
                  <li>• Gestion de bases de données</li>
                  <li>• Maintenance et support client</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Qualities */}
          <div className="border-2 border-white p-8">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-2 text-green-400 flex items-center gap-2">
              <Target size={24} />
              QUALITÉS_PERSONNELLES.ATTR
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border border-white p-4 text-center">
                <h3 className="font-bold text-green-400 mb-2">RIGOUREUX</h3>
                <p className="text-sm">Approche méthodique et précise dans tous les projets</p>
              </div>
              <div className="border border-white p-4 text-center">
                <h3 className="font-bold text-green-400 mb-2">DISCIPLINÉ</h3>
                <p className="text-sm">Respect des délais et des procédures établies</p>
              </div>
              <div className="border border-white p-4 text-center">
                <h3 className="font-bold text-green-400 mb-2">ESPRIT D'ÉQUIPE</h3>
                <p className="text-sm">Collaboration efficace et communication constructive</p>
              </div>
              <div className="border border-white p-4 text-center">
                <h3 className="font-bold text-green-400 mb-2">ADAPTABLE</h3>
                <p className="text-sm">Grande capacité d'adaptation aux nouveaux environnements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 Coulibaly Abdoulaye | TECHNICIEN SYSTÈME RÉSEAU</p>
      </footer>
    </div>
  )
}
