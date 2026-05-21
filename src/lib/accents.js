// Maps an accent key to Tailwind classes. The CSS vars are defined in
// src/index.css and flip on dark mode automatically.

const map = {
  azure: { fg: 'text-azure-fg', bg: 'bg-azure-bg', dot: 'bg-azure-fg' },
  plum: { fg: 'text-plum-fg', bg: 'bg-plum-bg', dot: 'bg-plum-fg' },
  sunrise: { fg: 'text-sunrise-fg', bg: 'bg-sunrise-bg', dot: 'bg-sunrise-fg' },
  mint: { fg: 'text-mint-fg', bg: 'bg-mint-bg', dot: 'bg-mint-fg' },
  flame: { fg: 'text-flame-fg', bg: 'bg-flame-bg', dot: 'bg-flame-fg' },
  slate: { fg: 'text-slate-fg', bg: 'bg-slate-bg', dot: 'bg-slate-fg' },
}

export function accentClasses(name) {
  return map[name] || map.slate
}

const hexMap = {
  azure: { fg: 'var(--color-azure-fg)', bg: 'var(--color-azure-bg)' },
  plum: { fg: 'var(--color-plum-fg)', bg: 'var(--color-plum-bg)' },
  sunrise: { fg: 'var(--color-sunrise-fg)', bg: 'var(--color-sunrise-bg)' },
  mint: { fg: 'var(--color-mint-fg)', bg: 'var(--color-mint-bg)' },
  flame: { fg: 'var(--color-flame-fg)', bg: 'var(--color-flame-bg)' },
  slate: { fg: 'var(--color-slate-fg)', bg: 'var(--color-slate-bg)' },
}

export function accentVars(name) {
  return hexMap[name] || hexMap.slate
}
