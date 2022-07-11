import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavLink(props) {
  const { link, label } = props.link

  return (
    <Nav.Item>
      <Link to={link} className="text-decoration-none"> {label} </Link>
    </Nav.Item>
  )
}