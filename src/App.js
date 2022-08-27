import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import RecipeAdd from './pages/recipe/RecipeAdd'
import ProfileDetail from './pages/profile/ProfileDetail'
import NotFound from './pages/NotFound'
import AuthLayout from './components/layout/AuthLayout'
import AppLayout from './components/layout/AppLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import withRedux from './hoc/withRedux'
import RecipeDetail from './pages/recipe/RecipeDetail'

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
            <Route path="recipes">
              <Route path="add" element={<RecipeAdd />} />
              <Route path=":recipeId" element={<RecipeDetail />} />
            </Route>
            <Route path="profile" element={<ProfileDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const AppWithRedux = withRedux(App)
export default AppWithRedux
