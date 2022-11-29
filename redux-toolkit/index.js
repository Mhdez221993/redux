const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restoked(3))

unsubscribe()
