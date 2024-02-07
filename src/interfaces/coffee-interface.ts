import { ReactNode } from 'react'

type tagsOption =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export type CoffeesType =
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

export interface commomCoffeeProperties {
  title: string
  subtitle?: string
  img: ReactNode
  price: string
  tags?: tagsOption[]
}

export interface coffeeProperties extends commomCoffeeProperties {
  quantity?: number
  type: CoffeesType
  setQuantity?: (quantity: number) => void
  removeCoffee?: (coffeeType: CoffeesType) => void
  addCoffee: (coffeeType: CoffeesType, coffeeQuantity: number) => void
}

export type coffeeDataInterface = {
  [coffee in CoffeesType]: commomCoffeeProperties
}

export type Coffee = {
  [coffee in CoffeesType]?: number
}

export type NewCoffee = {
  type: CoffeesType
  quantity: number
}
