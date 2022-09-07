import withAuth from './hoc/withAuth'
import withRedux from './hoc/withRedux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import RecipeAdd from './pages/recipe/RecipeAdd'
import ProfileDetail from './pages/profile/ProfileDetail'
import NotFound from './pages/NotFound'
import AuthLayout from './components/layout/AuthLayout'
import AppLayout from './components/layout/AppLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import RecipeDetail from './pages/recipe/RecipeDetail'
import Search from './pages/Search'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
          </Route>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="recipes" element={<Search />} />
            <Route path="recipes/add" element={<RecipeAdd />} />
            <Route path="recipes/:recipeId" element={<RecipeDetail />} />
            <Route path="profile" element={<ProfileDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const AppWithAuth = withAuth(App)
const AppWithRedux = withRedux(AppWithAuth)
export default AppWithRedux
