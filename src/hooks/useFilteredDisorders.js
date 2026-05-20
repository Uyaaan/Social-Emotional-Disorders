import { useMemo } from 'react'
import { disorders as allDisorders } from '@/data/disorders'

export default function useFilteredDisorders({ category, query }) {
  return useMemo(() => {
    const trimmed = query.trim().toLowerCase()

    return allDisorders.filter((d) => {
      if (category !== 'all' && d.category !== category) return false
      if (!trimmed) return true

      const haystacks = [d.name, d.tagline, d.definition]

      if (Array.isArray(d.signs)) {
        haystacks.push(...d.signs)
      } else if (d.signs && typeof d.signs === 'object') {
        for (const arr of Object.values(d.signs)) {
          if (Array.isArray(arr)) haystacks.push(...arr)
        }
      }

      if (Array.isArray(d.types)) {
        for (const t of d.types) {
          if (t?.title) haystacks.push(t.title)
          if (t?.body) haystacks.push(t.body)
        }
      }

      return haystacks.some(
        (s) => typeof s === 'string' && s.toLowerCase().includes(trimmed)
      )
    })
  }, [category, query])
}
