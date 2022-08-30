import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ItemInfo(props) {
  const { title, description, id } = props
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/recipes/${id}`)
  }

  return (
    <div>
      <h1 className="section-info-title position-relative pb-3 mb-4 fs-1"> {title} </h1>
      <p className="pb-3"> {description} </p>
      <Button variant="warning" size="md" className="text-white" onClick={handleClick} > Learn More </Button>
    </div>
  )
}