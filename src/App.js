import './App.css';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

// import { useState } from 'react';

import Users from './components/Users';
import Contador from './components/Contador';
import Fetch from './components/Fetch';
import Axios from './components/Axios';
import RutaNoEncontrada from './components/RutaNoEncontrada';
import RutaClases, { Clase } from './components/RutaClases';
import ComponenteTarea from './components/ComponenteTarea';
import ActividadSet from './components/ActividadSet';
import Home from './components/Home';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
      
        <nav className='barra_nav'>
          <Link className='link_to' to='/home'>Inicio</Link>
          <Link className='link_to' to='/fetch'>Fetch</Link>
          <Link className='link_to' to='/axios'>Axios</Link>
          <Link className='link_to' to='/contador'>Contador</Link>
          <Link className='link_to' to='/clase'>Lista de clases</Link>
          <Link className='link_to' to='/componenteTarea'>Componente Tarea</Link>
          <Link className='link_to' to={'/users'}>Lista de usuarios</Link>
          <Link className='link_to' to='/actividadSet'>Ver la imagen</Link>
        </nav>
      
        <Routes>
        <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/axios' element={<Axios/>}/>
          <Route path='/fetch' element={<Fetch />} />
          <Route path='/contador' element={<Contador />}/>

          <Route path="/clase" element={<RutaClases/>} />
          <Route path="/clase/:id" element={<Clase/>} />

          <Route path='/componenteTarea' element={<ComponenteTarea/>} />
          <Route path='/users' element={<Users/>} />
          <Route path="/actividadSet" element={<ActividadSet/>} />

          
          <Route path='*' element={<RutaNoEncontrada />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
