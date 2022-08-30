import { Container } from 'react-bootstrap'
import TabsRecipe from '../../components/profile/TabsRecipe'
import ProfileView from '../../components/profile/ProfileView'
import withNoAuth from '../../hoc/withNoAuth'

const ProfileDetail = () => (
  <Container className="h-section d-flex flex-column justify-content-between">
    <ProfileView />
    <div>
      <TabsRecipe />
    </div>
  </Container>
)

const ProfileDetailWithNoAuth = withNoAuth(ProfileDetail)
export default ProfileDetailWithNoAuth