import React from 'react'
import { ApiClientContext } from '../../contexts'

interface ApiClientProvider {
  children: React.ReactNode
}

export default function ApiClientProvider({ children }: ApiClientProvider) {

  return (
    <ApiClientContext.Provider value={undefined}>
      {children}
    </ApiClientContext.Provider>
  )
}
