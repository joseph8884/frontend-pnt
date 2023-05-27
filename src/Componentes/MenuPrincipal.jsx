import React from 'react'
import { Link } from 'react-router-dom'

export const MenuPrincipal = () => {
  return (
    <>
        <h1>Bienvenido a la pagina de navegación</h1>
        <Link to="/registrarPracticas" ><button>Registrar Practicas</button></Link>
        <Link to="/consultarPracticas" target='_blank'><button>Consultar Practicas</button></Link>
    </>
  )
}
