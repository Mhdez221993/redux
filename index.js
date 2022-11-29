const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators



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

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOKED'
const orderIceCream = () => {
  return {
    type: ICECREAM_ORDERED,
    payload: 1
  }
}

const restokeIceCream = (payload = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload
  }
}


const initaialState = {
  numOfCakes: 10,
  numOfIcecreams: 20
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

    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      }

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload
      }

    default:
      return state
  }
}

const store = createStore(reducer)
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Update stae', store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokeCake(3))

const action = bindActionCreators({ orderCake, restokeCake, orderIceCream, restokeIceCream }, store.dispatch)
action.orderCake()
action.orderCake()
action.orderCake()
action.restokeCake(3)

action.orderIceCream()
action.orderIceCream()
action.orderIceCream()
action.restokeIceCream(3)

unsubscribe()
