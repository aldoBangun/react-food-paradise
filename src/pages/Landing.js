import { Container } from 'react-bootstrap'
import SectionHero from '../components/landing/SectionHero'
import SectionNewRecipe from '../components/landing/SectionNewRecipe'
import SectionPopularRecipe from '../components/landing/SectionPopularRecipe'

export default function Landing() {
  return (
    <>
      <Container>
        <SectionHero />
        <SectionNewRecipe />
        <SectionPopularRecipe/>
      </Container>
    </>
  )
}