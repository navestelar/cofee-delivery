import { produce } from 'immer'

import { Coffee, CoffeesType } from '../interfaces/coffee-interface'
import { ActionTypes } from './actions'

interface CoffeesState {
  coffees: Coffee
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE:
      return produce(state, (draft) => {
        const { newCoffee } = action.payload

        if (newCoffee.quantity > 0) {
          draft.coffees = {
            ...draft.coffees,
            [newCoffee.type]: newCoffee.quantity,
          }
        } else {
          const coffeeType: CoffeesType = newCoffee.type
          delete draft.coffees[coffeeType]
        }
      })

    case ActionTypes.REMOVE_COFFE:
      return produce(state, (draft) => {
        const coffeeType: CoffeesType = action.payload.coffeeType
        delete draft.coffees[coffeeType]
      })

    default:
      return state
  }
}
