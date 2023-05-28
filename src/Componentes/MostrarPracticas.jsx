import { Link } from 'react-router-dom'
import { Practicas } from '../Practicas'
import { useState } from "react"

export const MostrarPracticas = ({
    FiltroListaPracticas,

})=>{

  const [buscar,setBuscar]=useState("");

  const Buscador=()=>{
    return(
    
<div className="Busqueda">
    <label htmlFor="id">BUSCAR POR FECHA PRÁCTICA</label>
        <input 
            type="date" 
            className="form-control" 
            id="id" 
            value={buscar} onChange={(event) => setbuscar(event.target.value)} />
</div>
  )}

  
    return(              
<>
{Buscador()}
<br />
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Datos Empresa</th>
      <th scope="col">Datos Supervisor</th>
      <th scope="col">Tareas</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {console.log(FiltroListaPracticas)}
    {FiltroListaPracticas.map((Practicas)=>
     <tr key={Practicas.fecha}>
     <th scope="row">1</th>
     <td>Nombre:{Practicas.nombreEmpresa}<br></br>Correo:{Practicas.correoElectronicoEmpresa} <br></br>Teléfono:{Practicas.numeroTelefonicoEmpresa} <br></br>Dirección:{Practicas.direccionEmpresa}</td>
     <td>Nombre:{Practicas.nombreCompletoSupervisor} <br></br>Teléfono:{Practicas.telefonoSupervisor}  <br></br>Cargo:{Practicas.cargoSupervisor}</td>
     <td>Descripción:{Practicas.descripcionTarea} <br></br>Fecha:{Practicas.fechaRealizacionTarea}<br></br>Importancia:{Practicas.importanciaTarea} <br></br>Horas:{Practicas.horasDedicadaTarea} </td>
     <td> <button className='Boton'>X</button></td>
   </tr>
    
    )}
   
  </tbody>
</table>

        
           <Link to="/"><button onClick={()=> window.close()}>Volver</button></Link>
        </>
    )
}