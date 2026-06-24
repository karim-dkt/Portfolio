import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Mail, Phone, CheckCircle, XCircle, Loader } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'

const INPUT =
  'w-full bg-navy-900 border border-slate-700/60 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors'

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('idle')
  const [ref, inView] = useInView()

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
    <section id="contact" className="py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Contact"
          subtitle="Une question, une opportunité, une idée ? Parlons-en."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left — info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Parlons ensemble</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Actuellement en stage, je reste ouvert aux collaborations sur des projets et à
                toute discussion autour de l&apos;informatique, du développement ou de la
                cybersécurité.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+2120657145808"
                className="flex items-center gap-4 p-4 bg-card border border-slate-700/40 rounded-xl hover:border-primary/20 transition-colors group"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Téléphone / WhatsApp</p>
                  <p className="text-sm text-white font-medium">(+212) 065-714-5808</p>
                </div>
              </a>

              <a
                href="mailto:thekardiak@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-slate-700/40 rounded-xl hover:border-primary/20 transition-colors group"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email personnel</p>
                  <p className="text-sm text-white font-medium">thekardiak@gmail.com</p>
                </div>
              </a>

              <a
                href="mailto:karim.diakite@usmba.ac.ma"
                className="flex items-center gap-4 p-4 bg-card border border-slate-700/40 rounded-xl hover:border-secondary/20 transition-colors group"
              >
                <div className="p-2.5 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                  <Mail size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email académique</p>
                  <p className="text-sm text-white font-medium">
                    karim.diakite@usmba.ac.ma
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-card border border-emerald-500/20 rounded-2xl gap-4">
                <CheckCircle size={48} className="text-emerald-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-4 py-2 text-sm text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="bg-card border border-slate-700/40 rounded-2xl p-6 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="Votre nom"
                      className={INPUT}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="votre@email.com"
                      className={INPUT}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Objet de votre message"
                    className={INPUT}
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className={`${INPUT} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    <XCircle size={16} className="flex-shrink-0" />
                    Erreur d&apos;envoi. Écrivez-moi directement à thekardiak@gmail.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-navy-900 font-semibold rounded-lg hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader size={18} className="animate-spin" /> Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
