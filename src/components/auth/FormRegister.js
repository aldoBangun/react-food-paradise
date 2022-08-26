import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../features/thunks/user'
import { clearError } from '../../features/slices/auth'
import * as Spinner from 'react-loader-spinner'
import '../../style/Form.css'

const FormRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const loadingState = useSelector(state => state.loading)
  const { token, error: authError } = authState
  const { isLoading } = loadingState
  const handleCloseAlert = () => dispatch(clearError())

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must contain at least 6 characters')
      .max(20, 'Password cannot be more than 20 characters')
      .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Confirm password not match')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(register(values))
    }
  })

  const formikError = (fieldName) => {
    return formik.errors[fieldName] && formik.touched[fieldName]
  }

  const nameError = formikError('name')
  const emailError = formikError('email')
  const phoneError = formikError('phone')
  const passwordError = formikError('password')
  const confirmPasswordError = formikError('confirmPassword')

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  return (
    <>
      {authError && (
        <Alert variant="danger" onClose={handleCloseAlert} dismissible>
          {authError}
        </Alert>
      )}

      <Form className="auth-form" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control className={nameError ? 'form-error' : ''} type="text" placeholder="John Doe" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {nameError && <small>{formik.errors.name}</small>}
        </Form.Group>


        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control className={emailError ? 'form-error' : ''} type="email" placeholder="Email Address" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {emailError && <small>{formik.errors.email}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control className={phoneError ? 'form-error' : ''} type="text" placeholder="08xxxxxxxxxx" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
          {phoneError && <small>{formik.errors.phone}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control className={passwordError ? 'form-error' : ''} type="password" placeholder="Create New Password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          {passwordError && <small>{formik.errors.password}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control className={confirmPasswordError ? 'form-error' : ''} type="password" placeholder="Confirm Password" name="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
          {confirmPasswordError && <small>{formik.errors.confirmPassword}</small>}
        </Form.Group>

        <div className="d-grid">
          <Button className="text-white d-flex align-items-center justify-content-center gap-1" type="submit" variant="warning" disabled={isLoading}>
            <Spinner.Oval 
              height={20}
              width={20}
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={isLoading}
              ariaLabel='oval-loading'
              secondaryColor="#eee"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
            {isLoading ? 'Signing Up' : 'Register Account'}
          </Button>
        </div>
      </Form>
    </>
  )
}

export default FormRegister
