import { Link } from 'react-router-dom'
export const MostrarPracticas = ()=>{
    return(
        <>
            <Link to="/"><button onClick={()=> window.close()}>Volver</button></Link>
        </>
    )
}