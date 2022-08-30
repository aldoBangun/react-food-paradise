import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const NoAuth = () => (
  <Container className="h-section d-flex align-items-center justify-content-center">
    <div className="text-center">
      <h6>In Order to access this page</h6>
      <h6>You need to <Link to="/login" className="text-warning text-decoration-none">Sign In</Link></h6>
    </div>
  </Container>
)

export default NoAuth
