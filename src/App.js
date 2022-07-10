import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import RecipeAdd from './pages/recipe/RecipeAdd'
import ProfileDetail from './pages/profile/ProfileDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="recipes/add" element={<RecipeAdd />} />
          <Route path="profile" element={<ProfileDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}