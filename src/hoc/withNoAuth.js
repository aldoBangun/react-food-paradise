import { useSelector } from 'react-redux'
import NoAuth from '../pages/auth/NoAuth'

const withNoAuth = (Component) => {
  const Wrapper = (props) => {
    const currentUser = useSelector(state => state.currentUser.user)
    return (
      <>
        {currentUser ? (<Component {...props} />) : (<NoAuth />)}
      </>
    )
  }

  return Wrapper
}

export default withNoAuth