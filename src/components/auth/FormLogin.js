import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button } from 'react-bootstrap'
import '../../style/Form.css'

const FormLogin = () => {
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
      console.log(values)
    }
  })

  const formikError = (fieldName) => {
    return formik.errors[fieldName] && formik.touched[fieldName]
  }

  const emailError = formikError('email')
  const passwordError = formikError('password')

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
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
          <Button className="text-white" type="submit" variant="warning">Log In</Button>
        </div>
      </Form>
    </>
  )
}

export default FormLogin
