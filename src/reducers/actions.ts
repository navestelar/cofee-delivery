import { CoffeesType, NewCoffee } from '../interfaces/coffee-interface'

export enum ActionTypes {
  ADD_COFFE = 'ADD_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
}

export function addCoffeeAction(newCoffee: NewCoffee) {
  return {
    type: ActionTypes.ADD_COFFE,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeAction(coffeeType: CoffeesType) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    payload: {
      coffeeType,
    },
  }
}
