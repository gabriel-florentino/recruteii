import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'

function AppRoutes() {

  return (
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login/>} /> {/* Página Sobre */}
        <Route path="/register" element={<Register/>} /> {/* Página Contato */}
      </Routes>
  )
}

export default AppRoutes;
