const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
  isLoading: true,
  users: [],
  error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => data.map((user) => user.id))
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

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers
