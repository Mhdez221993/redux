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
  },
  extraReducers: {
    ['cake/ordered']: (state) => {
      state.numOfIcecreams--
    }
  }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
