import { useState } from "react"
export const FormularioPracticas=({practicas, setPracticas})=>{

        //useState para Empresa
        const [nombreEmpresa, setNombreEmpresa]= useState("")
        const [sitioWebEmpresa, setSitioWebEmpresa]=useState("")
        const [direccionEmpresa, setDireccionEmpresa]=useState("")
        const [numeroTelefonicoEmpresa, setNumeroTelefonicoEmpresa]=useState("")
        const [correoElectronicoEmpresa, setCorreoElectronicoEmpresa]=useState("")
        const [descripcionEmpresa, setDescripcionEmpresa]=useState("")
    
        //useState para Supervisor
        const[nombreCompletoSupervisor, setNombreCompletoSupervisor]=useState("")
        const[cargoSupervisor, setNombreSupervisor]=useState("")
        const[telefonoSupervisor, setTelefonoSupervisor]=useState("")
    
        //useState Tareas
        const [descripcionTarea, setDescripcionTarea]=useState("")
        const [importanciaTarea, setImportanciaTarea] = useState("")
        const [fechaRealizacionTarea, setFechaRealizacionTarea] = useState("")
        const [horasDedicadaTarea , sethorasDedicadaTarea] = useState("")
    
    const guardarPractica=(event)=>{
        if (nombreEmpresa === ""){
            return alert("INGRESE UN VALOR EN NOMBRE")
        }
        if (sitioWebEmpresa===""){
            return alert("INGRESE UN VALOR EN SITIOWEB")
        }
        if (direccionEmpresa ===""){
            return alert("INGRESE UN VALOR EN DIRECCION")
        }
        if (numeroTelefonicoEmpresa===""){
            return alert("INGRESE UN VALOR EN NUMERO")
        }
        if (correoElectronicoEmpresa === ""){
            return alert("INGRESE UN VALOR EN CORREOELECTRONICO")
        }
        if (descripcionEmpresa === ""){
            return alert("INGRESE UN VALOR EN DESCRIPCIONEMPRESA")
        }
        if (nombreCompletoSupervisor ===""){
            return alert("INGRESE UN VALOR EN EL NOMBRE DEL SUPERVISOR")
        }
        if (cargoSupervisor ===""){
            return alert("INGRESE UN VALOR EN CARGO SUPERVISOR")
        }
        if (telefonoSupervisor ===""){
            return alert("INGRESE UN VALOR EN TELEFONO SUPERVISOR")
        }
        if (descripcionTarea ===""){
            return alert("INGRESE UN VALOR EN DESCRIPCION TAREA")
        }
        if (importanciaTarea ===""){
            return alert("INGRESE UN VALOR EN IMPORTANCIA TAREA")
        }
        if (fechaRealizacionTarea===""){
            return alert("INGRESE UN VALOR EN FECHA REALIZACION TAREA")
        }
        if (horasDedicadaTarea ===""){
            return alert("INGRESE UN VALOR EN HORAS DEDICADA A TAREA")
        }
        let practica={
            nombreEmpresa: nombreEmpresa,
            sitioWebEmpresa: sitioWebEmpresa,
            direccionEmpresa: direccionEmpresa,
            numeroTelefonicoEmpresa: numeroTelefonicoEmpresa,
            correoElectronicoEmpresa: correoElectronicoEmpresa,
            descripcionEmpresa:descripcionEmpresa,

            nombreCompletoSupervisor:nombreCompletoSupervisor,
            cargoSupervisor:cargoSupervisor,
            telefonoSupervisor:telefonoSupervisor,

            descripcionTarea:descripcionTarea,
            importanciaTarea:importanciaTarea,
            fechaRealizacionTarea:fechaRealizacionTarea,
            horasDedicadaTarea:horasDedicadaTarea,
        }
        
    }

    const Formulario=()=>{
        return(
            <>
            
            {
            //Aca tiene que ir todo el formulario de practicas
            }
            </>
        )
    }
    return(
        <>
        {Formulario()}
        </>
    )
}