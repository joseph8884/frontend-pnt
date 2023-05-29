import { Link } from "react-router-dom";
import { getPracticas } from "../Peticiones/getPracticas";
import { useEffect, useState } from "react";
import { deletePracticas } from "../Peticiones/deletePracticas";
export const MostrarPracticas = () => {
  const [buscar,setBuscar]=useState("");
  const [practicas,setPracticas]=useState([]);
  const cargarPracticas=async()=>{
    const datos=await getPracticas();
    setPracticas(datos)
  }
  useEffect(()=>{
    cargarPracticas()
  },[])

  const FiltroListaPracticas= practicas.filter((practica)=> practica.tarea.fechaRealizacionTarea.toLowerCase().includes(buscar.toLowerCase()));
  const Buscador = () => {
    return (
      <div className="input-group mb-3">
        <label htmlFor="id"></label>
        <input
          type="date"
          className="form-control"
          id="id"
          placeholder="Buscar por fecha"
          value={buscar}
          onChange={(event) => setBuscar(event.target.value)}
        />
        <button className="btn btn-outline-secondary" onClick={()=>setBuscar("")}>Limpiar</button>
      </div>
    );
  };

  return (
    <>
      {Buscador()}

      <br />
      <table className="table table-striped">
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
          {FiltroListaPracticas.map((Practica, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="tdcolor">
                <b>Nombre: </b>  <div className="colorvars">{Practica.empresa.nombreEmpresa}</div>
                <b>Correo: </b> <div className="colorvars">{Practica.empresa.emailEmpresa}</div>
                <b>Teléfono:</b> <div className="colorvars">{Practica.empresa.numeroTelefonoEmpresa}</div>
                <b>Dirección:</b> <div className="colorvars">{Practica.empresa.direccionEmpresa}</div>
              </td>
              <td className="tdcolor">
                <b>Nombre:</b> <div className="colorvars">{Practica.supervisor.nombreCompletoSupervisor}</div>
                <b>Teléfono:</b> <div className="colorvars">{Practica.supervisor.telefonoSupervisor}</div>
                <b>Cargo:</b> <div className="colorvars">{Practica.supervisor.cargoSupervisor}</div>
              </td>
              <td className="tdcolor">
                <b>Descripción:</b> <div className="colorvars">{Practica.tarea.descripcionTarea}</div>
                <b>Fecha:</b> <div className="colorvars">{Practica.tarea.fechaRealizacionTarea}</div>
                <b>Importancia:</b> <div className="colorvars">{Practica.tarea.importanciaTarea}</div> 
                <b>Horas:</b> <div className="colorvars">{Practica.tarea.horasDedicadaTarea}</div>
              </td>
              <td>
                <button style={{ backgroundColor: "red" }} className="Boton" onClick={()=>{
                  deletePracticas(Practica);
                  document.location.reload();
                  }}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button onClick={()=>window.close()}>Volver</button>
      </Link>
    </>
  );
};
