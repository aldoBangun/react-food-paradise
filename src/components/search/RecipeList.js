import RecipeItem from './RecipeItem'

const RecipeList = ({ recipes }) => {
  
  if (!recipes.length) return <p>Recipes Not Found</p>

  return (
    <ul className="d-flex flex-column gap-2">
      {recipes.map(recipe => (
        <RecipeItem key={recipe.recipe_id} {...recipe} />      
      ))}
    </ul>
  )
}

export default RecipeList