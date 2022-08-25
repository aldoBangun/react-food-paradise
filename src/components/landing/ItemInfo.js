import { Button } from 'react-bootstrap'

export default function ItemInfo(props) {
  const { title, description } = props

  return (
    <div>
      <h1 className="section-info-title position-relative pb-3 mb-4 fs-1"> {title} </h1>
      <p className="pb-3"> {description} </p>
      <Button variant="warning" size="md" className="text-white"> Learn More </Button>
    </div>
  )
}