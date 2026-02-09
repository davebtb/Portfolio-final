import Link from "next/link"
import { ArrowLeft, BookOpen, Code, Shield, Network } from "lucide-react"

export default function BTSSIOPage() {
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
            <h1 className="text-2xl md:text-4xl font-bold">BTS_SIO_SISR.DIPLOMA</h1>
          </div>
        </div>
      </header>

      <section className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Info */}
          <div className="border-2 border-white p-8 mb-8">
            <div className="border-b-2 border-green-400 pb-4 mb-6">
              <h2 className="text-3xl font-bold text-green-400">BTS SIO OPTION SISR</h2>
              <p className="text-lg mt-2">
                Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">DESCRIPTION:</h3>
                <p className="mb-4 leading-relaxed">
                  Le BTS SIO option SISR forme des techniciens capables de gérer et maintenir l'infrastructure
                  informatique d'une organisation. Cette formation couvre l'administration des systèmes, la gestion des
                  réseaux, la sécurité informatique et le support aux utilisateurs.
                </p>
                <p className="mb-4 leading-relaxed">
                  Formation en cours à l'IPSSI Paris depuis octobre 2024, avec une approche pratique et
                  professionnalisante incluant stages et projets concrets.
                </p>
              </div>

              <div className="border-2 border-white p-6">
                <h3 className="text-lg font-bold mb-4 text-green-400">INFOS_FORMATION:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>DURÉE:</span>
                    <span className="text-green-400">2 ANS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NIVEAU:</span>
                    <span className="text-green-400">BAC+2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DÉBUT:</span>
                    <span className="text-green-400">OCT 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATUT:</span>
                    <span className="text-green-400">EN COURS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold flex items-center gap-2">
                  <Network size={20} />
                  ADMINISTRATION SYSTÈMES
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Installation et configuration Windows Server</li>
                  <li>• Administration Linux (Ubuntu, Debian)</li>
                  <li>• Gestion Active Directory et GPO</li>
                  <li>• Virtualisation (VirtualBox, VMware)</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold flex items-center gap-2">
                  <Shield size={20} />
                  RÉSEAUX & SÉCURITÉ
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Configuration DHCP, DNS, VPN</li>
                  <li>• Mise en place de firewalls</li>
                  <li>• Sécurisation des communications</li>
                  <li>• Monitoring avec Zabbix</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold flex items-center gap-2">
                  <Code size={20} />
                  DÉVELOPPEMENT
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Programmation Python, Java, PHP</li>
                  <li>• Développement web HTML5/CSS3/JS</li>
                  <li>• Bases de données MySQL, Oracle</li>
                  <li>• Scripts d'automatisation</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="font-bold flex items-center gap-2">
                  <BookOpen size={20} />
                  GESTION DE PROJET
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Méthodologies Agile</li>
                  <li>• Documentation technique</li>
                  <li>• Support utilisateur</li>
                  <li>• Veille technologique</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="border-2 border-white p-8">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-400 pb-2 text-green-400">
              PROGRAMME.CURRICULUM
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">1ÈRE ANNÉE:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Support et mise à disposition de services informatiques</li>
                  <li>• Administration des systèmes et des réseaux</li>
                  <li>• Cybersécurité des services informatiques</li>
                  <li>• Mathématiques pour l'informatique</li>
                  <li>• Culture générale et expression</li>
                  <li>• Anglais</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">2ÈME ANNÉE:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Conception et développement d'applications</li>
                  <li>• Administration avancée des systèmes</li>
                  <li>• Projet Personnel Encadré (PPE)</li>
                  <li>• Stage en entreprise (10 semaines)</li>
                  <li>• Préparation aux certifications</li>
                  <li>• Veille technologique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 Coulibaly Abdoulaye | ÉTUDIANT BTS SIO SISR</p>
      </footer>
    </div>
  )
}
