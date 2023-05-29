import { Link } from "react-router-dom";
import { getPracticas } from "../Peticiones/getPracticas";
import { useEffect, useState } from "react";
import { deletePracticas } from "../Peticiones/deletePracticas";
export const MostrarPracticas = () => {
  const [buscar,setBuscar]=useState("");
  const [practicas,setPracticas]=useState([]);
  const cargarPracticas = async () => {
    try {
      const datos = await getPracticas();
      setPracticas(datos);
    } catch (error) {
      alert("El servidor no se encuentra en línea. Por favor, intenta más tarde.");
    }
  };
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
              <td>
                <b>Nombre: </b>  {Practica.empresa.nombreEmpresa}
                <br />
                <b>Correo: </b> {Practica.empresa.emailEmpresa}
                <br />
                <b>Teléfono:</b> {Practica.empresa.numeroTelefonoEmpresa}
                <br />
                <b>Dirección:</b> {Practica.empresa.direccionEmpresa}
              </td>
              <td>
                <b>Nombre:</b> {Practica.supervisor.nombreCompletoSupervisor}
                <br />
                <b>Teléfono:</b> {Practica.supervisor.telefonoSupervisor}
                <br />
                <b>Cargo:</b> {Practica.supervisor.cargoSupervisor}
              </td>
              <td>
                <b>Descripción:</b> {Practica.tarea.descripcionTarea}
                <br />
                <b>Fecha:</b> {Practica.tarea.fechaRealizacionTarea}
                <br />
                <b>Importancia:</b> {Practica.tarea.importanciaTarea}
                <br />
                <b>Horas:</b> {Practica.tarea.horasDedicadaTarea}
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
