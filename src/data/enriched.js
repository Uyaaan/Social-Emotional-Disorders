import { disorders as raw } from './disorders'
import { disorderMeta } from './disorderMeta'

function flattenSigns(signs) {
  if (!signs) return []
  if (Array.isArray(signs)) return signs
  return Object.entries(signs).flatMap(([group, items]) =>
    (items || []).map((it) => ({ ...it, group }))
  )
}

export const disorders = raw.map((d) => {
  const meta = disorderMeta[d.id] || {}
  return {
    ...d,
    accent: meta.accent || 'slate',
    illo: meta.illo || 'wave',
    references: meta.references || [],
    symptoms: flattenSigns(d.signs),
  }
})

export const byId = Object.fromEntries(disorders.map((d) => [d.id, d]))
