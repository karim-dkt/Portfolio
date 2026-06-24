import { useInView } from '../hooks/useInView'

export default function SectionTitle({ title, subtitle }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`text-center mb-16 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm md:text-base">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </div>
  )
}
