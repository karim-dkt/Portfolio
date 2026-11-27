// Carte du parcours : réseau de nœuds sur fond de courbes de niveau.
// kind : home (point de départ), done (réalisé), progress (en cours), goal (objectif)

const WIDE = {
  viewBox: '0 0 1400 720',
  font: 19,
  sub: 15,
  route: 'M740 540 C800 480 830 410 890 390 S1000 510 1050 480 S1120 350 1170 330 S1270 250 1318 206',
  nodes: [
    { id: 'home', x: 740, y: 540, kind: 'home', label: 'Fès', sub: 'Master Cloud & IoT', dx: 28, dy: 34, anchor: 'start' },
    { id: 'lab', x: 890, y: 390, kind: 'done', label: 'Lab DNS & DNSSEC', sub: 'réalisé', dx: 0, dy: -46, anchor: 'middle' },
    { id: 'pt', x: 1050, y: 480, kind: 'progress', label: 'Réseau d’entreprise', sub: 'Packet Tracer · en cours', dx: 0, dy: 46, anchor: 'middle' },
    { id: 'cyber', x: 1170, y: 330, kind: 'progress', label: 'Cisco CyberOps', sub: 'en préparation', dx: -26, dy: -16, anchor: 'end' },
    { id: 'goal', x: 1318, y: 206, kind: 'goal', label: 'Stage · Côte d’Ivoire', sub: 'juillet – août 2027', dx: -30, dy: -64, anchor: 'end' },
    { id: 'koris', x: 900, y: 640, kind: 'done', label: 'Koris ERP', sub: 'Docker · Cloudflare', dx: 24, dy: 6, anchor: 'start' },
    { id: 'wari', x: 1170, y: 610, kind: 'done', label: 'Wari', sub: 'PWA · Supabase', dx: 24, dy: 6, anchor: 'start' },
  ],
  links: [['home', 'koris'], ['koris', 'wari'], ['wari', 'pt'], ['lab', 'koris']],
}

const COMPACT = {
  viewBox: '0 0 400 520',
  font: 17,
  sub: 14,
  route: 'M70 470 C70 420 120 400 130 370 S70 300 90 260 S170 210 170 170 S110 110 120 70',
  nodes: [
    { id: 'home', x: 70, y: 470, kind: 'home', label: 'Fès', sub: 'Master Cloud & IoT', dx: 30, dy: 6, anchor: 'start' },
    { id: 'lab', x: 130, y: 370, kind: 'done', label: 'Lab DNS & DNSSEC', sub: 'réalisé', dx: 28, dy: 6, anchor: 'start' },
    { id: 'pt', x: 90, y: 260, kind: 'progress', label: 'Réseau d’entreprise', sub: 'en cours', dx: 28, dy: 6, anchor: 'start' },
    { id: 'cyber', x: 170, y: 170, kind: 'progress', label: 'Cisco CyberOps', sub: 'en préparation', dx: 28, dy: 6, anchor: 'start' },
    { id: 'goal', x: 120, y: 70, kind: 'goal', label: 'Stage · Côte d’Ivoire', sub: 'juillet – août 2027', dx: 34, dy: -8, anchor: 'start' },
  ],
  links: [],
}

function Node({ kind, x, y }) {
  if (kind === 'home')
    return (
      <g>
        <circle cx={x} cy={y} r="22" fill="#d6127e" opacity=".15" />
        <circle cx={x} cy={y} r="10" fill="#d6127e" stroke="#fff" strokeWidth="3" />
      </g>
    )
  if (kind === 'goal')
    return (
      <g>
        <ellipse cx={x} cy={y + 2} rx="16" ry="5" fill="#13242e" opacity=".18" />
        <line x1={x} y1={y} x2={x} y2={y - 52} stroke="#13242e" strokeWidth="3" strokeLinecap="round" />
        <path d={`M${x} ${y - 52} L${x + 34} ${y - 42} L${x} ${y - 32}Z`} fill="#d6127e" />
      </g>
    )
  if (kind === 'progress')
    return (
      <g>
        <circle cx={x} cy={y} r="13" fill="#fff" stroke="#13242e" strokeWidth="3" />
        <path d={`M${x} ${y - 13} A13 13 0 0 1 ${x} ${y + 13}Z`} fill="#13242e" />
      </g>
    )
  return (
    <g>
      <circle cx={x} cy={y + 2} r="12" fill="#13242e" opacity=".18" />
      <circle cx={x} cy={y} r="12" fill="#13242e" stroke="#fff" strokeWidth="3" />
    </g>
  )
}

