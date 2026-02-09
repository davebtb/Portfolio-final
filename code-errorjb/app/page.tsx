import { Download, Mail, Linkedin } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Header */}
      <header className="border-b-4 border-green-400 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white p-3 md:p-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">COULIBALY Abdoulaye</h1>
            <p className="text-base md:text-xl text-green-400">Technicien système réseau</p>
            <p className="text-sm md:text-base mt-2">Actuellement en stage alterné de 2 mois</p>
          </div>
          <nav className="flex flex-col sm:flex-row gap-3 md:gap-6">
            <a
              href="/about"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [À_PROPOS]
            </a>
            <a
              href="/ecole"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [ÉCOLE]
            </a>
            <a
              href="/bts-sio"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [BTS_SIO]
            </a>
            <a
              href="/entreprise"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [ENTREPRISE]
            </a>
            <a
              href="/missions"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [MISSIONS]
            </a>
            <a
              href="/projets"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [PROJETS]
            </a>

            <a
              href="/veille-technologique"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [VEILLE_TECH]
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">À_propos_de_moi.TXT</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">PROFIL:</h3>
              <p className="mb-4 leading-relaxed">
                Étudiant en BTS SIO option SISR à l'IPSSI Paris, je suis actuellement en stage alterné de 2 mois. Mon cursus et mes
                expériences m'ont permis de développer un profil polyvalent avec des compétences solides.
              </p>

              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">DOMAINES D'EXPERTISE:</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-white">• Administration Système et Réseau</h4>
                  <p className="text-sm text-gray-300 ml-4">
                    Configuration Active Directory, DNS, SMB, Zabbix, serveurs FTP/FTPS et web, mise en place de
                    réseaux, sécurisation des systèmes.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white">• Support Informatique</h4>
                  <p className="text-sm text-gray-300 ml-4">
                    Gestion des systèmes d'exploitation, résolution de problèmes techniques, assistance aux
                    utilisateurs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white">• Développement Web</h4>
                  <p className="text-sm text-gray-300 ml-4">
                    Création d'interfaces utilisateur (UX/UI), développement back-end (Python, SQL, PHP), gestion de
                    bases de données.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">QUALITÉS:</h3>
              <p className="leading-relaxed">
                Personne rigoureuse, disciplinée, avec un bon esprit d'équipe et une grande capacité d'adaptation.
                Polyvalence et motivation sont mes atouts principaux.
              </p>
            </div>
            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">Compétences.JSON:</h3>
              <pre className="text-sm leading-relaxed">
                {`{
  \"systemes\": [
    \"Ubuntu\", \"Linux Debian\", \"Kali Linux\",
    \"Windows Server\", \"Active Directory\"
  ],
  \"reseaux\": [
    \"Cisco\", \"DHCP\", \"DNS\", \"VPN\",
    \"Firewall\", \"SMB\"
  ],
  \"virtualisation\": [
    \"VirtualBox\", \"VMware\", \"Hyper-V\"
  ],
  \"databases\": [
    \"MySQL\", \"Oracle\", \"SQL\"
  ],
  \"developpement\": [
    \"HTML5/CSS3\", \"JavaScript\", \"PHP\",
    \"Python\", \"Java\", \"NodeJS\"
  ],
  \"outils\": [
    \"Git/Github\", \"Visual Studio\",
    \"Microsoft Teams\", \"Zabbix\", \"Cursor\", 
  ],
  \"securite\": [
    \"Rootme\", \"Tryhackme\", \"SSL/TLS\"
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">PROJETS.DIR</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Project 1 */}
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
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">ZABBIX_MONITORING</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Zabbix Monitoring Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Installation et configuration du logiciel Zabbix sur différents systèmes d'exploitation pour
                  monitoring d'infrastructure.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Zabbix, Linux, Ubuntu, Debian</code>
                </div>
              </div>
            </div>

            {/* Project 3 */}
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
              </div>
            </div>

            {/* Project 4 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">NETWORK_VIRTUALIZATION</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Virtual Network Setup"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Mise en relation par réseau NAT de différentes machines virtuelles avec configuration FTP/FTPS
                  sécurisée.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">VirtualBox, NAT, FTP/FTPS, Firewall</code>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/projets"
              className="border-2 border-green-400 bg-green-400 text-black px-6 py-3 hover:bg-black hover:text-green-400 inline-block font-bold"
            >
              [VOIR_PLUS_DE_PROJETS]
            </a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">RESUME.PDF</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">EXPÉRIENCE:</h3>

              <div className="mb-6">
                <h4 className="font-bold">TECHNICIEN SYSTÈME ET RÉSEAUX</h4>
                <p className="text-green-400">IPSSI | Octobre 2024 - Présent</p>
                <ul className="mt-2 space-y-1">
                  <li>• Configuration Active Directory et application GPO</li>
                  <li>• Gestion services DNS et SMB</li>
                  <li>• Installation et configuration Zabbix multi-OS</li>
                  <li>• Virtualisation et réseaux NAT</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold">Technicien Support Informatique</h4>
                <p className="text-green-400">METRO FRANCE | Novembre 2025 - Fevrier 2026</p>
                <ul className="mt-2 space-y-1">
                  <li>• Préparation matérielle d'outils et machines </li>
                  <li>• Résoolution de problème N1</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold">Administrateur Systeme Réseau </h4>
                <p className="text-green-400">Institut IFFP | Mai - Juillet 2019</p>
                <ul className="mt-2 space-y-1">
                  <li>• Gestion de parc informatique</li>
                  <li>• Installation d'équipement informatique</li>
                  <li>• Résolution de problème et gestion de ticketing</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">FORMATION:</h3>
              <div className="mb-4">
                <h4 className="font-bold">BTS SIO SISR</h4>
                <p className="text-green-400">IPSSI Paris | 2024 - En cours</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">BACCALAURÉAT</h4>
                <p className="text-green-400">Établissement Français Liberté | 2023-2024</p>
              </div>


              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">LANGUES:</h3>
              <ul className="space-y-2">
                <li>• Anglais - Niveau B2</li>
                <li>• Espagnol - Niveau B1</li>
                <li>• Français - Langue maternelle</li>
              </ul>

              <div className="mt-8">
                <a
                  href="#"
                  className="border-2 border-green-400 bg-green-400 text-black px-4 py-2 hover:bg-black hover:text-green-400 flex items-center gap-2 justify-center"
                >
                  <Download size={16} />
                  DOWNLOAD_RESUME.PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="p-6" >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">CONTACT.SH</h2>
          <div className="border-2 border-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2">EMAIL</h3>
                <a
                  href="mailto:abdoulayecoul667@gmail.com"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                >
                  abdoulayecoul667@gmail.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-green-400 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-bold mb-2">TÉLÉPHONE</h3>
                <a
                  href="tel:+33621288194"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                >
                  +33 6 21 28 81 94
                </a>
              </div>

              <div className="text-center">
                <Linkedin size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2">LINKEDIN</h3>
                <a
                  href="https://www.linkedin.com/in/abdoulaye-coulibaly-18a4b1333/"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-green-400 font-bold">$ echo "Let's build something that works."</p>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="border-t-4 border-green-400 p-6 text-center" >
        <p className="text-green-400">© 2025 Coulibaly Abdoulaye | TECHNICIEN SYSTÈME RÉSEAU | PARIS, ÎLE-DE-FRANCE</p>
      </footer >
    </div >
  )
}
