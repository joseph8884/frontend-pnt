import { Link } from 'react-router-dom'
export const MostrarPracticas = ()=>{
    return(              
<>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Datos Empresa</th>
      <th scope="col">Datos Supervisor</th>
      <th scope="col">Tareas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        
           <Link to="/"><button onClick={()=> window.close()}>Volver</button></Link>
        </>
    )
}