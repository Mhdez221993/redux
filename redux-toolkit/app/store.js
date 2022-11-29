const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: icecreamReducer
  }
})

module.exports = store
