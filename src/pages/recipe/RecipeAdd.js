import MediumContainer from '../../components/layout/MediumContainer'
import FormAddRecipe from '../../components/recipe/FormAddRecipe'
import withNoAuth from '../../hoc/withNoAuth'

const RecipeAdd = () => (
  <MediumContainer className="h-section">
    <FormAddRecipe />
  </MediumContainer>
)

const RecipeAddWithNoAuth = withNoAuth(RecipeAdd)
export default RecipeAddWithNoAuth