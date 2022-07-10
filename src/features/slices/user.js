import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { register, getUsers, updateUser, deleteUser } from '../thunks/user'

const userAdapter = createEntityAdapter({
  selectId: (user) => user.user_id
})

const userSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState(),
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      userAdapter.addOne(state, action.payload)
    },
    [getUsers.fulfilled]: (state, action) => {
      userAdapter.setAll(state, action.payload)
    },
    [updateUser.fulfilled]: (state, action) => {
      userAdapter.setAll(state, action.payload)
    },
    [deleteUser.fulfilled]: (state, action) => {
      userAdapter.removeOne(state, action.payload)
    }
  }
})

export const userSelectors = userAdapter.getSelectors((state) => state.users)
export default userSlice.reducer