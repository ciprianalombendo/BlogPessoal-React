import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import store from './store/store';


function App() {
    return(
      <Provider store={store}>
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastrousuario" element={<CadastroUsuario />} />
      <Route path="/temas" element={<ListaTema />} />
      <Route path="/posts" element={<ListaPostagem />} />
      <Route path="/formularioPostagem/: id" element={<CadastroPostagem/>} /> 
      <Route path="/formularioPostagem" element={<CadastroPostagem />} /> 
      <Route path="/formularioTema/: id" element={<CadastroTema/>} /> 
      <Route path="/formularioTema" element={<CadastroTema />} /> 
      <Route path="/deletarPostagem/: id" element={<DeletarPostagem />} /> 
       <Route path="/deletarTema/: id" element={<DeletarTema />} />  
      </Routes>
      </div>
      <Footer />
      </Router>
      </Provider>
      )
      
}

export default App;
