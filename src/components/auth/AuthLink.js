import { Link } from 'react-router-dom'

const AuthLink = ({ link, label, text }) => (
  <span>
    {text}
    <Link className="text-warning text-decoration-none" to={link}>{label}</Link>
  </span>
)

export default AuthLink
