import { ReactNode } from 'react'

type tagsOption =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export type CoffesType =
  | 'ExpressoTradicional'
  | 'ExpressoAmericano'
  | 'ExpressoCremoso'
  | 'ExpressoGelado'
  | 'CafeComLeite'
  | 'Latte'
  | 'Capuccino'
  | 'Macchiato'
  | 'Mocaccino'
  | 'ChocolateQuente'
  | 'Cubano'
  | 'Havaiano'
  | 'Arabe'
  | 'Irlandes'

export interface coffeProperties {
  title: string
  subtitle?: string
  img: ReactNode
  tags?: tagsOption[]
  price: string
  quantity: number
  setQuantity: (value: number) => void
  onClick: () => void
}

export type coffeDataInterface = {
  [coffe in CoffesType]: coffeProperties
}

export type Coffe = {
  [coffe in CoffesType]?: number
}

export type NewCoffe = {
  type: CoffesType
  quantity: number
}
