import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

// import axios from 'axios'

const initialState = {
  isLoading: true,
  users: [],
  error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return await axios('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data)
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log(state);
      state.error = action.error.message
      state.users = []
      state.isLoading = false
    })
  }
})

export default userSlice.reducer
