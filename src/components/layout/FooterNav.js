import { Nav } from 'react-bootstrap'

export default function FooterNav() {
  return (
    <Nav className="d-flex align-items-center justify-content-center">
      <Nav.Item>
        <Nav.Link href="#">Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Company</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Learn More</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Get in Touch</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}