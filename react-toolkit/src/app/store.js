import cakeReducer from '../features/cake/cakeSlice'
import { configureStore } from '@reduxjs/toolkit'
import icecreamReducer from '../features/icecream/icecreamSlice'
import { logger } from 'redux-logger'
import userSlice from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: icecreamReducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
