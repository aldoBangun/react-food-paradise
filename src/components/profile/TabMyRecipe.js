import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserRecipes } from '../../features/thunks/user'
import { userRecipeSelector } from '../../features/slices/userRecipe'
import TabRecipeList from './TabRecipeList'

const TabMyRecipe = () => {
  const dispatch = useDispatch()
  const userRecipe = useSelector(userRecipeSelector.selectAll)
  const currentUser = useSelector(state => state.currentUser.user)

  useEffect(() => {
    dispatch(getUserRecipes(currentUser.user_id))
  }, [dispatch])

  return <TabRecipeList recipes={userRecipe} />
}

export default TabMyRecipe
