import { Route, Routes } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import Main from './pages/main/main'
// import Header from './components/header/header'
import AdvPage from './pages/advpage/advpage'
import SellerProfile from './pages/profile/seller-profile'
import Login from './pages/login/login'
import Registration from './pages/lRegistration/registration'

function AppRoutes() {
    return (
        <Routes>
            {/* profile готова */}
            <Route path="/profile" element={<Profile />} />

            {/* main готова */}
            <Route path="/" element={<Main />} />

            {/* adv готова */}
            <Route path="/adv/:id" element={<AdvPage />} />

            {/* SellerProfile готова */}
            <Route path="/selProfile" element={<SellerProfile />} />

            {/* Login готова */}
            <Route path="/login" element={<Login />} />

            <Route path="/registration" element={<Registration />} />

            {/* 

            
            <Route path="/product/:id" element={<Product />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/reviews/:id" element={<Reviews />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/product/:myadvt/:id" element={<Product />} />
        <Route path="/addnewat" element={<Addnewat />} /> */}
        </Routes>
    )
}

export default AppRoutes
