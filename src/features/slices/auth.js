import { createSlice } from '@reduxjs/toolkit'
import { login, register } from '../thunks/user'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    error: null,
    registered: false
  },
  reducers: {
    setRegistered: (state, { payload }) => {
      state.registered = payload
    },
    clearError: (state) => {
      state.error = null
    },
    logout: (state) => {
      state.token = null
      state.error = null
      state.registered = false
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload
      state.error = null
    },
    [login.rejected]: (state, { payload }) => {
      state.token = null
      state.error = payload
    },
    [register.fulfilled]: (state) => {
      state.registered = true
      state.error = null
    },
    [register.rejected]: (state, { payload }) => {
      state.registered = false
      state.error = payload
    }
  }
})

export const { setRegistered, clearError, logout } = authSlice.actions
export default authSlice.reducer