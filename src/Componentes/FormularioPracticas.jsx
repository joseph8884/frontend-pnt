
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
        setPracticas(practica)
    }

    const Formulario = () => {
        const estiloboton={
            margin_bottom:'18px',
        }
        const estiloaltura={
            height:'108px',
        }
        return (
            <>
            <div class="wrapper">
                <form action="">
                    <div id="wizard">     
                        <h4></h4>
                        <section>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Name"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Email"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Phone number"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Street address"/> </div>
                        </section> 
                        <h4></h4>
                        <section>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="country"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="zip code"/> </div>
                            <div class="form-row" style= {estiloboton}> <textarea name="" id="" class="form-control" placeholder="Any order note about delivery or special offer"  style= {estiloaltura}></textarea></div>
                        </section>
                    </div>
                </form>    
            </div>            
            </>
        )
    }
    return (
        <>
        {Formulario()}

        </>
    )
}