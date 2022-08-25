import AuthLink from '../../components/auth/AuthLink'
import AuthTitle from '../../components/auth/AuthTitle'
import FormRegister from '../../components/auth/FormRegister'

const Register = () => {
  return (
    <div style={{ minWidth: '400px' }}>
      <div className="text-center">
        <AuthTitle title="Let's Get Started!" subtitle="Create new account to access all features" />
      </div>

      <FormRegister />

      <div className="text-center mt-3">
        <AuthLink link="login" label="Log in Here" text="Already have account? " />
      </div>
    </div>
  )
}

export default Register
