import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getRecipes, searchRecipe } from '../thunks/recipe'

const recipeAdapter = createEntityAdapter({
  selectId: (recipe) => recipe.recipe_id
})

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: recipeAdapter.getInitialState(),
  extraReducers: {
    [getRecipes.fulfilled]: (state, { payload }) => {
      recipeAdapter.setAll(state, payload)
    },
    [searchRecipe.fulfilled]: (state, { payload }) => {
      recipeAdapter.setAll(state, payload)
    }
  }
})

export const recipeSelectors = recipeAdapter.getSelectors((state) => state.recipes)
export default recipeSlice.reducer