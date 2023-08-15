import React from 'react'

export default function useRefs<T>(
  capacity: number,
  initValue: T | null = null
) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return Array.from({ length: capacity }).map(() => React.useRef<T>(initValue))
}
