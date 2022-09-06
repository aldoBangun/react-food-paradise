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
  
  useEffect(()=> {
    dispatch(searchRecipe(keyword))
  }, [dispatch, keyword])

  return (
    <Container className="h-section">
      <h6 className="text-muted mb-3">Search Recipe</h6>
      
      <div className="w-50 mb-4">
        <SearchBar />
      </div>

      {recipes ? (<RecipeList recipes={recipes} />) : (<p className="text-muted">Loading...</p>)}
    </Container>
  )
}

export default Search