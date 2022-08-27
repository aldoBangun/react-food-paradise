import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { getUser } from '../features/thunks/currentUser'
import { resetCurrentUser } from '../features/slices/currentUser'
import { logout } from '../features/slices/auth'

const withAuth = (Component) => {
  const Wrapper = (props) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const { token } = authState
    useEffect(() => {
      if (!token) {
        dispatch(resetCurrentUser())
        return
      }
  
      const decoded = jwtDecode(token)
      const { userId, exp } = decoded
      const EXP_DATE_IN_MILISECON = exp * 1000

      if (EXP_DATE_IN_MILISECON < Date.now()) {
        dispatch(logout())
        dispatch(resetCurrentUser())
        return
      }
  
      console.log(exp, Date.now())

      dispatch(getUser(userId))
  
    }, [token])  
  
  
    return (
      <Component {...props} />
    )
  }

  return Wrapper
}

export default withAuth
