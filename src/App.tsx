import React from 'react';
import './App.css';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
// import Cadastro from './paginas/cadastro/CadastroUsuario';
import Login from './paginas/Login/Login';


function App() {
    return(
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
      </Routes>
      </div>
      <Footer />
      </Router>
      )
      
}

export default App;
