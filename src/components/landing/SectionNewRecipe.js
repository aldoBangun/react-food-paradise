import { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { getLatestRecipe } from '../../features/thunks/recipe'
import { latestRecipeSelectors } from '../../features/slices/latestRecipe'
import ItemGrid from './ItemGrid'
import SectionTitle from './SectionTitle'
import Section from './Section'

export default function newRecipeSection() {
  const dispatch = useDispatch()
  const recipe = useSelector(latestRecipeSelectors.selectAll)
  
  useEffect(()=> {
    dispatch(getLatestRecipe())
  }, [dispatch])
  
  const config = {
    imageModel: 'section-image-filled'
  }

  return (
    <Section>
      <SectionTitle title="New Recipe"/>
      {recipe.length && <ItemGrid recipe={recipe[0]} config={config} />}
    </Section>
  )
}