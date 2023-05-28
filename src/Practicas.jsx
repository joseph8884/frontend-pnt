
import { useState } from "react"
import { FormularioPracticas } from "./Componentes/FormularioPracticas"
import { MostrarPracticas } from "./Componentes/MostrarPracticas";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MenuPrincipal } from "./Componentes/MenuPrincipal";

/*<FormularioPracticas
practicas={practicas}
setPracticas={(practica)=>setPracticas([...practicas,practica])}
/>
*/

export const Practicas=()=>{
         //useState Practicas
        const [practicas, setPracticas]=useState([{
            nombreEmpresa: "asdas",
            sitioWebEmpresa: "sitioWebEmpresa",
            direccionEmpresa: "direccionEmpresa",
            numeroTelefonicoEmpresa: 312,
            correoElectronicoEmpresa: "correoElectronicoEmpresa",

            nombreCompletoSupervisor: "nombreCompletoSupervisor",
            cargoSupervisor: "cargoSupervisor",
            telefonoSupervisor:33213,

            descripcionTarea: "descripcionTarea",
            importanciaTarea: "importanciaTarea",
            fechaRealizacionTarea: "fechaRealizacionTarea1",
            horasDedicadaTarea: 312,
        },
        {
            nombreEmpresa: "asdas",
            sitioWebEmpresa: "sitioWebEmpresa",
            direccionEmpresa: "direccionEmpresa",
            numeroTelefonicoEmpresa: 312,
            correoElectronicoEmpresa: "correoElectronicoEmpresa",

            nombreCompletoSupervisor: "nombreCompletoSupervisor",
            cargoSupervisor: "cargoSupervisor",
            telefonoSupervisor:33213,

            descripcionTarea: "descripcionTarea",
            importanciaTarea: "importanciaTarea",
            fechaRealizacionTarea: "fechaRealizacionTarea2",
            horasDedicadaTarea: 312,
        },
        {
            nombreEmpresa: "asdas",
            sitioWebEmpresa: "sitioWebEmpresa",
            direccionEmpresa: "direccionEmpresa",
            numeroTelefonicoEmpresa: 312,
            correoElectronicoEmpresa: "correoElectronicoEmpresa",

            nombreCompletoSupervisor: "nombreCompletoSupervisor",
            cargoSupervisor: "cargoSupervisor",
            telefonoSupervisor:33213,

            descripcionTarea: "descripcionTarea",
            importanciaTarea: "importanciaTarea",
            fechaRealizacionTarea: "fechaRealizacionTarea3",
            horasDedicadaTarea: 312,
        },
    ])
        const [buscar,setBuscar]=useState("");
        const Error404=()=>{
            return(
                <div className="Error">
                    <h1>LOSIENTO, SU PAGINA NO SE PUDO ENCONTRAR err: <b>404</b></h1>
                </div>
            )


        }

        const FiltroListaPracticas= practicas.filter((practica)=> 
        practica.fechaRealizacionTarea.toLowerCase().includes(buscar.toLowerCase()));
    return(
        <>       
        <Router>
                <Routes>
                    <Route exact path="/registrarPracticas" element={<FormularioPracticas
                            setPracticas={(practica)=>setPracticas([...practicas,practica])}
                            />}/>
                    <Route exact path="/consultarPracticas" element={<MostrarPracticas
                            buscar={buscar}
                            setBuscar={(busqueda)=>setBuscar(busqueda)} 
                            FiltroListaPracticas={FiltroListaPracticas}
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