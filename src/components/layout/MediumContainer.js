import { Container } from 'react-bootstrap'

const MediumContainer = ({ children, className }) => (
  <Container>
    <div className={`${className} m-auto`} style={{ maxWidth: 800 }}>
      {children}
    </div>
  </Container>
)

export default MediumContainer
