import { NavLink } from 'react-router-dom'
import { Home, LayoutGrid, BookOpen, Info } from 'lucide-react'

const ITEMS = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/disorders', label: 'Disorders', icon: LayoutGrid },
  { to: '/references', label: 'References', icon: BookOpen },
  { to: '/about', label: 'About', icon: Info },
]

export default function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky bottom-0 z-30 border-t border-border bg-bg/90 backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-screen-sm grid-cols-4 gap-1 px-1.5 pb-3 pt-2">
        {ITEMS.map((it) => {
          const C = it.icon
          return (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                'flex flex-col items-center gap-0.5 rounded-xl px-1.5 py-1.5 text-[10.5px] tracking-wide transition ' +
                (isActive
                  ? 'font-semibold text-accent'
                  : 'font-medium text-ink-soft hover:text-ink')
              }
            >
              {({ isActive }) => (
                <>
                  <C size={20} aria-hidden="true" className={isActive ? 'text-accent' : 'text-ink-soft'} />
                  <span>{it.label}</span>
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
