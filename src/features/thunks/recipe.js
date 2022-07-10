import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getRecipes = createAsyncThunk('recipes/getRecipes', async () => {
  const response = await axios.get('/recipes')
  return response.data.data
})