import { SiPython, SiCplusplus, SiMysql, SiDocker, SiGit, SiGithub, SiLinux, SiSpringboot, SiReact, SiWireshark, SiVirtualbox, SiCloudflare, SiSupabase } from 'react-icons/si'
import { FaJava, FaWindows } from 'react-icons/fa'
import { Network, Router, Server, Globe, RefreshCw, ShieldCheck, Cloud, Code2, Ticket, Landmark } from 'lucide-react'

export const skills = [
  {
    category: 'Réseaux & systèmes',
    Icon: Network,
    swatch: '#2dd4bf',
    proof: 'Lab DHCP, DNS & DNSSEC · projet Packet Tracer en cours',
    items: [
      { name: 'Linux',         Icon: SiLinux,     color: '#FCC624' },
      { name: 'Windows',       Icon: FaWindows,   color: '#0078D4' },
      { name: 'TCP/IP',        Icon: Network,     color: '#94a3b8' },
      { name: 'Routage & NAT', Icon: Router,      color: '#1BA0D7' },
      { name: 'Wireshark',     Icon: SiWireshark, color: '#1679A7' },
      { name: 'Packet Tracer', Icon: Router,      color: '#049fd9' },
    ],
  },
  {
    category: 'Services réseau',
    Icon: Server,
    swatch: '#38bdf8',
    proof: 'Lab DHCP, DNS & DNSSEC',
    items: [
      { name: 'DHCP + relais', Icon: Server,      color: '#22c55e' },
      { name: 'DNS BIND9',     Icon: Globe,       color: '#38bdf8' },
      { name: 'DDNS',          Icon: RefreshCw,   color: '#a78bfa' },
      { name: 'DNSSEC',        Icon: ShieldCheck, color: '#f59e0b' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    Icon: Cloud,
    swatch: '#f2c14e',
    proof: 'Koris ERP (Docker, Cloudflare Tunnel) · Wari (Supabase)',
    items: [
      { name: 'Docker',            Icon: SiDocker,     color: '#2496ED' },
      { name: 'VirtualBox',        Icon: SiVirtualbox, color: '#2F61B4' },
      { name: 'Cloudflare Tunnel', Icon: SiCloudflare, color: '#F38020' },
      { name: 'Supabase',          Icon: SiSupabase,   color: '#3ECF8E' },
      { name: 'Git',               Icon: SiGit,        color: '#F05032' },
      { name: 'GitHub',            Icon: SiGithub,     color: '#e2f1ef' },
    ],
  },
  {
    category: 'Développement',
    Icon: Code2,
    swatch: '#a78bfa',
    proof: 'Koris ERP · Wari · SGCD',
    items: [
      { name: 'Java',        Icon: FaJava,       color: '#f89820' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'React',       Icon: SiReact,      color: '#61DAFB' },
      { name: 'Python',      Icon: SiPython,     color: '#3776AB' },
      { name: 'C / C++',     Icon: SiCplusplus,  color: '#00599C' },
      { name: 'MySQL',       Icon: SiMysql,      color: '#4479A1' },
    ],
  },
]

export const education = [
  {
    degree: 'Master — Cloud & Internet des Objets',
    school: 'Faculté des Sciences et Techniques — Fès',
    period: '2026 – …',
    badge: 'Inscrit',
    description:
      "Formation couvrant les services cloud (IaaS, PaaS, SaaS — AWS, Azure, GCP), les protocoles IoT (MQTT, CoAP, LoRaWAN), la sécurité cloud, le Big Data (Hadoop/Spark), l'IA embarquée et les architectures microservices/DevOps. Se conclut par un PFE de 4 à 6 mois.",
  },
  {
    degree: 'Licence 3 — Génie Informatique',
    school: 'Faculté des Sciences et Techniques — Fès',
    period: '2025 – 2026',
    badge: 'Diplômé',
    description:
      "Approfondissement des fondamentaux de l'informatique : systèmes, réseaux, développement logiciel et algorithmique avancée.",
  },
  {
    degree: 'DEUST — Mathématiques Informatique Physique',
    school: 'Faculté des Sciences et Techniques — Fès',
    period: '2023 – 2025',
    description:
      'Formation pluridisciplinaire alliant mathématiques, algorithmique, programmation C/C++ et physique.',
  },
  {
    degree: 'Baccalauréat — Série scientifique (C)',
    school: "Lycée Moderne Korhogo, Côte d'Ivoire",
    period: '2022 – 2023',
    description: 'Série scientifique avec spécialité mathématiques.',
  },
]

export const projects = [
  {
    id: 4,
    featured: true,
    title: 'Koris ERP',
    type: 'Projet de stage devenu un ERP SaaS',
    year: '2026',
    badge: 'ERP SaaS',
    description:
      "ERP SaaS multi-entreprises né d'un projet de stage, évolué en plateforme complète. Full-stack Spring Boot + React avec modules RH, comptabilité, gestion clients/fournisseurs, notifications SMS/WhatsApp, mode hors-ligne PWA et exports PDF/Excel.",
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT', 'Docker', 'PWA', 'Redis', 'Twilio', 'Cloudflare R2', 'OpenPDF', 'Apache POI'],
    github: null,
    privateCode: true,
    demo: 'https://www.koris-erp.com',
    video: null,
    logo: '/koris-logo.png',
    logoGlow: '#2563EB',
    highlights: [
      'Architecture full-stack Spring Boot 3.4 + React 19 — 51 entités JPA, 26 modules frontend',
      'Système multi-rôles : Developer → AdminPrincipal → Administrateur → Vendeur',
      'Multi-entreprises et multi-dépôts avec périmètres isolés',
      'Modules RH, comptabilité, profils clients/fournisseurs et grilles tarifaires',
      'Notifications SMS/WhatsApp via Twilio, stockage fichiers Cloudflare R2',
      'Auth JWT, BCrypt, protection brute-force + déploiement Cloudflare Tunnel',
      "Journal d'audit : 40+ actions tracées avec filtres avancés",
      'Mode hors-ligne PWA : cache IndexedDB + file de requêtes + synchro auto',
      'Exports PDF (factures, rapports) et Excel via Apache POI',
    ],
  },
  {
    id: 6,
    featured: true,
    title: 'Lab DHCP, DNS & DNSSEC',
    type: 'Projet académique — Lab réseau & sécurité',
    year: '2026',
    badge: 'Sécurité',
    description:
      "Réseau d'entreprise sur VM Ubuntu Server : DHCP derrière un agent de relais, DNS BIND9 maître/esclave, signature de la zone avec DNSSEC, puis un test d'attaque où une réponse DNS falsifiée est rejetée par le résolveur validant.",
    tech: ['Linux', 'BIND9', 'DNSSEC', 'ISC DHCP', 'Netplan', 'VirtualBox'],
    github: 'https://github.com/karim-dkt/labs-dns-dhcp-dnssec',
    demo: null,
    video: null,
    image: '/lab-dns.svg',
    imageFit: 'contain',
    highlights: [
      'DHCP : deux étendues, réservation par adresse MAC, agent de relais entre deux réseaux',
      'DNS BIND9 : zones directe et inverse, réplication maître/esclave (NOTIFY, AXFR/IXFR)',
      "Continuité du service : ns2 répond toujours quand ns1 est arrêté",
      'DNSSEC : politique de signature sur mesure (KSK/ZSK RSASHA256), validation avec ancre de confiance',
      'Test d\'attaque : un faux serveur renvoie une adresse falsifiée, le résolveur la rejette (SERVFAIL)',
    ],
  },
  {
    id: 3,
    title: 'Wari',
    type: 'Projet personnel',
    year: '2026',
    badge: 'PWA',
    description:
      "Application web progressive (PWA) de gestion budgétaire personnelle. Suivi des dépenses par catégorie, gestion des prêts/emprunts, carnet de recettes — avec mode hors-ligne, authentification sécurisée et support multi-devises.",
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'CSS', 'PWA', 'Service Worker'],
    github: 'https://github.com/karim-dkt/Wari',
    demo: null,
    video: null,
    logo: '/wari-logo.svg',
    logoGlow: '#7c3aed',
    highlights: [
      'Authentification sécurisée via Supabase Auth',
      'Mode hors-ligne (PWA) avec service worker et cache local',
      'Suivi des dépenses avec filtres par date et répartition par catégorie',
      'Gestion des prêts/emprunts avec statut de remboursement',
      'Support multi-devises : MAD, FCFA, EUR, USD',
      'Catégories personnalisables par utilisateur',
    ],
  },
  {
    id: 5,
    title: 'SGCD',
    type: 'Projet académique',
    year: '2026',
    badge: 'Java',
    description:
      "Application Java EE de gestion d'un cabinet dentaire. Système multi-rôles (Administrateur, Dentiste, Assistante) pour la gestion des patients, rendez-vous, dossiers médicaux, consultations et facturation.",
    tech: ['Java', 'Java EE', 'MySQL', 'JDBC', 'Docker'],
    github: null,
    demo: null,
    video: null,
    logo: '/sgcd-logo.svg',
    logoGlow: '#0ea5e9',
    highlights: [
      'Système multi-rôles : Administrateur, Dentiste, Assistante',
      'Gestion complète des patients : dossier médical, allergies, antécédents',
      'Module rendez-vous et consultations avec actes dentaires',
      'Facturation et paiement (espèces, chèque)',
      'Schéma relationnel avec 16 tables et contraintes d\'intégrité',
      'Déploiement de la base de données via Docker Compose',
    ],
  },
  {
    id: 1,
    title: 'Discover UK',
    type: 'Projet académique',
    year: '2025 – 2026',
    badge: 'Web',
    description:
      "Site web dynamique dédié à la présentation du Royaume-Uni. Réalisé en binôme, il intègre des actualités dynamiques, une newsletter avec envoi automatique d'e-mails, et une interface interactive full-stack.",
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL', 'PHPMailer', 'XAMPP'],
    github: 'https://github.com/karim-dkt/United-Kingdom-Web-Project',
    demo: null,
    video: 'https://player.vimeo.com/video/1153191281',
    TileIcon: Landmark,
    logoGlow: '#2563eb',
    highlights: [
      'Module actualités avec affichage dynamique depuis la base de données',
      'Newsletter avec notifications e-mail automatiques via PHPMailer',
      'Requêtes préparées avec PDO (protection injections SQL)',
      'Architecture client-serveur structurée',
    ],
  },
  {
    id: 2,
    title: 'EventHub',
    type: 'Projet académique',
    year: '2025 – 2026',
    badge: 'BDD',
    description:
      "Système de réservation de billets pour événements (concerts, théâtre, etc.). Conçu autour d'une base de données MySQL avec gestion stricte des transactions ACID pour garantir l'atomicité des réservations.",
    tech: ['SQL', 'MySQL', 'Transactions ACID', 'Modélisation relationnelle'],
    github: 'https://github.com/karim-dkt/EventHub',
    demo: null,
    video: null,
    TileIcon: Ticket,
    logoGlow: '#10b981',
    highlights: [
      'Gestion des transactions ACID pour éviter les doubles réservations',
      'Modélisation entité-association complète',
      'Requêtes complexes multi-tables (JOIN, sous-requêtes)',
      "Gestion des contraintes d'intégrité référentielle",
    ],
  },
]

export const certifications = [
  {
    name: 'Cisco CyberOps Associate',
    org: 'Cisco Networking Academy · Code 212',
    status: 'En préparation',
    period: '2027',
    description:
      "Surveillance et analyse de la sécurité : sécurité des systèmes Linux et Windows, analyse du trafic et des journaux, détection et réponse aux incidents. Prépare l'examen Cisco 200-201.",
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    status: 'Prévue',
    period: '2028',
    description:
      "Fondamentaux du cloud AWS : calcul, stockage, réseau, sécurité et tarification. Prévue en fin de Master.",
  },
]
