import { Outlet } from 'react-router-dom'
import Barbeque from '../icons/Barbeque'
import '../../style/AuthLayout.css'

const AuthLayout = () => (
  <div className="auth-layout d-flex h-100">
    <section className="left-side d-flex align-items-center justify-content-center w-50" style={{ '--bg-image': 'url("img/auth-bg.png")' }}>
      <div>
        <Barbeque />
        <h6 className="text-white mt-3">Food Paradise.</h6>
      </div>
    </section>
    <section className="right-side d-flex align-items-center justify-content-center flex-1">
      <Outlet/>
    </section>
  </div>
)

export default AuthLayout