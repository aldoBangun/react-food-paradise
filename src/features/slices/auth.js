import { createSlice } from '@reduxjs/toolkit'
import { login, register } from '../thunks/user'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    error: null
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    logout: (state) => {
      state.token = null
      state.error = null
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
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload
      state.error = null
    },
    [register.rejected]: (state, { payload }) => {
      state.token = null
      state.error = payload
    }
  }
})

export const { clearError, logout } = authSlice.actions
export default authSlice.reducer