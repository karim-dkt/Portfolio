import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Mail, MessageCircle, CheckCircle, XCircle, Loader, GraduationCap } from 'lucide-react'
import GithubIcon from './GithubIcon'
import Logo from './Logo'

const INPUT =
  'w-full bg-deep border border-fg/20 text-fg placeholder-fg/40 rounded-lg px-4 py-3 text-[16px] focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/25 transition-colors'

const CHANNELS = [
  { Icon: MessageCircle, label: 'WhatsApp', value: '+212 6 57 14 58 08', href: 'https://wa.me/212657145808', main: true },
  { Icon: Mail, label: 'E-mail', value: 'thekardiak@gmail.com', href: 'mailto:thekardiak@gmail.com' },
  { Icon: GraduationCap, label: 'E-mail universitaire', value: 'karim.diakite@usmba.ac.ma', href: 'mailto:karim.diakite@usmba.ac.ma' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/karim-dkt' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karimdkt' },
  { label: 'Instagram', href: 'https://www.instagram.com/thekardiak.00/' },
]

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      form.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer id="contact" className="bg-deep text-fg">
      <div className="page py-20 sm:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-accent/10 rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            Disponible juillet – août 2027
          </p>
          <p className="font-mono text-sm text-accent mb-3"><span className="text-fg-mute">karim@dkt:~$</span> ./contact.sh</p>
          <h2 className="h2 mb-4">Travaillons ensemble</h2>
          <p className="text-[17px] leading-relaxed text-fg-soft mb-8 max-w-[52ch]">
            Je cherche un stage en cloud, DevOps ou administration réseau d’entreprise en Côte d’Ivoire. Le plus
            rapide pour me joindre : WhatsApp ou e-mail.
          </p>
          <ul className="space-y-3">
            {CHANNELS.map(({ Icon, label, value, href, main }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 ${
                    main ? 'bg-accent border-accent text-accent-ink hover:bg-fg' : 'border-fg/15 hover:border-accent/50'
                  }`}
                >
                  <Icon size={22} className="shrink-0" />
                  <span className="min-w-0">
                    <span className={`block text-sm ${main ? 'text-accent-ink/75' : 'text-fg-soft'}`}>{label}</span>
                    <span className="block font-semibold break-all">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ transitionDelay: '150ms' }}>
          {status === 'success' ? (
            <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-fg/15 gap-4">
              <CheckCircle size={48} className="text-accent" />
              <h3 className="text-[22px] font-extrabold">Message envoyé</h3>
              <p className="text-fg-soft">Je vous réponds au plus vite.</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn border-2 border-fg/40 hover:bg-fg hover:text-bg">
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="rounded-2xl border border-fg/15 bg-card/60 p-6 sm:p-8 space-y-4">
              <h3 className="text-[20px] font-extrabold mb-1">Écrire un message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="f-name" className="block text-sm text-fg-soft mb-1.5">Nom complet</label>
                  <input id="f-name" type="text" name="from_name" required autoComplete="name" className={INPUT} />
                </div>
                <div>
                  <label htmlFor="f-mail" className="block text-sm text-fg-soft mb-1.5">E-mail</label>
                  <input id="f-mail" type="email" name="from_email" required autoComplete="email" className={INPUT} />
                </div>
              </div>
              <div>
                <label htmlFor="f-subject" className="block text-sm text-fg-soft mb-1.5">Sujet</label>
                <input id="f-subject" type="text" name="subject" required placeholder="Proposition de stage, question…" className={INPUT} />
              </div>
              <div>
                <label htmlFor="f-msg" className="block text-sm text-fg-soft mb-1.5">Message</label>
                <textarea id="f-msg" name="message" required rows={5} className={`${INPUT} resize-none`} />
              </div>
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-fg bg-danger/15 border border-danger/40 rounded-lg px-4 py-3">
                  <XCircle size={16} className="shrink-0" />
                  Le message n’est pas parti. Écrivez-moi directement à thekardiak@gmail.com.
                </p>
              )}
              <button type="submit" disabled={status === 'loading'} className="btn-accent w-full disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'loading' ? (<><Loader size={18} className="animate-spin" /> Envoi…</>) : (<><Send size={18} /> Envoyer</>)}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-fg/10">
        <div className="page py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo light />
          <ul className="flex items-center gap-5 text-[15px] font-semibold">
            {SOCIALS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg-soft hover:text-fg">
                  {label === 'GitHub' && <GithubIcon size={16} />}
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-fg-mute">© {new Date().getFullYear()} Karim Diakité</p>
        </div>
      </div>
    </footer>
  )
}
