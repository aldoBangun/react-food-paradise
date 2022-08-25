import AuthTitle from '../../components/auth/AuthTitle'
import AuthLink from '../../components/auth/AuthLink'
import FormLogin from '../../components/auth/FormLogin'

const Login = () => {
  return (
    <>
      <div style={{ minWidth: '400px' }}>
        <div className="text-center">
          <AuthTitle title="Welcome" subtitle="Log in into your existing account" />
        </div>

        <FormLogin />

        <div className="text-center mt-3">
          <AuthLink link="/register" label="Sign Up" text="Don't have an account? " />
        </div>
      </div>
    </>
  )
}

export default Login
