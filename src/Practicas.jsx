
import { useState } from "react"
import { FormularioPracticas } from "./Componentes/FormularioPracticas"
import { MostrarPracticas } from "./Componentes/MostrarPracticas";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MenuPrincipal } from "./Componentes/MenuPrincipal";
export const Practicas=()=>{
         //useState Practicas
        const [practicas, setPracticas]=useState([])

        const Error404=()=>{
            return(
                <div className="Error">
                    <h1>LOSIENTO, SU PAGINA NO SE PUDO ENCONTRAR err: <b>404</b></h1>
                </div>
            )


        }

       
    return(
        <>       
        <Router>
                <Routes>
                    <Route exact path="/registrarPracticas" element={<FormularioPracticas
                            setPracticas={(practica)=>setPracticas([...practicas,practica])}
                            />}/>
                    <Route exact path="/consultarPracticas" element={<MostrarPracticas
                            />}/>
                    <Route exact path="/" element={<MenuPrincipal/>}/>
                    <Route path="*" element={Error404()}/>              
                </Routes>
        </Router>        
        {
            //always order the routes in less generality
        }
        </>
    )



}