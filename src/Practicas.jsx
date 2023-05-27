
import { useState } from "react"
import { FormularioPracticas } from "./Componentes/FormularioPracticas"

export const Practicas=()=>{
         //useState Practicas
        const [practicas, setPracticas]=useState([])
    return(
        <>
        <FormularioPracticas
        practicas={practicas}
        setPracticas={(practica)=>setPracticas([...practicas,practica])}
        />
        
        {
            //Componente de Formulario
            //Boton que lleva a buscar. 
        }
        </>
    )
}