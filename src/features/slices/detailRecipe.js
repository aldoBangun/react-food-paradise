import { createSlice } from '@reduxjs/toolkit'
import { getRecipeById } from '../thunks/recipe'

const detailRecipeSlice = createSlice({
  name: 'detailRecipe',
  initialState: {
    recipe: null,
    error: null
  },
  extraReducers: {
    [getRecipeById.fulfilled]: (state, { payload }) => {
      state.recipe = payload
      state.error = null
    },
    [getRecipeById.rejected]: (state, { payload }) => {
      state.recipe = null
      state.error = payload
    }
  }
})

export default detailRecipeSlice.reducer