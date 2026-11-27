import SectionTitle from './SectionTitle'

const FACTS = [
  ['Basé à', 'Fès, Maroc'],
  ['Originaire de', 'Korhogo, Côte d’Ivoire'],
  ['Formation', 'Master Cloud & IoT, FST Fès'],
  ['Stage recherché', 'Juillet – août 2027, Côte d’Ivoire'],
  ['Langues', 'Français (langue maternelle) · Anglais (B1/B2)'],
  ['Centres d’intérêt', 'Échecs, écriture, lecture, cultures, cybersécurité'],
]

export default function About() {
  return (
    <section id="apropos" className="py-20 sm:py-28 bg-land border-y border-line">
      <div className="page grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
        <div>
          <SectionTitle title="À propos" />
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft max-w-[62ch] -mt-4">
            <p>
              Je m’appelle <strong className="text-ink">Karim Diakité</strong>. Originaire de Korhogo, en Côte
              d’Ivoire, je suis en Master <strong className="text-ink">Cloud &amp; Internet des Objets</strong> à la
              FST de Fès.
            </p>
            <p>
              L’<strong className="text-ink">administration réseau</strong>, le <strong className="text-ink">cloud</strong> et
              le <strong className="text-ink">DevOps</strong> sont au cœur de mon projet, avec la sécurité comme fil
              rouge. J’apprends en construisant : des labs sous Linux, des maquettes de réseau d’entreprise, et des
              applications que je déploie moi-même.
            </p>
            <p>
              Les échecs m’ont appris à anticiper. C’est ce que je cherche à faire sur un réseau : prévoir la panne ou
              l’attaque avant qu’elle arrive.
            </p>
          </div>
        </div>

        <dl className="bg-white border border-line rounded-2xl divide-y divide-line">
          {FACTS.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[8.5rem_minmax(0,1fr)] sm:grid-cols-[10rem_minmax(0,1fr)] gap-4 px-5 sm:px-6 py-4">
              <dt className="text-sm font-semibold text-contour pt-0.5">{k}</dt>
              <dd className="text-[16px] text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
