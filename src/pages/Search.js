import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { recipeSelectors } from '../features/slices/recipe'
import { searchRecipe } from '../features/thunks/recipe'
import { Container } from 'react-bootstrap'
import SearchBar from '../components/landing/SearchBar'
import RecipeList from '../components/search/RecipeList'

const Search = () => {
  const dispatch = useDispatch()
  const recipes = useSelector(recipeSelectors.selectAll)
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  const sort = searchParams.get('sort') || ''
  const order = searchParams.get('order') || ''
  
  useEffect(()=> {
    const searchConfig = { keyword, sort, order }
    dispatch(searchRecipe(searchConfig))
  }, [dispatch, keyword, sort, order])

  return (
    <Container className="h-section">
      <h6 className="text-muted mb-3">Search Recipe</h6>
      
      <div className="mb-4">
        <SearchBar filter={true} />
      </div>

      {recipes ? (<RecipeList recipes={recipes} />) : (<p className="text-muted">Loading...</p>)}
    </Container>
  )
}

export default Search