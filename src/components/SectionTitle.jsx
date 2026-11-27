export default function SectionTitle({ title, subtitle, cmd }) {
  return (
    <div className="mb-10 sm:mb-14 max-w-3xl reveal">
      {cmd && (
        <p className="font-mono text-sm text-accent mb-3">
          <span className="text-fg-mute">karim@dkt:~$</span> {cmd}
        </p>
      )}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="mt-3 text-[17px] leading-relaxed text-fg-soft">{subtitle}</p>}
    </div>
  )
}
