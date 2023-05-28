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

  const FiltroListaPracticas= practicas.filter((practica)=> practica.fechaRealizacionTarea.toLowerCase().includes(buscar.toLowerCase()));
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
                <b>Nombre: </b>  {Practica.nombreEmpresa}
                <br />
                <b>Correo: </b> {Practica.emailEmpresa}
                <br />
                <b>Teléfono:</b> {Practica.numeroTelefonoEmpresa}
                <br />
                <b>Dirección:</b> {Practica.direccionEmpresa}
              </td>
              <td>
                <b>Nombre:</b> {Practica.nombreCompletoSupervisor}
                <br />
                <b>Teléfono:</b> {Practica.telefonoSupervisor}
                <br />
                <b>Cargo:</b> {Practica.cargoSupervisor}
              </td>
              <td>
                <b>Descripción:</b> {Practica.descripcionTarea}
                <br />
                <b>Fecha:</b> {Practica.fechaRealizacionTarea}
                <br />
                <b>Importancia:</b> {Practica.importanciaTarea}
                <br />
                <b>Horas:</b> {Practica.horasDedicadaTarea}
              </td>
              <td>
                <button style={{ backgroundColor: "red" }} className="Boton" onClick={()=>{
                  deletePracticas(Practica)
                   console.log(Practica)}}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </>
  );
};
