const redux = require('redux');
const produce = require('immer').produce

const initialState = {
  name: 'Doe',
  address: {
    street: '1 Main St',
    city: 'Malta',
    state: 'Gudja'
  }
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStree = (payload) => {
  return {
    type: STREET_UPDATED,
    payload
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload
      //   }
      // }

      return produce(state, (draft) => {
        draft.address.street = action.payload
      })

    default:
      return state
  }
}

const store = redux.createStore(reducer)

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Update stae', store.getState()))

store.dispatch(updateStree('456 Main St'))
