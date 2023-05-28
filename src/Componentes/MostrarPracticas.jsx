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
     <td>{Practicas.nombreEmpresa}<br></br> {Practicas.correoElectronicoEmpresa} <br></br> {Practicas.numeroTelefonicoEmpresa} <br></br> {Practicas.ireccionEmpresa}</td>
     <td>{Practicas.nombreCompletoSupervisor} <br></br> {Practicas.telefonoSupervisor}  <br></br> {Practicas.argoSupervisor}</td>
     <td>{Practicas.descripcionTarea} <br></br> {Practicas.fechaRealizacionTarea}<br></br> {Practicas.importanciaTarea} <br></br>{Practicas.horasDedicadaTarea} </td>
     <td> <button className='Boton'>X</button></td>
   </tr>
    
    )}
   
  </tbody>
</table>

        
           <Link to="/"><button onClick={()=> window.close()}>Volver</button></Link>
        </>
    )
}