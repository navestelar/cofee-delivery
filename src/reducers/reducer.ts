import { produce } from 'immer'

import { Coffe, CoffesType } from '../interfaces/coffe-interface'
import { ActionTypes } from './actions'

interface CoffesState {
  coffes: Coffe
}

export function coffesReducer(state: CoffesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE:
      return produce(state, (draft) => {
        const { newCoffe } = action.payload
        draft.coffes = {
          ...draft.coffes,
          [newCoffe.type]: newCoffe.quantity,
        }
      })

    case ActionTypes.REMOVE_COFFE:
      return produce(state, (draft) => {
        const coffeeType: CoffesType = action.payload
        delete draft.coffes[coffeeType]
      })

    default:
      return state
  }
}
