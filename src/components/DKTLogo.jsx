export default function DKTLogo({ className = '' }) {
  return (
    <span className={`font-mono font-bold tracking-tight select-none ${className}`}>
      <span className="text-primary">&lt;</span>
      <span className="text-white">DKT</span>
      <span className="text-primary"> /&gt;</span>
    </span>
  )
}
