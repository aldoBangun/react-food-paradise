import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormComment = () => {
  const CommentSchema = Yup.object().shape({
    comment: Yup.string()
      .max(100, 'Commment to long')
      .required('You cannot post empty comment')
  })

  const formik = useFormik({
    initialValues: {
      comment: ''
    },
    validationSchema: CommentSchema,
    onSubmit: ({ comment }) => {
      const newComment = {
        userId: 1,
        recipeId: 2,
        message: comment
      }
      console.log(newComment)
    }
  })

  return (
    <div className="mb-5">
      <Form className="comment-form" onSubmit={formik.handleSubmit}>
        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Comment :">
          <Form.Control
            className={`${formik.errors.comment ? 'form-error' : ''} resize-none bg-lightgray`}
            as="textarea"
            name="comment"
            rows={5}
            onChange={formik.handleChange}
            value={formik.values.comment}
            style={{ height: '100px' }}
          />
          {formik.errors.comment && <span className="text-danger">{formik.errors.comment}</span>}
        </FloatingLabel>

        <div className="d-grid m-auto" style={{ width: 200 }}>
          <Button className="text-white" variant="warning" type="submit">Send</Button>
        </div>
      </Form>
    </div>
  )
}

export default FormComment
