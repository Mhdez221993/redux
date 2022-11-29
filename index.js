const redux = require('redux');
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOKED'

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1
  }
}

const restokeCake = (payload) => {
  return {
    type: CAKE_RESTOCKED,
    payload
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

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
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
store.dispatch(restokeCake(3))

unsubscribe()
