import { Route, Routes } from 'react-router'
import { Main } from './components/pages/Main'

// import Login from './components/pages/login/login'
// import Registration from './components/pages/registration/registration'
// import MainNotReg from './components/pages/main/components/mainNotReg'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
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
