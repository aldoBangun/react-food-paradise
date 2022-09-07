import { Link } from 'react-router-dom'
import moment from 'moment'

const RecipeItem = ({ recipe_id, title, photo, created_at }) => (
  <li className="d-flex gap-4">
    <div>
      <img
        className="rounded-2 object-cover"
        src={photo}
        alt={title}
        height={96}
        width={96}
      />
    </div>

    <div>
      <div className="mb-2">
        <p className="fw-semibold mb-0">{title}</p>
        <small className="text-muted">{moment(created_at).format('LL')}</small>
      </div>
      <Link to={`/recipes/${recipe_id}`}>
        Details
      </Link>
    </div>
  </li>
)

export default RecipeItem