import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk('currentUser/getUser', async (id) => {
  const response = await axios.get(`/users/${id}`)
  return response?.data?.data
})

export const updateUser = createAsyncThunk('currentUser/updateUser', async (user, { rejectWithValue }) => {
  try {
    await axios.patch(`/users/${user.user_id}`, user, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  
    const response = await axios.get(`/users/${user.user_id}`)
    console.log(response.data.data)
    return response?.data?.data
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})