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

        if (newCoffe.quantity > 0) {
          draft.coffes = {
            ...draft.coffes,
            [newCoffe.type]: newCoffe.quantity,
          }
        } else {
          const coffeType: CoffesType = newCoffe.type
          delete draft.coffes[coffeType]
        }
      })

    case ActionTypes.REMOVE_COFFE:
      return produce(state, (draft) => {
        const coffeType: CoffesType = action.payload
        delete draft.coffes[coffeType]
      })

    default:
      return state
  }
}
