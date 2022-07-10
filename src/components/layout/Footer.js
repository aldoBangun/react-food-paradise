import { Container } from 'react-bootstrap'
import FooterDetail from './FooterDetail'
import FooterSmall from './FooterSmall'

export default function Footer() {
  return (
    <>
      <footer className='bg-warning'>
        <Container>
          <FooterDetail />
        </Container>
        <FooterSmall />
      </footer>
    </>
  )
}