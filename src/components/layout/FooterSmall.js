import { Container, Row, Col } from 'react-bootstrap'
import FooterNav from './FooterNav'

export default function FooterSmall() {
  return (
    <div className="flex-center h-footer-sm">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} className="text-center">
            <FooterNav />
          </Col>
          <Col lg="3" className="text-center">
            <p className='font-weight-bold'> &copy; Arkademy </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}