import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getRecipes = createAsyncThunk('recipes/getRecipes', async () => {
  const response = await axios.get('/recipes')
  return response.data.data
})

export const getLatestRecipe = createAsyncThunk('recipes/getLatestRecipe', async () => {
  const response = await axios.get('/recipes/latest')
  return [response.data.data[0]]
})

export const createRecipe = createAsyncThunk('recipes/createRecipe', async (recipe) => {
  await axios.post('/recipes', recipe)
})