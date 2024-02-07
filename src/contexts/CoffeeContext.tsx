import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { Coffee, CoffeesType, NewCoffee } from '../interfaces/coffee-interface'
import { addCoffeeAction, removeCoffeeAction } from '../reducers/actions'
import { coffeesReducer } from '../reducers/reducer'

interface CoffeeContextType {
  coffees: Coffee
  addCoffee: (coffeeType: CoffeesType, coffeeQuantity: number) => void
  removeCoffee: (coffeeType: CoffeesType) => void
}

export const CoffeesContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispach] = useReducer(
    coffeesReducer,
    {
      coffees: {},
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:coffees-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { coffees } = coffeesState

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@ignite-timer:coffees-state-1.0.0', stateJSON)
  }, [coffeesState])

  function addCoffee(coffeeType: CoffeesType, coffeeQuantity: number) {
    const newCoffee: NewCoffee = {
      type: coffeeType,
      quantity: coffeeQuantity,
    }

    dispach(addCoffeeAction(newCoffee))
  }

  function removeCoffee(coffeeType: CoffeesType) {
    dispach(removeCoffeeAction(coffeeType))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        addCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
