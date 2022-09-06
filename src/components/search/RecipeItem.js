import { Link } from 'react-router-dom'

const RecipeItem = ({ recipe_id, title, photo }) => (
  <li className="d-flex gap-4">
    <div>
      <img
        className="rounded-2"
        src={photo}
        alt={title}
        height={72}
        width={72}
      />
    </div>

    <div>
      <p className="fw-semibold mb-2">{title}</p>
      <Link to={`/recipes/${recipe_id}`}>
        Details
      </Link>
    </div>
  </li>
)

export default RecipeItem