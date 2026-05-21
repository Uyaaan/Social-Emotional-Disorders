import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

function LogoMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      {Array.from({ length: 11 }).map((_, i) => {
        const a = (i / 11) * Math.PI * 2 - Math.PI / 2
        const x = 16 + Math.cos(a) * 11
        const y = 16 + Math.sin(a) * 11
        const active = i === 0
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={active ? 3 : 1.8}
            fill={active ? 'var(--color-accent)' : 'currentColor'}
            fillOpacity={active ? 1 : 0.85}
          />
        )
      })}
    </svg>
  )
}

export default function Header() {
  const [theme, toggleTheme] = useTheme()
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-sm items-center gap-2.5 px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-ink transition hover:opacity-80"
        >
          <LogoMark size={26} />
          <span className="font-display text-[15px] font-bold tracking-tight">Eleven Minds</span>
        </Link>
        <div className="flex-1" />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-ink transition hover:bg-surface-alt"
        >
          {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
