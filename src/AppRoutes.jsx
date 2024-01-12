import { Route, Routes } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import Main from './pages/main/main'
import AdvPage from './pages/advpage/advpage'
import SellerProfile from './pages/profile/seller-profile'
import Login from './pages/login/login'
import Registration from './pages/lRegistration/registration'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path="/profile/:id" element={<Profile />} />
            </Route>

            <Route path="/" element={<Main />} />

            <Route path="/adv/:id" element={<AdvPage />} />

            <Route path="/selProfile/:id" element={<SellerProfile />} />

            <Route path="/login" element={<Login />} />

            <Route path="/registration" element={<Registration />} />
        </Routes>
    )
}

export default AppRoutes
