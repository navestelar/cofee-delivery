import { CoffesType, NewCoffe } from '../interfaces/coffe-interface'

export enum ActionTypes {
  ADD_COFFE = 'ADD_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
}

export function addCoffeAction(newCoffe: NewCoffe) {
  return {
    type: ActionTypes.ADD_COFFE,
    payload: {
      newCoffe,
    },
  }
}

export function removeCoffeAction(coffeType: CoffesType) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    payload: {
      coffeType,
    },
  }
}
