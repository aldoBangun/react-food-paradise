import VideoList from '../../components/recipe/VideoList'
import DetailRecipeFigure from '../../components/recipe/DetailRecipeFigure'
import FormComment from '../../components/recipe/FormComment'
import IngredientList from '../../components/recipe/IngredientList'
import CommentList from '../../components/recipe/CommentList'

const RecipeDetail = () => {
  return (
    <>
      <div className="m-auto" style={{ width: 800 }}>
        <DetailRecipeFigure imageURL="https://picsum.photos/id/19/400" title="Recipe Example" />
        <IngredientList ingredients={['one', 'two']}/>
        <VideoList videos={['link']} />
        <FormComment />
        <CommentList comments={[{ comment_id: 1, message: 'nice recipe', user_id: 1 }]}/>
      </div>
    </>
  )
}

export default RecipeDetail
