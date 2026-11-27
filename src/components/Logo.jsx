export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="12" fill="none" stroke="#d6127e" strokeWidth="2" />
        <circle cx="14" cy="14" r="5.5" fill="#d6127e" />
      </svg>
      <span className={`font-extrabold text-[17px] leading-none ${light ? 'text-paper' : 'text-ink'}`}>
        Karim Diakité
      </span>
    </span>
  )
}
