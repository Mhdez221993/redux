const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
  isLoading: false,
  users: [],
  error: ''
}

const FETCH_USER_REQUETED = 'FETCH_USER_REQUETED'
const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED'
const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUETED
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUETED:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_USER_SUCCEEDED:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      }

    case FETCH_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }

    default:
      return state
  }
}

const fethUser = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const users = data.map(user => user.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(err => {
        dispatch(fetchUsersError(err.message))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => console.log(store.getState()))

store.dispatch(fethUser())

// unsubscribe()
