import { Form, FloatingLabel, Button, Card } from 'react-bootstrap'
import { CardImage } from 'react-bootstrap-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { createRecipe } from '../../features/thunks/recipe'
import { useDispatch, useSelector } from 'react-redux'
import generateFileURL from '../../utils/generateFileURL'

const FormAddRecipe = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser.user)
  const [imageFile, setImageFile] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [imageError, setImageError] = useState('')

  const RecipeSchema = Yup.object().shape({
    recipeImage: Yup.string().required(''),
    title: Yup.string()
      .min(4, 'Title too short (min. 4 characters)')
      .max(50, 'Title too long (max. 50 characters)'),
    ingredients: Yup.string(),
    videos: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      recipeImage: '',
      title: '',
      ingredients: '',
      videos: ''
    },
    validationSchema: RecipeSchema,
    onSubmit: (values) => {
      const ingredients = values.ingredients.split(', ')

      const data = {
        user_id: currentUser.user_id,
        title: values.title,
        ingredients,
        photo: imageFile,
        videos: values.videos
      }
      
      dispatch(createRecipe(data))
    }
  })

  const handleImageUpload = (e) => {
    const ONE_MEGA_BYTE = 1024 * 1024
    const file = e.target.files[0]
    const fieldValue = e.target.value || ''
    const allowedFileType = ['image/jpeg', 'image/jpg', 'image/png']
    
    formik.setFieldValue('recipeImage', fieldValue)
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

  return (
    <Form className="mb-5" onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <Form.Group className="mb-4" controlId="recipeImage">
        <Form.Label className="d-block cursor-pointer">
          <Card className="d-flex align-items-center justify-content-center w-100 bg-lightgray" style={{ height: 360 }}>
            {imageURL ? (
              <Card.Img className="object-cover" src={imageURL} height={360} alt="recipe" />
            ) : (
              <div className="text-center">
                <CardImage size={48} color="lightgray" />
                <span className="d-block text-secondary mt-2">{imageError ? imageError : 'Add Photo'}</span>
              </div>
            )}
          </Card>
        </Form.Label>
        <Form.Control className="d-none" type="file" name="recipeImage" onChange={handleImageUpload} value={formik.values.recipeImage} />
      </Form.Group>

      <FloatingLabel
        controlId="title"
        label="Title"
        className="mb-4"
      >
        <Form.Control className="resize-none bg-lightgray" as="textarea" placeholder="title" name="title" onChange={formik.handleChange} value={formik.values.title} />
      </FloatingLabel>

      <FloatingLabel
        controlId="ingredients"
        label="Ingredients"
        className="mb-4"
      >
        <Form.Control className="resize-none bg-lightgray" as="textarea" placeholder="ingredients" name="ingredients" onChange={formik.handleChange} value={formik.values.ingredients} style={{ height: 100 }} />
      </FloatingLabel>

      <FloatingLabel
        controlId="videos"
        label="videos"
        className="mb-4 d-none"
      >
        <Form.Control className="resize-none bg-lightgray" as="textarea" placeholder="videos" name="videos" onChange={formik.handleChange} value={formik.values.videos} />
      </FloatingLabel>

      <div className="d-grid m-auto" style={{ width: 200 }}>
        <Button className="text-white" variant="warning" type="submit">Post</Button>
      </div>
    </Form>
  )
}

export default FormAddRecipe
