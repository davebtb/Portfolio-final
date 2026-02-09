import Link from "next/link"
import { ArrowLeft, Download, CheckSquare, Square } from "lucide-react"

function Check() {
  return <CheckSquare size={16} className="text-green-400 mx-auto" />
}

function Empty() {
  return <Square size={16} className="text-gray-600 mx-auto" />
}

const competences = [
  {
    bloc: "Gerer le patrimoine informatique",
    items: [
      "Recenser et identifier les ressources numeriques",
      "Exploiter des referentiels, normes et standards adoptes par le prestataire informatique",
      "Mettre en place et verifier les niveaux d'habilitation associes a un service",
      "Verifier les conditions de la continuite d'un service informatique",
      "Gerer des sauvegardes",
      "Verifier le respect des regles d'utilisation des ressources numeriques",
    ],
  },
  {
    bloc: "Repondre aux incidents et aux demandes d'assistance et d'evolution",
    items: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes concernant les services reseau et systeme, applicatifs",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    bloc: "Developper la presence en ligne de l'organisation",
    items: [
      "Participer a la valorisation de l'image de l'organisation sur les medias numeriques",
      "Referencer les services en ligne de l'organisation et mesurer leur visibilite",
      "Participer a l'evolution d'un site Web exploitant les donnees de l'organisation",
    ],
  },
  {
    bloc: "Travailler en mode projet",
    items: [
      "Analyser les objectifs et les modalites d'organisation d'un projet",
      "Planifier les activites",
      "Evaluer les indicateurs de suivi d'un projet et analyser les ecarts",
    ],
  },
  {
    bloc: "Mettre a disposition des utilisateurs un service informatique",
    items: [
      "Realiser les tests d'integration et d'acceptation d'un service",
      "Deployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    bloc: "Organiser son developpement professionnel",
    items: [
      "Mettre en place son environnement d'apprentissage personnel",
      "Mettre en oeuvre des outils et strategies de veille informationnelle",
      "Gerer son identite professionnelle",
      "Developper son projet professionnel",
    ],
  },
]

const realisations = [
  {
    section: "Realisations en cours de formation",
    items: [
      { label: "Gestion d'un parc informatique", cols: [true, true, true, true, false, false] },
      {
        label: "Mise en place d'outils de monitoring et amelioration des performances du systeme",
        cols: [false, false, false, false, false, false],
      },
      {
        label: "Conception et deploiement de solutions adaptees aux besoins de l'entreprise",
        cols: [false, false, false, true, false, false],
      },
      {
        label: "Suivi des evolutions technologiques et redaction de documentations techniques",
        cols: [false, false, false, false, false, true],
      },
    ],
  },
  {
    section: "Realisations en milieu professionnel - 1ere annee",
    items: [
      {
        label: "Installation, configuration et maintenance des equipements reseau et serveurs",
        cols: [true, false, false, false, false, false],
      },
      { label: "Preparation materielles d'outils informatique", cols: [true, true, true, false, false, false] },
      { label: "Resolution de probleme informatique type N1", cols: [true, true, true, false, false, false] },
    ],
  },
  {
    section: "Realisations en milieu professionnel - 2eme annee (28/04/2025 au 20/06/2025)",
    items: [
      {
        label: "Mise en place d'outils de monitoring et amelioration des performances du systeme",
        cols: [true, false, false, false, false, false],
      },
      {
        label: "Configuration de routeurs et switches Cisco (VLAN, STP, routage statique/dynamique) - Mise en place de services reseau (DHCP, DNS, NAT)",
        cols: [true, false, false, false, false, false],
      },
      {
        label: "Suivi des evolutions technologiques et redaction de documentations techniques",
        cols: [false, false, false, false, false, true],
      },
      {
        label: "Creation et gestion de machines virtuelles avec VirtualBox, Hyper-V, VMware ESXi",
        cols: [true, false, false, false, false, false],
      },
    ],
  },
]

const blocHeaders = [
  "Gerer le patrimoine informatique",
  "Repondre aux incidents",
  "Presence en ligne",
  "Mode projet",
  "Service informatique",
  "Dev. professionnel",
]

export default function MissionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Header */}
      <header className="border-b-4 border-green-400 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="border-2 border-white px-3 py-2 hover:bg-white hover:text-black flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              RETOUR
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold">MISSIONS.TASK</h1>
          </div>
        </div>
      </header>

      {/* Info + Download */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-green-400 mb-2">
                {">"} TABLEAU DE SYNTHESE DES REALISATIONS PROFESSIONNELLES
              </h2>
              <p className="text-sm text-gray-300">
                BTS Services Informatiques aux Organisations - Option SISR - Session 2025
              </p>
            </div>
            <a
              href="/docs/Tableau_de_synthese_missions.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors shrink-0"
            >
              <Download size={16} />
              TELECHARGER PDF
            </a>
          </div>
        </div>
      </section>

      {/* Competences */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">COMPETENCES_MISES_EN_OEUVRE.LOG</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map((bloc) => (
              <div key={bloc.bloc} className="border-2 border-white">
                <div className="border-b-2 border-white p-3 bg-green-400 text-black">
                  <h3 className="text-sm font-bold">{bloc.bloc.toUpperCase()}</h3>
                </div>
                <ul className="p-4 space-y-2">
                  {bloc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5 shrink-0">{">"}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau de synthese */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">REALISATIONS_PROFESSIONNELLES.DAT</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-white text-sm">
              <thead>
                <tr>
                  <th className="border-2 border-white p-3 text-left bg-green-400 text-black min-w-[300px]">
                    REALISATION
                  </th>
                  {blocHeaders.map((h) => (
                    <th
                      key={h}
                      className="border-2 border-white p-2 text-center bg-green-400 text-black text-xs min-w-[80px]"
                    >
                      {h.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {realisations.map((section) => (
                  <>
                    <tr key={section.section}>
                      <td
                        colSpan={7}
                        className="border-2 border-white p-3 bg-gray-800 text-green-400 font-bold text-xs"
                      >
                        {"// "}{section.section.toUpperCase()}
                      </td>
                    </tr>
                    {section.items.map((item) => (
                      <tr key={item.label} className="hover:bg-gray-800 transition-colors">
                        <td className="border-2 border-white p-3">{item.label}</td>
                        {item.cols.map((checked, i) => (
                          <td key={i} className="border-2 border-white p-2 text-center">
                            {checked ? <Check /> : <Empty />}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">{"© 2025 Coulibaly Abdoulaye | TECHNICIEN SYSTEME RESEAU"}</p>
      </footer>
    </div>
  )
}
