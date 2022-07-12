import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getLatestRecipe } from '../features/thunks/recipe'
import { Container } from 'react-bootstrap'
import HeroSection from '../components/landing/HeroSection'
import NewRecipeSection from '../components/landing/NewRecipeSection'

export default function Landing() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getLatestRecipe())
  }, [dispatch])

  return (
    <>
      <Container>
        <HeroSection />
        <NewRecipeSection />
      </Container>
    </>
  )
}