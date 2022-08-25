import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getLatestRecipe } from '../thunks/recipe'

const latestRecipeAdapter = createEntityAdapter({
  selectId: (state) => state.recipe_id
})

const latestRecipeSlice = createSlice({
  name: 'latestRecipe',
  initialState: latestRecipeAdapter.getInitialState(),
  extraReducers: {
    [getLatestRecipe.fulfilled]: (state, action) => {
      latestRecipeAdapter.setAll(state, action.payload)
    }
  }
})

export const latestRecipeSelectors = latestRecipeAdapter.getSelectors(state => state.latestRecipe)
export default latestRecipeSlice.reducer