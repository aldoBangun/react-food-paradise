import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import RecipeAdd from './pages/recipe/RecipeAdd'
import ProfileDetail from './pages/profile/ProfileDetail'
import NotFound from './pages/NotFound'
import AuthLayout from './components/layout/AuthLayout'
import AppLayout from './components/layout/AppLayout'
import Login from './pages/auth/Login'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}/>
          </Route>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Landing />} />
            <Route path="recipes/add" element={<RecipeAdd />} />
            <Route path="profile" element={<ProfileDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}