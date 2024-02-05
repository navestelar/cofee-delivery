import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { Coffe, CoffesType, NewCoffe } from '../interfaces/coffe-interface'
import { addCoffeAction, removeCoffeAction } from '../reducers/actions'
import { coffesReducer } from '../reducers/reducer'

interface CreateCoffeData {
  coffeType: CoffesType
  quantity: number
}

interface CoffeContextType {
  coffes: Coffe
  addCoffe: (data: CreateCoffeData) => void
  removeCoffe: (coffeType: CoffesType) => void
}

export const CoffesContext = createContext({} as CoffeContextType)

interface CoffeContextProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [coffesState, dispach] = useReducer(
    coffesReducer,
    {
      coffes: {},
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:coffes-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { coffes } = coffesState

  useEffect(() => {
    const stateJSON = JSON.stringify(coffesState)

    localStorage.setItem('@ignite-timer:coffes-state-1.0.0', stateJSON)
  }, [coffesState])

  function addCoffe(data: CreateCoffeData) {
    const newCoffe: NewCoffe = {
      type: data.coffeType,
      quantity: data.quantity,
    }

    dispach(addCoffeAction(newCoffe))
  }

  function removeCoffe(coffeType: CoffesType) {
    dispach(removeCoffeAction(coffeType))
  }

  return (
    <CoffesContext.Provider
      value={{
        coffes,
        addCoffe,
        removeCoffe,
      }}
    >
      {children}
    </CoffesContext.Provider>
  )
}
