import DKTLogo from './DKTLogo'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/karim-dkt',
    icon: '/github_icone.webp',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karimdkt',
    icon: '/linkedin_icone.webp',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thekardiak.00/',
    icon: '/instagram_icone.webp',
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <DKTLogo className="text-xl" />
          <div>
            <p className="text-sm font-semibold text-white">Karim Diakité</p>
            <p className="text-xs text-slate-500">Étudiant en Génie Informatique</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <img src={icon} alt={label} className="h-5 w-5 object-contain" />
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600 text-center">
          © {new Date().getFullYear()} Karim Diakité — React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
