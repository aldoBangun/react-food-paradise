import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipes } from '../features/thunks/recipe'
import { Container } from 'react-bootstrap'
import HeroSection from '../components/landing/HeroSection'

export default function Landing() {
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(getRecipes())
  }, [dispatch])

  return (
    <>
      <Container>
        <HeroSection />
      </Container>
    </>
  )
}