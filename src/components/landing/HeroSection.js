import Headline from './Headline'
import { Row, Col } from 'react-bootstrap'

export default function HeroSection() {
  return (
    <section className='hero-section'>
      <Row className="justify-content-between align-items-center">
        <Col lg={6}>
          <Headline />
        </Col>

        <Col lg={6} className="d-flex align-items-center justify-content-end">
          <img src="./img/hero-image.png" alt="Hero" className='hero-image' />
        </Col>
      </Row>
    </section>
  )
}