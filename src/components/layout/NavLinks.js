import { Nav } from 'react-bootstrap'
import NavLink from './NavLink'

export default function NavLinks(props) {
  const { links } = props.config
  
  return (
    <Nav className='d-flex align-items-center gap-5 h-navbar'>
      {links.map((link, index) => (
        <NavLink key={index} link={link} />
      ))}
    </Nav>
  )
}