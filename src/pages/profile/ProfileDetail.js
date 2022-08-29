import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import TabsRecipe from '../../components/profile/TabsRecipe'
import ProfileView from '../../components/profile/ProfileView'

export default function ProfileDetail() {
  const currentUser = useSelector(state => state.currentUser.user)

  return (
    <>
      {currentUser ? (
        <Container className="h-section d-flex flex-column justify-content-between">
          <ProfileView />
          <div>
            <TabsRecipe />
          </div>
        </Container>
      ) : (
        <h1>You have to <Link to="/login">login</Link> first</h1>
      )}

    </>
  )
}