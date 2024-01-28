import { ReactNode } from 'react'

export interface ToggleItemProperties {
  icon: ReactNode
  label: string
}

export interface ToggleGroupProperties {
  options: ToggleItemProperties[]
  value: string
  onChange: () => void
}
