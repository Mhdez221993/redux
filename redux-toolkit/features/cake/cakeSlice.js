const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducer: {
    ordered: (action) => {
      state.numOfCakes -= 1
    },
    restoked: (action, payload) => {
      state.numOfCakes += action.payload
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
