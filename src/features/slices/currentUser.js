import { createSlice } from '@reduxjs/toolkit'
import { getUser, updateUser } from '../thunks/currentUser'

const currentUserSlice = createSlice({
  name: 'slice',
  initialState: {
    user: null,
    error: null
  },
  reducers: {
    resetCurrentUser: (state) => {
      state.user = null
      state.error = null
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.error = null
    },
    [getUser.rejected]: (state) => {
      state.user = null
      state.error = null
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.error = null
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.user = null
      state.error = payload
    }
  }
})

export const { resetCurrentUser } = currentUserSlice.actions
export default currentUserSlice.reducer