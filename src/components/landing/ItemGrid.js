import { Row, Col } from 'react-bootstrap'
import ItemImage from './ItemImage'
import ItemInfo from './ItemInfo'

export default function ItemGrid(props) {
  const { photo, title, recipe_id } = props.recipe
  const { imageModel } = props.config
  const desc = 'Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!'

  return (
    <Row>
      <Col lg={7}>
        <ItemImage source={photo} title={title} model={imageModel} />
      </Col>

      <Col lg={5} className="d-flex align-items-center">
        <ItemInfo title={title} description={desc} id={recipe_id} />
      </Col>
    </Row>
  )
}