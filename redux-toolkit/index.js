const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

console.log(store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restoked(3))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restoked(3))

unsubscribe()
