import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getRecipes } from '../thunks/recipe'

const recipeAdapter = createEntityAdapter({
  selectId: (recipe) => recipe.recipe_id
})

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: recipeAdapter.getInitialState(),
  extraReducers: {
    [getRecipes.fulfilled]: (state, action) => {
      recipeAdapter.setAll(state, action.payload)
    },
    // [createRecipe.fulfilled]: (state, action) => {
    //   recipeAdapter.addOne(state, action.payload)
    // }
  }
})

export const recipeSelectors = recipeAdapter.getSelectors((state) => state.recipes)
export default recipeSlice.reducer