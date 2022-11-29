const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userSlice = require('../features/user/userSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: icecreamReducer,
    user: userSlice
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store
