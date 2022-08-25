import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { recipeSelectors } from '../../features/slices/recipe'
import { getRecipes } from '../../features/thunks/recipe'
import { Row, Col } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import PopularRecipeItem from './PopularRecipeItem'

export default function PopularRecipeItems() {
  const dispatch = useDispatch()
  const recipes = useSelector(recipeSelectors.selectAll)

  useEffect(()=> {
    dispatch(getRecipes())
  }, [dispatch])

  recipes.length = 6

  return (
    <>
      <SectionTitle title="Popular Recipes" />
      <Row>
        {recipes.map(recipe => (
          <Col key={recipe.recipe_id} lg={4} className="mb-3">
            <PopularRecipeItem recipe={recipe} />
          </Col>
        ))}
      </Row>
    </>
  )
}