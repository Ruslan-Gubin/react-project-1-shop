
export const categoryNameForData = (data) => {
  const searcCaregory = data.map(item => {
    if (item.category.length === 0) return 'без категории'
    if (item.category === 'album') return 'Альбомы'
    if (item.category === 'notebooks') return 'Тетради'
    if (item.category === 'pens') return 'Ручки'
    return item.category
  })
  return Array.from(new Set(searcCaregory))
}