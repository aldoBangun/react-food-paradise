import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../features/thunks/currentUser'
import { Form, Button, Card } from 'react-bootstrap'
import { CardImage } from 'react-bootstrap-icons'
import * as Spinner from 'react-loader-spinner'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import generateFileURL from '../../utils/generateFileURL'
import '../../style/Form.css'

const FormEditProfile = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser.user)
  const loading = useSelector(state => state.loading.isLoading)
  const [imageError, setImageError] = useState('')
  const [imageFile, setImageFile] = useState('')
  const [imageURL, setImageURL] = useState('')

  const EditProfileSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name cannot be empty'),
    email: Yup.string()
      .email('Please input a valid email')
      .required('Email is required'),
    phone: Yup.string(),
    avatar: Yup.string()    
  })

  const formik = useFormik({
    initialValues: {
      name: currentUser.name,
      email: currentUser.email,
      phone: currentUser.phone,
      avatar: ''
    },
    validationSchema: EditProfileSchema,
    onSubmit: (values) => {
      const data = {
        user_id: currentUser.user_id,
        name: values.name,
        email: values.email,
        phone: values.phone
      }

      if (values.avatar) data.avatar = imageFile
      if (!values.avatar) delete data.avatar

      console.log(data)

      dispatch(updateUser(data))
    }
  })

  const handleImageUpload = (e) => {
    const ONE_MEGA_BYTE = 1024 * 1024
    const file = e.target.files[0]
    const fieldValue = e.target.value || ''
    const allowedFileType = ['image/jpeg', 'image/jpg', 'image/png']
    
    formik.setFieldValue('avatar', fieldValue)
    setImageError('')

    if (!file) {
      setImageURL('')
      setImageFile('')
      return
    }

    const isValidType = allowedFileType.indexOf(file?.type) !== -1
    const isValidSize = file?.size <= ONE_MEGA_BYTE

    if (!isValidType || !isValidSize) {
      setImageURL('')
      setImageFile('')

      if (!isValidType) return setImageError('Only accept *.jpeg, *.jpg, and *.png image format')
      if (!isValidSize) return setImageError('File too large. Image file cannot be more than 1 Mb')
    }

    generateFileURL(file, setImageURL)
    setImageFile(file)
  }

  const formikError = (fieldName) => {
    return formik.errors[fieldName] && formik.touched[fieldName]
  }

  const nameError = formikError('name')
  const emailError = formikError('email')
  const phoneError = formikError('phone')

  return (
    <>
      <Form className="profile-form" onSubmit={formik.handleSubmit} encType="multipart/form-data">

        <Form.Group className="mb-4" controlId="avatar">
          <Form.Label className="d-flex justify-content-center align-items-center cursor-pointer">
            <Card className="d-flex align-items-center justify-content-center bg-lightgray" style={{ height: 240, width: 320 }}>
              {(imageURL || currentUser.avatar) ? (
                <Card.Img className="object-cover" src={imageURL || currentUser.avatar} height={240} alt="recipe" />
              ) : (
                <div className="text-center">
                  <CardImage size={48} color="lightgray" />
                  <span className="d-block text-secondary mt-2">{imageError ? imageError : 'Add Photo'}</span>
                </div>
              )}
            </Card>
          </Form.Label>
          <Form.Control className="d-none" type="file" name="avatar" onChange={handleImageUpload} value={formik.values.avatar} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control className={nameError ? 'form-error' : ''} type="text" placeholder="John Doe" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {nameError && <small className="text-danger">{formik.errors.name}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control className={emailError ? 'form-error' : ''} type="email" placeholder="Email Address" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {emailError && <small className="text-danger">{formik.errors.email}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control className={phoneError ? 'form-error' : ''} type="text" placeholder="08xxxxxxxxxx" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
          {phoneError && <small className="text-danger">{formik.errors.phone}</small>}
        </Form.Group>

        <Button className="text-white d-flex align-items-center gap-2" variant="warning" type="submit" disabled={loading}>
          <Spinner.Oval
            height={20}
            width={20}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
            ariaLabel='oval-loading'
            secondaryColor="#eee"
            strokeWidth={3}
            strokeWidthSecondary={3}
          />
          <span>{loading ? 'Updating' : 'Update Changes'}</span>
        </Button>
      </Form>
    </>
  )
}

export default FormEditProfile