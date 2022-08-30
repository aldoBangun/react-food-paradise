import { combineReducers } from '@reduxjs/toolkit'
import users from '../features/slices/user'
import recipes from '../features/slices/recipe'
import latestRecipe from '../features/slices/latestRecipe'
import loading from '../features/slices/loading'
import auth from '../features/slices/auth'
import currentUser from '../features/slices/currentUser'
import userRecipe from '../features/slices/userRecipe'
import detailRecipe from '../features/slices/detailRecipe'

export default combineReducers({
  users,
  recipes,
  latestRecipe,
  loading,
  auth,
  currentUser,
  userRecipe,
  detailRecipe
})
