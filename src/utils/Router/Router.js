import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import Profile from '../../pages/Profile/Profile'
import NotFound from '../../pages/NotFound/NotFound'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='not-found'
          element={<NotFound />}
        />
        <Route
          path='*'
          element={<Navigate to='/not-found' />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
