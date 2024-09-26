import { PredictionConfig } from '@iguanadex/prediction'
import { createContext, useContext } from 'react'

export const ConfigContext = createContext<PredictionConfig | undefined>(undefined)

export function useConfig() {
  return useContext(ConfigContext)
}

export default function ConfigProvider({ children, config }) {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}
