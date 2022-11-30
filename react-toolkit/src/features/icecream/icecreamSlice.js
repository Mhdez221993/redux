import { createSlice } from '@reduxjs/toolkit'
import { ordered as orderedCakeAction } from '../cake/cakeSlice'

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
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numOfIcecreams--
  //   }
  // }
  extraReducers: (builder) => {
    builder
      .addCase(orderedCakeAction, (state) => {
        state.numOfIcecreams--
      })
  }
})

export default icecreamSlice.reducer
export const { ordered, restoked } = icecreamSlice.actions
