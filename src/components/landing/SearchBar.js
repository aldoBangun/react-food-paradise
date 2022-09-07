import { useState } from 'react'
import { Form, Button, Dropdown } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SearchBar = ({ filter = false }) => {
  const navigate = useNavigate()
  const [sort, setSort] = useState('title')
  const [order, setOrder] = useState('ASC')
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
      if (filter) {
        navigate(`/recipes?keyword=${values.keyword}&sort=${sort}&order=${order}`)
        return
      }

      navigate(`/recipes?keyword=${values.keyword}`)
    }
  })

  return (
    <div className="d-flex align-items-center justify-content-between">
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

      {
        filter && (
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-4">
              <small className="text-muted">Sort By</small>
              <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {sort === 'title' ? 'Recipe Title' : 'Post Date'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSort('title')} >Recipe Title</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSort('created_at')} >Post Date</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="d-flex align-items-center gap-4">
              <small className="text-muted">Order</small>
              <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {order === 'ASC' ? 'asc' : 'desc'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setOrder('ASC')} >asc</Dropdown.Item>
                  <Dropdown.Item onClick={() => setOrder('DESC')} >desc</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SearchBar