function Map({ cfg, className, slice }) {
  const byId = Object.fromEntries(cfg.nodes.map((n) => [n.id, n]))
  return (
    <svg
      viewBox={cfg.viewBox}
      preserveAspectRatio={slice ? 'xMaxYMid meet' : 'xMidYMid meet'}
      className={className}
      role="img"
      aria-label="Carte du parcours : du Master à Fès, par le lab DNSSEC, le projet réseau d’entreprise et la certification CyberOps, jusqu’au stage en Côte d’Ivoire en juillet – août 2027."
    >
      {cfg.links.map(([a, b]) => (
        <line key={a + b} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} stroke="#13242e" strokeOpacity=".35" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
      ))}
      <path d={cfg.route} fill="none" stroke="#fff" strokeWidth="11" strokeLinecap="round" opacity=".7" />
      <path id={slice ? 'route-wide' : 'route-compact'} d={cfg.route} fill="none" stroke="#d6127e" strokeWidth="5" strokeLinecap="round" />
      <circle r="7" fill="#fff" stroke="#d6127e" strokeWidth="3" className="packet">
        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
          <mpath href={slice ? '#route-wide' : '#route-compact'} />
        </animateMotion>
      </circle>
      {cfg.nodes.map((n) => (
        <g key={n.id}>
          <Node {...n} />
          <text
            x={n.x + n.dx}
            y={n.y + n.dy}
            textAnchor={n.anchor}
            fontSize={cfg.font}
            fontWeight="800"
            fill="#13242e"
            stroke="#e3f2f6"
            strokeWidth="6"
            paintOrder="stroke"
            strokeLinejoin="round"
          >
            {n.label}
            <tspan x={n.x + n.dx} dy={cfg.sub + 6} fontSize={cfg.sub} fontWeight="600" fill={n.kind === 'goal' ? '#b00e68' : '#5d707a'}>
              {n.sub}
            </tspan>
          </text>
        </g>
      ))}
    </svg>
  )
}

export function Contours({ className }) {
  const lines = Array.from({ length: 11 }, (_, k) => {
    const y = 40 + k * 64
    const a = 18 + (k % 3) * 10
    return `M-20 ${y} C 220 ${y - a} 380 ${y + a} 620 ${y} S 1040 ${y - a} 1440 ${y + a / 2}`
  })
  return (
    <svg viewBox="0 0 1400 720" preserveAspectRatio="none" className={className} aria-hidden="true">
      {lines.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#a8551b" strokeOpacity={i % 4 === 0 ? 0.28 : 0.14} strokeWidth={i % 4 === 0 ? 1.6 : 1} />
      ))}
    </svg>
  )
}

export function LegendKey() {
  const items = [
    ['done', 'Réalisé'],
    ['progress', 'En cours'],
    ['goal', 'Objectif'],
  ]
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
      {items.map(([kind, label]) => (
        <li key={kind} className="inline-flex items-center gap-2">
          <svg width="22" height="22" viewBox={kind === 'goal' ? '-4 -58 44 64' : '-16 -16 32 32'} aria-hidden="true">
            <Node kind={kind} x={0} y={0} />
          </svg>
          {label}
        </li>
      ))}
    </ul>
  )
}

export function WideMap() {
  return <Map cfg={WIDE} slice className="hidden xl:block absolute inset-0 w-full h-full" />
}

export function CompactMap() {
  return <Map cfg={COMPACT} className="xl:hidden w-full max-w-sm mx-auto h-auto mt-8 lg:mt-0" />
}
