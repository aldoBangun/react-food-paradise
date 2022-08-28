import VideoList from '../../components/recipe/VideoList'
import DetailRecipeFigure from '../../components/recipe/DetailRecipeFigure'
import FormComment from '../../components/recipe/FormComment'
import IngredientList from '../../components/recipe/IngredientList'
import CommentList from '../../components/recipe/CommentList'
import MediumContainer from '../../components/layout/MediumContainer'

const RecipeDetail = () => {
  return (
    <>
      <MediumContainer>
        <DetailRecipeFigure imageURL="https://picsum.photos/id/19/400" title="Recipe Example" />
        <IngredientList ingredients={['one', 'two']}/>
        <VideoList videos={['link']} />
        <FormComment />
        <CommentList comments={[{ comment_id: 1, message: 'nice recipe', user_id: 1 }]}/>
      </MediumContainer>
    </>
  )
}

export default RecipeDetail
