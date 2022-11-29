const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restoked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restoked(3))

store.dispatch(fetchUsers())

// unsubscribe()
