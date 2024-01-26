import { ReactNode } from 'react'

type tagsOption =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

type coffesType =
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
  [coffeType in coffesType]: coffeProperties
}
