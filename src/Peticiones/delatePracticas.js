export const delatePracticas = async(practica) => {
    const url=`http://localhost:8080/practica/eliminar/${practica}`;
    const resp=await fetch(url,{
        method:'DELETE'
    });
    const data= await resp.json();
}
