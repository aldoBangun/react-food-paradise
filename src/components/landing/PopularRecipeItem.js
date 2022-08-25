import { Card } from 'react-bootstrap'
import imageURLNormalizer from '../../utils/imageURLNormalizer'
import '../../style/PopularRecipe.css'

export default function PopularRecipeItem(props) {
  const { photo, title } = props.recipe
  const normalizedURL = imageURLNormalizer(photo)
  const cardStyle = {
    backgroundImage: `url(${normalizedURL})`,
    backgroundSize: 'cover',
  }

  return (
    <>
      <Card className="overflow-hidden border-0" style={{ height: '16rem' }}>
        <Card.Body 
          className="recipe-card d-flex align-items-end h-100" 
          style={cardStyle}>
          <h6 className="card-title text-white" style={{width: '50%'}}>{title}</h6>
        </Card.Body>
      </Card>
    </>
  )
}