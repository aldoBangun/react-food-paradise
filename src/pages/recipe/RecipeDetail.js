import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipeById } from '../../features/thunks/recipe'
import { useParams } from 'react-router-dom'
import VideoList from '../../components/recipe/VideoList'
import DetailRecipeFigure from '../../components/recipe/DetailRecipeFigure'
import FormComment from '../../components/recipe/FormComment'
import IngredientList from '../../components/recipe/IngredientList'
import CommentList from '../../components/recipe/CommentList'
import MediumContainer from '../../components/layout/MediumContainer'

const RecipeDetail = () => {
  const dispatch = useDispatch()
  const detailRecipe = useSelector(state => state.detailRecipe.recipe)
  const { recipeId } = useParams()

  useEffect(() => {
    dispatch(getRecipeById(recipeId))
  }, [dispatch])

  return (
    <>
      {detailRecipe && (
        <MediumContainer>
          <DetailRecipeFigure imageURL={detailRecipe.photo} title={detailRecipe.title} />
          <IngredientList ingredients={detailRecipe.ingredients}/>
          <VideoList videos={detailRecipe.videos} />
          <FormComment />
          <CommentList comments={[{ comment_id: 1, message: 'nice recipe', user_id: 1 }]}/>
        </MediumContainer>
      )}
    </>
  )
}

export default RecipeDetail
