export const postPracticas = async(practica) => {
    const url='http://localhost:8080/practicas/agregar';
    const resp=await fetch (url,{
        method:'POST',
        headers:{'Content-type':'appliaction/json'},
        body:JSON.stringify(practica)
    })
}
