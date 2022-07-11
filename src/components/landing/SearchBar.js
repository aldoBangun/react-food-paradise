import { Form, Button } from 'react-bootstrap'

export default function SearchBar() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit} className="form-search">
      <Form.Control type="text" className="search-bar" placeholder="Search Recipe" />
      <Button type="submit" className="btn-icon" variant='light' size="sm">
        <i className="bi bi-search icon"></i>
      </Button>
    </Form>
  )
}