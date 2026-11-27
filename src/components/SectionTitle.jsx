export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className="mb-10 sm:mb-14 max-w-3xl">
      <h2 className={`h2 ${light ? '!text-paper' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-[17px] leading-relaxed ${light ? 'text-sea' : 'text-ink-soft'}`}>{subtitle}</p>
      )}
    </div>
  )
}
