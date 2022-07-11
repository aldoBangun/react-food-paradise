import { Navbar, Container } from 'react-bootstrap'
import NavLinks from './NavLinks'

export default function Header() {
  const config = {
    links: [
      { link: '/', label: 'Home' },
      { link: 'recipes/add', label: 'Add Recipe' },
      { link: 'profile', label: 'Profile' }
    ]
  }

  return (
    <Navbar>
      <Container>
        <NavLinks config={config} />
      </Container>
    </Navbar>
  )
}