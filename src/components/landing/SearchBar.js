import { Form, Button } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SearchBar() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''

  const SearchSchema = Yup.object().shape({
    keyword: Yup.string().required('Please type something to search')
  })

  const formik = useFormik({
    initialValues: {
      keyword: keyword
    },
    enableReinitialize: true,
    validationSchema: SearchSchema,
    onSubmit: (values) => {
      navigate(`/recipes?keyword=${values.keyword}`)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit} className="form-search">
      <Form.Control
        type="text"
        className="search-bar"
        name="keyword"
        placeholder={formik.errors.keyword ? formik.errors.keyword : 'Search Recipe'}
        onChange={formik.handleChange}
        value={formik.values.keyword}
      />

      <Button type="submit" className="btn-icon" variant="light" size="sm">
        <i className="bi bi-search icon"></i>
      </Button>
    </Form>
  )
}