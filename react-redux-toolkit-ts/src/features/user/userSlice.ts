import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

type User = {
  id: number
  name: string
}

type initialState = {
  isLoading: boolean,
  users: User[],
  error: string
}

const initialState: initialState = {
  isLoading: true,
  users: [],
  error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return await axios('https://jsonplaceholder.typicode.com/users')
    .then((response => response.data))
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log(state);
      state.error = action.error.message || 'Something went wrong'
      state.users = []
      state.isLoading = false
    })
  }
})

export default userSlice.reducer
