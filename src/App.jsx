import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layouts/Header'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login/>} /> {/* Página Sobre */}
        <Route path="/register" element={<Register/>} /> {/* Página Contato */}
      </Routes>
    </>
    
  )
}

export default App
