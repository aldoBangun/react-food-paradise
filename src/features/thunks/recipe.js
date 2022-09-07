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
  try {
    await axios.post('/recipes', recipe, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch(err) {
    console.log(err)
  }
})

export const getRecipeById = createAsyncThunk('recipes/getRecipeById', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/recipes/${id}`)
    return response?.data?.data
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})

export const searchRecipe = createAsyncThunk('recipes/SearchRecipe', async (config, { rejectWithValue }) => {
  const { keyword, sort, order } = config
  
  try {
    const response = await axios.get(`/recipes?title=${keyword}&sort=${sort}&order=${order}`)
    return response?.data?.data
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})