import Link from "next/link"
import { ArrowLeft, ExternalLink, ShieldAlert, Bot, Brain, TrendingUp, AlertTriangle, BookOpen } from "lucide-react"

export default function VeilleTechnologiquePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Header */}
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
            <h1 className="text-2xl md:text-4xl font-bold">VEILLE_TECHNOLOGIQUE.LOG</h1>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              {">"} SUJET : L'INTELLIGENCE ARTIFICIELLE EN CYBERSECURITE
            </h2>
            <p className="leading-relaxed mb-4">
              {"L'intelligence artificielle (IA) transforme en profondeur le domaine de la cybersecurite. Utilisee aussi bien par les defenseurs que par les attaquants, l'IA redefinit les strategies de protection des systemes d'information. Cette veille technologique analyse les enjeux, les opportunites et les menaces liees a l'IA dans le contexte de la cybersecurite en 2025-2026."}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="border border-green-400 text-green-400 px-3 py-1 text-sm">IA_GENERATIVE</span>
              <span className="border border-green-400 text-green-400 px-3 py-1 text-sm">CYBERSECURITE</span>
              <span className="border border-green-400 text-green-400 px-3 py-1 text-sm">MACHINE_LEARNING</span>
              <span className="border border-green-400 text-green-400 px-3 py-1 text-sm">SOC_AUTOMATISE</span>
              <span className="border border-green-400 text-green-400 px-3 py-1 text-sm">ZERO_TRUST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">METHODOLOGIE_VEILLE.SH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-white p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <BookOpen size={20} />
                SOURCES UTILISEES
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>ANSSI (Agence Nationale de la Securite des Systemes d'Information)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>NIST (National Institute of Standards and Technology)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>Gartner - Rapports cybersecurite 2025-2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>Accenture - State of Cybersecurity 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>LeMagIT, Journal du Net, ICT Journal</span>
                </li>
              </ul>
            </div>
            <div className="border-2 border-white p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <TrendingUp size={20} />
                OUTILS DE VEILLE
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>Google Alerts - mots-cles "IA cybersecurite"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>Feedly - agrgegation de flux RSS specialises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>LinkedIn - suivi d'experts en cybersecurite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>Twitter/X - hashtags #CyberSec #AIinSecurity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">$</span>
                  <span>CVE / CERT-FR - bulletins de vulnerabilites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IA Defensive */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">
            <span className="flex items-center gap-3">
              <ShieldAlert size={24} className="text-green-400" />
              IA_DEFENSIVE.LOG
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border-2 border-white p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">DETECTION DES MENACES</h3>
              <p className="text-sm leading-relaxed mb-4">
                {"Les solutions SIEM/SOAR integrent desormais le machine learning pour analyser des millions d'evenements en temps reel. Des outils comme Wazuh, Splunk et Microsoft Sentinel utilisent l'IA pour detecter les comportements anormaux, reduire les faux positifs et accelerer la reponse aux incidents."}
              </p>
              <div className="bg-gray-800 border border-green-400 p-3 text-sm">
                <p className="text-green-400 mb-1">// Exemple concret</p>
                <p>{"Wazuh utilise des regles de correlation enrichies par le ML pour identifier les tentatives d'intrusion qui echappent aux signatures classiques."}</p>
              </div>
            </div>
            <div className="border-2 border-white p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">SOC AUTOMATISE</h3>
              <p className="text-sm leading-relaxed mb-4">
                {"L'IA agentique permet d'automatiser les taches repetitives des analystes SOC : triage des alertes, enrichissement contextuel, et execution de playbooks de remediation. Gartner prevoit que d'ici 2026, plus de 40% des operations SOC seront assistees par l'IA."}
              </p>
              <div className="bg-gray-800 border border-green-400 p-3 text-sm">
                <p className="text-green-400 mb-1">// Impact</p>
                <p>{"Reduction du temps moyen de detection (MTTD) de 70% et du temps moyen de reponse (MTTR) de 60% dans les SOC utilisant l'IA."}</p>
              </div>
            </div>
            <div className="border-2 border-white p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">ZERO TRUST & IA</h3>
              <p className="text-sm leading-relaxed mb-4">
                {"L'architecture Zero Trust (\"ne jamais faire confiance, toujours verifier\") est renforcee par l'IA qui permet une authentification adaptative et continue. 81% des organisations prevoient d'adopter le Zero Trust d'ici 2026 selon Zscaler."}
              </p>
              <div className="bg-gray-800 border border-green-400 p-3 text-sm">
                <p className="text-green-400 mb-1">// Principe</p>
                <p>{"L'IA analyse en continu le comportement utilisateur (UEBA) pour ajuster dynamiquement les niveaux d'acces et detecter les compromissions de comptes."}</p>
              </div>
            </div>
            <div className="border-2 border-white p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">ANALYSE DE VULNERABILITES</h3>
              <p className="text-sm leading-relaxed mb-4">
                {"Les scanners de vulnerabilites alimentes par l'IA peuvent prioriser les correctifs en fonction du contexte specifique de l'organisation, analyser le code source pour detecter les failles avant le deploiement, et simuler des scenarios d'attaque."}
              </p>
              <div className="bg-gray-800 border border-green-400 p-3 text-sm">
                <p className="text-green-400 mb-1">// Outils</p>
                <p>{"GitHub Copilot Security, Snyk, Qualys AI et CrowdStrike Charlotte AI integrent l'IA dans l'analyse de vulnerabilites."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA Offensive / Menaces */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">
            <span className="flex items-center gap-3">
              <AlertTriangle size={24} className="text-red-400" />
              <span>IA_OFFENSIVE_MENACES.LOG</span>
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="border-2 border-red-400 p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">PHISHING AUGMENTE</h3>
              <p className="text-sm leading-relaxed">
                {"L'IA generative permet de creer des emails de phishing hyper-personnalises, sans fautes d'orthographe, imitant parfaitement le style d'ecriture d'un collegue ou superieur. Les deepfakes audio et video sont utilises pour du vishing (voice phishing) de plus en plus credible."}
              </p>
            </div>
            <div className="border-2 border-red-400 p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">MALWARES POLYMORPHES</h3>
              <p className="text-sm leading-relaxed">
                {"Les attaquants utilisent l'IA pour generer des malwares qui mutent automatiquement leur code pour echapper a la detection par signatures. Ces malwares polymorphes s'adaptent en temps reel aux defenses qu'ils rencontrent."}
              </p>
            </div>
            <div className="border-2 border-red-400 p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">EMPOISONNEMENT DE MODELES</h3>
              <p className="text-sm leading-relaxed">
                {"L'ANSSI alerte sur les risques d'empoisonnement des donnees d'entrainement des modeles IA. Un attaquant peut corrompre un modele de detection pour qu'il ignore certains types d'attaques, ou manipuler un LLM via des injections de prompts."}
              </p>
            </div>
          </div>
          <div className="border-2 border-white mt-6 p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
              <Bot size={20} />
              DEMOCRATISATION DES CYBERATTAQUES
            </h3>
            <p className="text-sm leading-relaxed">
              {"Selon le Journal du Net (2025), l'IA a entraine une \"democratisation et industrialisation des cyberattaques\". Des outils comme WormGPT ou FraudGPT, disponibles sur le dark web, permettent a des individus peu qualifies de lancer des attaques sophistiquees. L'IA reduit considerablement la barriere technique a l'entree pour les cybercriminels."}
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres cles */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">
            <span className="flex items-center gap-3">
              <Brain size={24} className="text-green-400" />
              CHIFFRES_CLES.DAT
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-2 border-green-400 p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">81%</p>
              <p className="text-sm">des organisations prevoient d'adopter le Zero Trust d'ici 2026</p>
              <p className="text-xs text-gray-400 mt-2">Source: Zscaler 2025</p>
            </div>
            <div className="border-2 border-green-400 p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">40%</p>
              <p className="text-sm">des operations SOC seront assistees par l'IA d'ici 2026</p>
              <p className="text-xs text-gray-400 mt-2">Source: Gartner 2025</p>
            </div>
            <div className="border-2 border-green-400 p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">+300%</p>
              <p className="text-sm">d'augmentation des attaques de phishing assistees par IA en 2024-2025</p>
              <p className="text-xs text-gray-400 mt-2">Source: Accenture 2025</p>
            </div>
            <div className="border-2 border-green-400 p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">70%</p>
              <p className="text-sm">de reduction du MTTD dans les SOC utilisant l'IA</p>
              <p className="text-xs text-gray-400 mt-2">Source: IBM Security 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">CHRONOLOGIE_EVENEMENTS.LOG</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full" />
                <div className="w-0.5 h-full bg-green-400" />
              </div>
              <div className="border-2 border-white p-4 flex-1">
                <p className="text-green-400 font-bold mb-1">FEVRIER 2025</p>
                <p className="text-sm font-bold mb-1">Sommet pour l'Action sur l'IA - Paris</p>
                <p className="text-sm">{"L'ANSSI publie ses recommandations sur la securisation des systemes integrant l'IA, alertant sur les risques d'empoisonnement de modeles et les injections de prompts."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full" />
                <div className="w-0.5 h-full bg-green-400" />
              </div>
              <div className="border-2 border-white p-4 flex-1">
                <p className="text-green-400 font-bold mb-1">MAI 2025</p>
                <p className="text-sm font-bold mb-1">Rapport Gartner - Tendances Cybersecurite</p>
                <p className="text-sm">{"Gartner identifie l'IA generative comme le facteur numero 1 de reorientation des budgets cybersecurite en entreprise, avec une croissance de 15% des investissements."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full" />
                <div className="w-0.5 h-full bg-green-400" />
              </div>
              <div className="border-2 border-white p-4 flex-1">
                <p className="text-green-400 font-bold mb-1">JUIN 2025</p>
                <p className="text-sm font-bold mb-1">Rapport Accenture - State of Cybersecurity 2025</p>
                <p className="text-sm">{"Accenture revele que la majorite des entreprises ne disposent pas de la maturite necessaire pour contrer les menaces basees sur l'IA, l'IA des attaquants depassant les capacites defensives."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full" />
                <div className="w-0.5 h-full bg-green-400" />
              </div>
              <div className="border-2 border-white p-4 flex-1">
                <p className="text-green-400 font-bold mb-1">2026 (PREVISIONS)</p>
                <p className="text-sm font-bold mb-1">Previsions LeMagIT - 8 tendances cybersecurite</p>
                <p className="text-sm">{"Emergence de l'IA agentique dans les chaines d'outils defensifs, nouveaux risques lies aux serveurs MCP, et generalisation du Zero Trust assiste par IA dans les grandes organisations."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">CONCLUSION.TXT</h2>
          <div className="border-2 border-white p-6">
            <p className="leading-relaxed mb-4">
              {"L'intelligence artificielle est devenue un acteur incontournable de la cybersecurite. Cote defensif, elle accelere la detection, automatise la reponse aux incidents et renforce le Zero Trust. Cote offensif, elle democratise les attaques et les rend plus sophistiquees."}
            </p>
            <p className="leading-relaxed mb-4">
              {"Pour un technicien systeme et reseau, il est essentiel de maitriser les outils de securite integrant l'IA (Wazuh, CrowdStrike, Microsoft Sentinel) et de comprendre les nouveaux vecteurs d'attaque pour mieux proteger les infrastructures."}
            </p>
            <p className="leading-relaxed text-green-400 font-bold">
              {"$ echo \"La cybersecurite de demain sera augmentee par l'IA ou ne sera pas.\""}
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-white pb-2">SOURCES.BIB</h2>
          <div className="border-2 border-white p-6 space-y-3 text-sm">
            <a href="https://cyber.gouv.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <ExternalLink size={14} />
              ANSSI - Recommandations sur la securisation des systemes integrant l'IA (2025)
            </a>
            <a href="https://www.nist.gov/publications/zero-trust-architecture" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <ExternalLink size={14} />
              NIST - Zero Trust Architecture (SP 800-207)
            </a>
            <a href="https://www.gartner.com/en/cybersecurity" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <ExternalLink size={14} />
              Gartner - Top Cybersecurity Trends 2025-2026
            </a>
            <a href="https://www.accenture.com/fr-fr/insights/security/state-cybersecurity-2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <ExternalLink size={14} />
              Accenture - State of Cybersecurity 2025
            </a>
            <a href="https://www.zscaler.com/blogs/security-research/threatlabz-2025-vpn-report-why-81-organizations-plan-adopt-zero-trust-2026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <ExternalLink size={14} />
              Zscaler - ThreatLabz 2025 VPN Report: Zero Trust Adoption
            </a>
            <a href="https://www.journaldunet.com/cybersecurite/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <ExternalLink size={14} />
              Journal du Net - IA et cybermenaces 2025-2026
            </a>
            <a href="https://www.lemagit.fr/actualites/366637562/Les-8-principales-previsions-en-matiere-de-cybersecurite-pour-2026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400">
              <ExternalLink size={14} />
              LeMagIT - 8 previsions cybersecurite pour 2026
            </a>
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
