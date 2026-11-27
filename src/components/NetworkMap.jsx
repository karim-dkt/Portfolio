// Carte du parcours, version « terminal de nuit » : courbes de niveau turquoise,
// nœuds repérés comme des NODE_xx avec leurs coordonnées.
// kind : home (départ), done (réalisé), progress (en cours), goal (objectif)

const C = { bg: '#071318', fg: '#e2f1ef', soft: '#a3c2be', mute: '#729591', accent: '#2dd4bf', amber: '#f2c14e' }
const MONO = '"JetBrains Mono", ui-monospace, monospace'

const WIDE = {
  viewBox: '0 0 1400 720',
  font: 19,
  sub: 15,
  route: 'M740 540 C800 480 830 410 890 390 S1000 510 1050 480 S1120 350 1170 330 S1270 250 1318 206',
  nodes: [
    { id: 'home', x: 740, y: 540, kind: 'home', label: 'Fès', sub: 'Master Cloud & IoT', code: 'NODE_01 · 34.03N 5.00W', dx: 28, dy: 34, anchor: 'start' },
    { id: 'lab', x: 890, y: 390, kind: 'done', label: 'Lab DNS & DNSSEC', sub: 'réalisé', code: 'NODE_02', dx: 0, dy: -50, anchor: 'middle' },
    { id: 'pt', x: 1050, y: 480, kind: 'progress', label: 'Réseau d’entreprise', sub: 'Packet Tracer · en cours', code: 'NODE_03', dx: 0, dy: 50, anchor: 'middle' },
    { id: 'cyber', x: 1170, y: 330, kind: 'progress', label: 'Cisco CyberOps', sub: 'en préparation', code: 'NODE_04', dx: -28, dy: -20, anchor: 'end' },
    { id: 'goal', x: 1318, y: 206, kind: 'goal', label: 'Stage · Côte d’Ivoire', sub: 'juillet – août 2027', code: 'NODE_05 · 7.54N 5.55W', dx: -30, dy: -78, anchor: 'end' },
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
    { id: 'home', x: 70, y: 470, kind: 'home', label: 'Fès', sub: 'Master Cloud & IoT', code: 'NODE_01', dx: 30, dy: 6, anchor: 'start' },
    { id: 'lab', x: 130, y: 370, kind: 'done', label: 'Lab DNS & DNSSEC', sub: 'réalisé', dx: 28, dy: 6, anchor: 'start' },
    { id: 'pt', x: 90, y: 260, kind: 'progress', label: 'Réseau d’entreprise', sub: 'en cours', dx: 28, dy: 6, anchor: 'start' },
    { id: 'cyber', x: 170, y: 170, kind: 'progress', label: 'Cisco CyberOps', sub: 'en préparation', dx: 28, dy: 6, anchor: 'start' },
    { id: 'goal', x: 120, y: 70, kind: 'goal', label: 'Stage · Côte d’Ivoire', sub: 'juillet – août 2027', code: 'NODE_05', dx: 34, dy: -8, anchor: 'start' },
  ],
  links: [],
}

function Node({ kind, x, y }) {
  if (kind === 'home')
    return (
      <g>
        <circle cx={x} cy={y} r="24" fill={C.accent} opacity=".14" />
        <circle cx={x} cy={y} r="10" fill={C.accent} stroke={C.bg} strokeWidth="3" />
      </g>
    )
  if (kind === 'goal')
    return (
      <g>
        <ellipse cx={x} cy={y + 2} rx="16" ry="5" fill={C.amber} opacity=".25" />
        <line x1={x} y1={y} x2={x} y2={y - 52} stroke={C.fg} strokeWidth="3" strokeLinecap="round" />
        <path d={`M${x} ${y - 52} L${x + 34} ${y - 42} L${x} ${y - 32}Z`} fill={C.amber} />
      </g>
    )
  if (kind === 'progress')
    return (
      <g>
        <circle cx={x} cy={y} r="13" fill={C.bg} stroke={C.amber} strokeWidth="3" />
        <path d={`M${x} ${y - 13} A13 13 0 0 1 ${x} ${y + 13}Z`} fill={C.amber} />
      </g>
    )
  return <circle cx={x} cy={y} r="11" fill={C.fg} stroke={C.bg} strokeWidth="3" />
}

