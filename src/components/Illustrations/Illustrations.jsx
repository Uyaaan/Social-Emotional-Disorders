export function DisorderIllo({ kind = 'wave', size = 120, fg = '#3b6ed1', bg = '#dde9ff' }) {
  const props = { width: size, height: size, viewBox: '0 0 120 120' }
  switch (kind) {
    case 'wave':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <path d="M20 70 Q35 50 50 70 T80 70 T110 70" stroke={fg} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M20 82 Q35 62 50 82 T80 82 T110 82" stroke={fg} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55" />
          <path d="M20 94 Q35 74 50 94 T80 94 T110 94" stroke={fg} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3" />
          <circle cx="60" cy="36" r="9" fill={fg} />
        </svg>
      )
    case 'rain':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <ellipse cx="60" cy="40" rx="32" ry="14" fill={fg} opacity="0.85" />
          <ellipse cx="40" cy="44" rx="20" ry="10" fill={fg} opacity="0.5" />
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={36 + i * 12} y1={60} x2={32 + i * 12} y2={86 + (i % 2) * 10} stroke={fg} strokeWidth="3" strokeLinecap="round" opacity={0.55 + (i % 2) * 0.2} />
          ))}
        </svg>
      )
    case 'wave2':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <path d="M15 60 L30 25 L45 60 L60 95 L75 60 L90 25 L105 60" stroke={fg} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="30" cy="25" r="5" fill={fg} />
          <circle cx="90" cy="25" r="5" fill={fg} />
          <circle cx="60" cy="95" r="5" fill={fg} opacity="0.5" />
        </svg>
      )
    case 'loop':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <circle cx="60" cy="60" r="32" stroke={fg} strokeWidth="3" fill="none" strokeDasharray="6 4" />
          <circle cx="60" cy="60" r="20" stroke={fg} strokeWidth="3" fill="none" />
          <path d="M60 28 L65 35 L60 32 Z" fill={fg} />
        </svg>
      )
    case 'spike':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <path d="M15 90 L40 90 L52 50 L60 30 L68 50 L80 90 L105 90" stroke={fg} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="30" r="4" fill={fg} />
        </svg>
      )
    case 'shadow':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <path d="M40 90 Q40 60 60 60 Q80 60 80 90 Z" fill={fg} opacity="0.75" />
          <circle cx="60" cy="42" r="14" fill={fg} opacity="0.75" />
          <circle cx="86" cy="30" r="6" fill={fg} />
          <line x1="86" y1="30" x2="76" y2="42" stroke={fg} strokeWidth="2" />
        </svg>
      )
    case 'spectrum':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={20 + i * 14} y={90 - ((i % 3) + 1) * 15} width="9" height={((i % 3) + 1) * 15 + 8} rx="2" fill={fg} opacity={0.45 + i * 0.09} />
          ))}
        </svg>
      )
    case 'jag':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <path d="M20 75 L35 55 L48 70 L62 40 L75 65 L88 50 L100 70" stroke={fg} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="62" cy="40" r="4" fill={fg} />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <path d="M30 50 L70 50 M58 38 L70 50 L58 62" stroke={fg} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M90 70 L50 70 M62 58 L50 70 L62 82" stroke={fg} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </svg>
      )
    case 'scatter':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          {[[28, 42, 7], [44, 72, 5], [64, 30, 8], [80, 58, 6], [96, 80, 5], [36, 90, 4], [72, 82, 4], [88, 32, 5]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={fg} opacity={0.5 + (i % 3) * 0.15} />
          ))}
          <path d="M28 42 Q44 72 64 30 T96 80" stroke={fg} strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="3 3" />
        </svg>
      )
    case 'thread':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
          <circle cx="30" cy="60" r="10" fill={fg} />
          <circle cx="90" cy="60" r="10" fill={fg} opacity="0.5" />
          <path d="M40 60 Q50 60 55 60" stroke={fg} strokeWidth="3" strokeLinecap="round" />
          <path d="M65 60 Q75 60 80 60" stroke={fg} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
          <line x1="58" y1="55" x2="62" y2="65" stroke={fg} strokeWidth="2" opacity="0.6" />
          <line x1="62" y1="55" x2="58" y2="65" stroke={fg} strokeWidth="2" opacity="0.6" />
        </svg>
      )
    default:
      return (
        <svg {...props} aria-hidden="true">
          <rect width="120" height="120" rx="20" fill={bg} />
        </svg>
      )
  }
}

export function MaterialIllo({ kind = 'card', size = 64, fg = '#3b6ed1', bg = '#dde9ff' }) {
  const props = { width: size, height: size, viewBox: '0 0 80 80' }
  switch (kind) {
    case 'gauge':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="80" height="80" rx="14" fill={bg} />
          <path d="M18 52 A22 22 0 0 1 62 52" stroke={fg} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
          <path d="M18 52 A22 22 0 0 1 50 33" stroke={fg} strokeWidth="3" fill="none" strokeLinecap="round" />
          <line x1="40" y1="52" x2="52" y2="35" stroke={fg} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="40" cy="52" r="3" fill={fg} />
        </svg>
      )
    case 'list':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="80" height="80" rx="14" fill={bg} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="18" y={22 + i * 10} width="5" height="5" rx="1.2" fill={fg} opacity={0.9 - i * 0.15} />
              <line x1="28" y1={24.5 + i * 10} x2={28 + 30 - i * 4} y2={24.5 + i * 10} stroke={fg} strokeWidth="2.2" strokeLinecap="round" opacity={0.85 - i * 0.15} />
            </g>
          ))}
        </svg>
      )
    case 'grid':
      return (
        <svg {...props} aria-hidden="true">
          <rect width="80" height="80" rx="14" fill={bg} />
          <rect x="20" y="20" width="17" height="17" rx="3" fill={fg} opacity="0.9" />
          <rect x="43" y="20" width="17" height="17" rx="3" fill={fg} opacity="0.55" />
          <rect x="20" y="43" width="17" height="17" rx="3" fill={fg} opacity="0.4" />
          <rect x="43" y="43" width="17" height="17" rx="3" fill={fg} opacity="0.75" />
        </svg>
      )
    case 'card':
    default:
      return (
        <svg {...props} aria-hidden="true">
          <rect width="80" height="80" rx="14" fill={bg} />
          <rect x="18" y="20" width="44" height="40" rx="6" fill="none" stroke={fg} strokeWidth="2.2" />
          <line x1="25" y1="32" x2="48" y2="32" stroke={fg} strokeWidth="2.2" strokeLinecap="round" />
          <line x1="25" y1="40" x2="55" y2="40" stroke={fg} strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
          <line x1="25" y1="48" x2="42" y2="48" stroke={fg} strokeWidth="2.2" strokeLinecap="round" opacity="0.4" />
        </svg>
      )
  }
}
