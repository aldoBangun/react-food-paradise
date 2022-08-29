import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getUserRecipes } from '../thunks/user'

const userRecipeAdapter = createEntityAdapter({
  selectId: (state) => state.recipe_id
})

const userRecipe = createSlice({
  name: 'userRecipe',
  initialState: userRecipeAdapter.getInitialState(),
  extraReducers: {
    [getUserRecipes.fulfilled]: (state, { payload }) => {
      userRecipeAdapter.setAll(state, payload)
    }
  }
})


export const userRecipeSelector = userRecipeAdapter.getSelectors(state => state.userRecipe)
export default userRecipe.reducer