function Map({ cfg, className, wide }) {
  const byId = Object.fromEntries(cfg.nodes.map((n) => [n.id, n]))
  const routeId = wide ? 'route-wide' : 'route-compact'
  return (
    <svg
      viewBox={cfg.viewBox}
      preserveAspectRatio={wide ? 'xMaxYMid meet' : 'xMidYMid meet'}
      className={className}
      role="img"
      aria-label="Carte du parcours : du Master à Fès, par le lab DNSSEC, le projet réseau d’entreprise et la certification CyberOps, jusqu’au stage en Côte d’Ivoire en juillet – août 2027."
    >
      <defs>
        <filter id={`${routeId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      {cfg.links.map(([a, b]) => (
        <line key={a + b} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} stroke={C.soft} strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
      ))}
      <path d={cfg.route} pathLength="1" fill="none" stroke={C.accent} strokeWidth="12" strokeLinecap="round" opacity=".35" filter={`url(#${routeId}-glow)`} className="route-draw" />
      <path id={routeId} d={cfg.route} pathLength="1" fill="none" stroke={C.accent} strokeWidth="4" strokeLinecap="round" className="route-draw" />
      <circle r="6" fill={C.bg} stroke={C.accent} strokeWidth="3" className="packet">
        <animateMotion dur="6s" begin="2.8s" repeatCount="indefinite" rotate="auto">
          <mpath href={`#${routeId}`} />
        </animateMotion>
      </circle>
      {cfg.nodes.map((n, i) => (
        <g key={n.id} className="node-pop" style={{ animationDelay: `${0.5 + i * 0.22}s` }}>
          {(n.kind === 'progress' || n.kind === 'goal') && (
            <circle cx={n.x} cy={n.kind === 'goal' ? n.y - 42 : n.y} r="16" fill="none" stroke={C.amber} strokeWidth="2" className="ping" style={{ animationDelay: `${i * 0.4}s` }} />
          )}
          <Node {...n} />
          <text x={n.x + n.dx} y={n.y + n.dy} textAnchor={n.anchor} fontSize={cfg.font} fontWeight="800" fill={C.fg} stroke={C.bg} strokeWidth="6" paintOrder="stroke" strokeLinejoin="round">
            {n.label}
            <tspan x={n.x + n.dx} dy={cfg.sub + 6} fontSize={cfg.sub} fontWeight="600" fill={n.kind === 'goal' ? C.amber : C.mute}>
              {n.sub}
            </tspan>
            {n.code && (
              <tspan x={n.x + n.dx} dy={cfg.sub + 4} fontSize={cfg.sub - 3} fontFamily={MONO} fontWeight="500" fill={C.accent} fillOpacity=".75">
                {n.code}
              </tspan>
            )}
          </text>
        </g>
      ))}
    </svg>
  )
}

// Courbes de niveau façon carte topographique : anneaux autour de « sommets » et lignes d'écoulement.
function ring(cx, cy, r, k) {
  const pts = []
  for (let i = 0; i <= 48; i++) {
    const t = (i / 48) * Math.PI * 2
    const rr = r * (1 + 0.13 * Math.sin(3 * t + k) + 0.07 * Math.sin(5 * t + 2 * k))
    pts.push(`${(cx + rr * Math.cos(t)).toFixed(1)} ${(cy + rr * 0.78 * Math.sin(t)).toFixed(1)}`)
  }
  return `M${pts.join(' L')}Z`
}
const PEAKS = [
  [260, 150, 9, 22],
  [1240, 520, 12, 24],
  [560, 640, 7, 20],
]
const FLOW = Array.from({ length: 16 }, (_, k) => {
  const y = 10 + k * 48
  const a = 22 + (k % 4) * 9
  return `M-60 ${y} C 240 ${y - a} 420 ${y + a * 1.4} 700 ${y + 6} S 1160 ${y - a} 1480 ${y + a * 0.6}`
})

export function Contours({ className }) {
  return (
    <svg viewBox="0 0 1400 720" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <g className="topo-drift">
        {FLOW.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={C.accent} strokeOpacity={i % 5 === 0 ? 0.3 : 0.1} strokeWidth={i % 5 === 0 ? 1.4 : 1} />
        ))}
      </g>
      {PEAKS.map(([cx, cy, n, step], p) => (
        <g key={p} className="topo-breathe" style={{ animationDelay: `${p * 2}s` }}>
          {Array.from({ length: n }, (_, k) => (
            <path key={k} d={ring(cx, cy, 14 + k * step, k + p)} fill="none" stroke={C.accent} strokeOpacity={k % 4 === 0 ? 0.32 : 0.12} strokeWidth={k % 4 === 0 ? 1.4 : 1} />
          ))}
        </g>
      ))}
      <g fontFamily={MONO} fontSize="12" fill={C.accent} fillOpacity=".45">
        <text x="1050" y="40">| | | | | | | |</text>
        <text x="40" y="700">ubuntu 24.04 · gnome 46 · uptime ∞</text>
      </g>
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
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-fg-soft">
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
  return <Map cfg={WIDE} wide className="hidden xl:block absolute inset-0 w-full h-full" />
}

export function CompactMap() {
  return <Map cfg={COMPACT} className="xl:hidden w-full max-w-sm mx-auto h-auto mt-8 lg:mt-0" />
}
