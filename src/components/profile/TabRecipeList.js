import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const TabRecipeList = ({recipes}) => (
  <>
    {recipes.length ? (
      <ul className="d-flex gap-2">
        {recipes.map(recipe => (
          <li key={recipe.recipe_id} style={{ width: 200 }}>
            <Link to={`/recipes/${recipe.recipe_id}`}>
              <Card className="bg-dark text-white">
                <Card.Img className="object-cover" src={recipe.photo} alt={recipe.title} height={164} />
                <Card.ImgOverlay className="d-flex align-items-end">
                  <Card.Title className="w-75">{recipe.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <div className="p-3" style={{ height: 164 }}>
        <p>No Recipies</p>
      </div>
    )}
  </>
)

export default TabRecipeList
