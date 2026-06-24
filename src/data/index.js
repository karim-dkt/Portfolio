import { SiC, SiCplusplus, SiPython, SiHtml5, SiJavascript, SiPhp, SiMysql, SiDocker, SiIntellijidea, SiGit, SiGithub, SiXampp, SiLinux, SiPostman, SiSpringboot, SiReact, SiVite, SiHibernate, SiEclipseide, SiWireshark } from 'react-icons/si'
import { FaJava, FaCss3Alt, FaWindows } from 'react-icons/fa'
import { DiVisualstudio } from 'react-icons/di'
import { Cpu, Network, Layers, Table, Code2, Share2, GitBranch, Router } from 'lucide-react'

export const skills = [
  {
    category: 'Langages',
    icon: '💻',
    items: [
      { name: 'C',          Icon: SiC,          color: '#A8B9CC' },
      { name: 'C++',        Icon: SiCplusplus,  color: '#00599C' },
      { name: 'Java',       Icon: FaJava,        color: '#f89820' },
      { name: 'Python',     Icon: SiPython,      color: '#3776AB' },
      { name: 'Assembleur', Icon: Cpu,           color: '#94a3b8' },
    ],
  },
  {
    category: 'Développement web',
    icon: '🌐',
    items: [
      { name: 'HTML5',      Icon: SiHtml5,      color: '#E34F26' },
      { name: 'CSS3',       Icon: FaCss3Alt,    color: '#1572B6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'PHP',        Icon: SiPhp,        color: '#777BB4' },
    ],
  },
  {
    category: 'Bases de données',
    icon: '🗄️',
    items: [
      { name: 'MySQL',       Icon: SiMysql, color: '#4479A1' },
      { name: 'SQL',         Icon: Table,   color: '#94a3b8' },
      { name: 'Transactions', Icon: Layers, color: '#94a3b8' },
      { name: 'Modélisation', Icon: Share2, color: '#94a3b8' },
    ],
  },
  {
    category: 'Réseaux & Systèmes',
    icon: '🔌',
    items: [
      { name: 'Linux',          Icon: SiLinux,      color: '#FCC624' },
      { name: 'Windows',        Icon: FaWindows,    color: '#0078D4' },
      { name: 'TCP/IP',         Icon: Network,      color: '#94a3b8' },
      { name: 'OSI',            Icon: GitBranch,    color: '#94a3b8' },
      { name: 'Wireshark',      Icon: SiWireshark,  color: '#1679A7' },
      { name: 'Packet Tracer',  Icon: Router,       color: '#1BA0D7' },
    ],
  },
  {
    category: 'Outils dev',
    icon: '🛠️',
    items: [
      { name: 'Git',      Icon: SiGit,          color: '#F05032' },
      { name: 'GitHub',   Icon: SiGithub,       color: '#f0f6fc' },
      { name: 'VS Code',  Icon: DiVisualstudio, color: '#007ACC' },
      { name: 'IntelliJ', Icon: SiIntellijidea, color: '#FE315D' },
      { name: 'Eclipse',  Icon: SiEclipseide,   color: '#2C2255' },
      { name: 'Docker',   Icon: SiDocker,       color: '#2496ED' },
      { name: 'XAMPP',    Icon: SiXampp,        color: '#FB7A24' },
      { name: 'Postman',  Icon: SiPostman,      color: '#FF6C37' },
    ],
  },
  {
    category: 'Frameworks',
    icon: '⚡',
    items: [
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'React',       Icon: SiReact,      color: '#61DAFB' },
      { name: 'Vite',        Icon: SiVite,       color: '#646CFF' },
      { name: 'Hibernate',   Icon: SiHibernate,  color: '#59666C' },
    ],
  },
  {
    category: 'Conception',
    icon: '📐',
    items: [
      { name: 'PlantUML',       Icon: Code2,    color: '#00d4ff' },
      { name: 'Ent. Architect', Icon: Share2,   color: '#00A9E0' },
      { name: 'UML',            Icon: GitBranch,color: '#8b5cf6' },
    ],
  },
]

export const education = [
  {
    degree: 'Licence 3 — Génie Informatique',
    school: 'Faculté des Sciences et Techniques — Fès',
    period: '2025 – 2026',
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
    title: 'AGSV',
    type: 'Projet de stage — SaaS',
    year: '2026',
    badge: 'SaaS',
    description:
      "Plateforme SaaS complète de gestion de stock et de vente pour PME. Architecture full-stack Spring Boot + React, système multi-rôles sur 3 niveaux, mode hors-ligne PWA, exports PDF/Excel et journal d'audit complet.",
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT', 'Docker', 'PWA', 'OpenPDF', 'Apache POI'],
    github: 'https://github.com/karim-dkt/AGSV',
    demo: null,
    video: null,
    logo: '/agsv-logo.png',
    logoGlow: '#1a6b3a',
    highlights: [
      'Architecture full-stack Spring Boot 3.4 + React 19',
      'Système multi-rôles : AdminPrincipal → Administrateur → Vendeur',
      'Multi-entreprises et multi-dépôts avec périmètres isolés',
      'Auth JWT, BCrypt, protection brute-force + Cloudflare Tunnel',
      "Journal d'audit : 40+ actions tracées avec filtres avancés",
      'Mode hors-ligne PWA : cache IndexedDB + file de requêtes + synchro auto',
      'Exports PDF (factures, rapports) et Excel via Apache POI',
      'Déploiement Docker Compose + Cloudflare Tunnel',
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
    image: '/web.jpg',
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
    image: '/database.jpg',
    highlights: [
      'Gestion des transactions ACID pour éviter les doubles réservations',
      'Modélisation entité-association complète',
      'Requêtes complexes multi-tables (JOIN, sous-requêtes)',
      "Gestion des contraintes d'intégrité référentielle",
    ],
  },
]
