import React from 'react';
import ReactDOM from 'react-dom/client';
import { Practicas } from './Practicas';
import './Estilos/Estilos.css';
import './Funcionalidad/FuncionalidadFront.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practicas></Practicas>
  </React.StrictMode>
);

