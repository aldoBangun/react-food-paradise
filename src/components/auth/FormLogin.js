import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../features/slices/auth'
import { login } from '../../features/thunks/user'
import { useNavigate } from 'react-router-dom'
import * as Spinner from 'react-loader-spinner'
import '../../style/Form.css'

const FormLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const loading = useSelector(state => state.loading)
  const { token, error: authError } = authState

  const handleCloseAlert = () => {
    dispatch(clearError())
  } 

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email required'),
    password: Yup.string()
      .min(6, 'Password must contain at least 6 characters')
      .max(20, 'Password cannot be more than 20 characters')
      .required('Password is required')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(login(values))
    }
  })

  const formikError = (fieldName) => {
    return formik.errors[fieldName] && formik.touched[fieldName]
  }

  const emailError = formikError('email')
  const passwordError = formikError('password')

  return (
    <>
      {
        authError && (
          <Alert variant="danger" onClose={handleCloseAlert} dismissible>
            {authError}
          </Alert>
        )
      }

      <Form className="auth-form" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control className={emailError ? 'form-error' : ''} type="email" placeholder="Enter email address" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {emailError && <span className="text-danger">{formik.errors.email}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control className={passwordError ? 'form-error' : ''} type="password" placeholder="Enter your password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          {passwordError && <span className="text-danger">{formik.errors.password}</span>}
        </Form.Group>

        <div className="d-grid">
          <Button className="text-white d-flex align-items-center justify-content-center gap-2" type="submit" variant="warning" disabled={loading.isLoading}>
            <Spinner.Oval
              height={20}
              width={20}
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={loading.isLoading}
              ariaLabel='oval-loading'
              secondaryColor="#eee"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
            {loading.isLoading ? 'Loggining In' : 'Log In'}
          </Button>
        </div>
      </Form>
    </>
  )
}

export default FormLogin
