import { Link } from 'react-router-dom'
import { Practicas } from '../Practicas'
export const MostrarPracticas = ({
    buscar,
    setbuscar,
    FiltroListaPracticas,
})=>{
    return(              
<>
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