import React from 'react'
import { Link } from 'react-router-dom'

export const MenuPrincipal = () => {
  return (
    <>
        <h1>Bienvenido a la pagina de navegación para tus Practicas Profesionales!</h1>
        <Link to="/registrarPracticas"><button>Registrar Practicas</button></Link>
        <Link to="/consultarPracticas"><button>Consultar Practicas</button></Link>
        {/*poner el atributo target='_blank' para cuando se contecte con el back*/}
    </>
  )
}
