import React from 'react';
import './App.css';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';
import Login from './paginas/Login/Login';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
    return(
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrousuario" element={<CadastroUsuario />} />
      <Route path="/temas" element={<ListaTema />} />
      <Route path="/posts" element={<ListaPostagem />} /> 
      </Routes>
      </div>
      <Footer />
      </Router>
      )
      
}

export default App;
