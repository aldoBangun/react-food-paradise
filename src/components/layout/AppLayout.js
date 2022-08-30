import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default AppLayout
