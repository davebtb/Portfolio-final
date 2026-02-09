import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ProjetsPage() {
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
            <h1 className="text-2xl md:text-4xl font-bold">TOUS_MES_PROJETS.DIR</h1>
          </div>
        </div>
      </header>

      {/* All Projects Section */}
      <section className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Existing Project 1 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">ACTIVE_DIRECTORY_DOMAIN</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Active Directory Configuration"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Création et configuration complète d'un domaine Active Directory avec application de GPO pour
                  restrictions d'accès et configuration système.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Windows Server, Active Directory, GPO, DNS</code>
                </div>
                <a
                  href="/docs/active_directory_doc.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Download size={16} />
                  TELECHARGER PDF
                </a>
              </div>
            </div>

            {/* Project 2 - GLPI */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">GLPI_TICKETING</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="GLPI Ticketing Interface"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  {"Mise en place d'un serveur GLPI pour la gestion de parc informatique et la creation de tickets d'assistance, avec configuration de MariaDB, Apache2 et PHP sur Debian."}
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">GLPI, MariaDB, Apache2, PHP, Debian, SSH</code>
                </div>
                <a
                  href="/docs/Mise_en_place_serveur_glpi_ticketing.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Download size={16} />
                  TELECHARGER PDF
                </a>
              </div>
            </div>

            {/* Existing Project 3 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">SECURE_WEB_SERVER</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Secure Web Server Setup"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Configuration serveur web sécurisé (HTTP/HTTPS) avec certificat SSL et redirection automatique vers
                  HTTPS.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Apache/Nginx, SSL/TLS, Linux</code>
                </div>
                <a
                  href="/docs/mise_en_place_openssl_apache2.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Download size={16} />
                  TELECHARGER PDF
                </a>
              </div>
            </div>

            {/* Project 4 - Reverse Proxy */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">REVERSE_PROXY</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Reverse Proxy Nginx Configuration"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  {"Mise en place d'un reverse proxy Nginx avec load balancing vers deux serveurs web Apache2, configuration reseau VirtualBox en mode NAT et reseau prive hote."}
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Nginx, Apache2, VirtualBox, NAT, Load Balancing</code>
                </div>
                <a
                  href="/docs/mise_en_place_reverse_proxy.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Download size={16} />
                  TELECHARGER PDF
                </a>
              </div>
            </div>

            {/* Project 5 - OPNsense */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">OPNSENSE_FIREWALL</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="OPNsense Firewall Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Mise en place d'un pare-feu périmétrique OPNsense avec configuration des interfaces LAN/WAN,
                  service DHCP, règles de filtrage et proxy HTTP/HTTPS transparent avec inspection SSL.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">OPNsense, FreeBSD, Squid Proxy, SSL/TLS, DHCP, NAT</code>
                </div>
                <a
                  href="/docs/OPNsense_mise-en-place-d'un-pare-feu.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Download size={16} />
                  TELECHARGER PDF
                </a>
              </div>
            </div>

            {/* Project 6 - Wazuh */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">WAZUH_SIEM</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Wazuh SIEM Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Installation et configuration de Wazuh, solution SIEM open-source pour la surveillance des systèmes,
                  la détection d'intrusions et le déploiement d'agents sur les machines du parc informatique.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Wazuh, Filebeat, Ubuntu, SSL, SIEM</code>
                </div>
                <a
                  href="/docs/installation_et_configuration_wazuh.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Download size={16} />
                  TELECHARGER PDF
                </a>
              </div>
            </div>

            {/* Project 7 - Proxmox */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">PROXMOX_VIRTUALIZATION</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Proxmox VE Interface"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Installation et configuration d'un serveur Proxmox VE pour la gestion de machines virtuelles
                  et conteneurs, incluant la configuration réseau, le téléversement d'images ISO et l'administration via l'interface web.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Proxmox VE, Virtualisation, Debian, ISO Management</code>
                </div>
                <a
                  href="/docs/installation-serveur-proxmox.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-green-400 text-green-400 px-4 py-2 text-sm hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Download size={16} />
                  TELECHARGER PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 Coulibaly Abdoulaye | TECHNICIEN SYSTÈME RÉSEAU | PARIS, ÎLE-DE-FRANCE</p>
      </footer>
    </div>
  )
}
