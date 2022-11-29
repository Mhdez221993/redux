const redux = require('redux');
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1
  }
}

const initaialState = {
  numOfCakes: 10
}

const reducer = (state = initaialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }

    default:
      return state
  }
}

const store = createStore(reducer)
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Update stae', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
