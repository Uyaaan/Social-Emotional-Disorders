import { useCallback, useState } from 'react'

const MAX_COMPARE = 2

export default function useCompareSelection() {
  const [selectedIds, setSelectedIds] = useState([])

  const toggle = useCallback((id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= MAX_COMPARE) return prev
      return [...prev, id]
    })
  }, [])

  const clear = useCallback(() => setSelectedIds([]), [])

  const set = useCallback((ids) => {
    setSelectedIds(ids.slice(0, MAX_COMPARE))
  }, [])

  return {
    selectedIds,
    toggle,
    clear,
    set,
    isFull: selectedIds.length >= MAX_COMPARE,
    isSelected: (id) => selectedIds.includes(id),
  }
}
