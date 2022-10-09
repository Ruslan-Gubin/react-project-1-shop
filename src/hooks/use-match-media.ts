

import { useLayoutEffect, useState } from "react";

const queries = [
  '(max-width: 750px)',
  '(min-width: 750px) and (max-width: 1070px)',
  '(min-width: 1070px)',
]

export const useMatchMedia = () => {
  if (typeof window === 'undefined') return {}

  const mediaQueryLists = queries.map(query => matchMedia(query))

  const getValues = () => mediaQueryLists.map(mq1 => mq1.matches)

  const [values, setValues] = useState(getValues)

  useLayoutEffect(() => {
    const handler = () => setValues(getValues)

    mediaQueryLists.forEach(mq1 => mq1.addEventListener('change', handler))

    return () => mediaQueryLists.forEach(mq1 => mq1.removeEventListener('change', handler))
  })

  return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
    ...acc,
    [screen]: values[index]
  }),{})
}

