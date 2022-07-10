import { Container } from 'react-bootstrap'

export default function FooterDetail() {
  return (
    <Container>
      <div className="flex-center h-footer-lg">
        <div className="mt-5">
          <h1 className="text-center">Eat, Cook, Repeat</h1>
          <p className="text-secondary text-center">Share your best recipe by uploading here !</p>
        </div>
      </div>
    </Container>
  )
}