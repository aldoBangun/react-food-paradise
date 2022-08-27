import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk('currentUser/getUser', async (id) => {
  const response = await axios.get(`/users/${id}`)
  return response?.data?.data
})