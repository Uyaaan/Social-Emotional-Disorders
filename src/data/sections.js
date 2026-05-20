import { disorders } from '@/data/disorders'

export const sectionList = [
  { id: 'top', label: 'Welcome', category: null, number: null },
  { id: 'intro', label: 'What is SED?', category: null, number: null },
  { id: 'comparison', label: 'Similarities & differences', category: null, number: null },
  ...disorders.map((d, i) => ({
    id: d.id,
    label: d.name,
    category: d.category,
    number: i + 1,
  })),
]

export const sectionIds = sectionList.map((s) => s.id)
export const numberedSections = sectionList.filter((s) => s.id !== 'top')
