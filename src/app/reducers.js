import { combineReducers } from '@reduxjs/toolkit'
import users from '../features/slices/user'
import recipes from '../features/slices/recipe'
import latestRecipe from '../features/slices/latestRecipe'
import loading from '../features/slices/loading'
import auth from '../features/slices/auth'

export default combineReducers({
  users,
  recipes,
  latestRecipe,
  loading,
  auth
})
