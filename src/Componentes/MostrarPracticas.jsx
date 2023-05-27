import { Link } from 'react-router-dom'
export const MostrarPracticas = ()=>{
    return(              
<>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Id estudiante</th>
                <th scope="col">Nombre</th>
                <th scope="col">Semestre</th>
                <th scope="col">Facultad</th>
                <th scope="col">Genero</th>
                <th scope="col">Programa</th>
                <th scope="col">Acciones</th>
            
            </tr>
            </thead>
        </table>









        
           <Link to="/"><button onClick={()=> window.close()}>Volver</button></Link>
        </>
    )
}