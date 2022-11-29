const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfIcecreams: 30
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {state.numOfIcecreams--},
    restoked: (state, action) => {state.numOfIcecreams += action.payload}
  }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
