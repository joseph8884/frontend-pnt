import { Link } from "react-router-dom";
import { getPracticas } from "../Peticiones/getPracticas";
import { useEffect, useState } from "react";
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

  const FiltroListaPracticas= practicas.filter((practica)=> 
      practica.fechaRealizacionTarea.toLowerCase().includes(buscar.toLowerCase()));







  const Buscador = () => {
    return (
      <div className="Busqueda">
        <label htmlFor="id">BUSCAR POR FECHA PRÁCTICA</label>
        <input
          type="date"
          className="form-control"
          id="id"
          value={buscar}
          onChange={(event) => setBuscar(event.target.value)}
        />
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
          {FiltroListaPracticas.map((Practicas, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <b>Nombre: </b>  {Practicas.nombreEmpresa}
                <br />
                <b>Correo: </b> {Practicas.correoElectronicoEmpresa}
                <br />
                <b>Teléfono:</b> {Practicas.numeroTelefonicoEmpresa}
                <br />
                <b>Dirección:</b> {Practicas.direccionEmpresa}
              </td>
              <td>
                <b>Nombre:</b> {Practicas.nombreCompletoSupervisor}
                <br />
                <b>Teléfono:</b> {Practicas.telefonoSupervisor}
                <br />
                <b>Cargo:</b> {Practicas.cargoSupervisor}
              </td>
              <td>
                <b>Descripción:</b> {Practicas.descripcionTarea}
                <br />
                <b>Fecha:</b> {Practicas.fechaRealizacionTarea}
                <br />
                <b>Importancia:</b> {Practicas.importanciaTarea}
                <br />
                <b>Horas:</b> {Practicas.horasDedicadaTarea}
              </td>
              <td>
                <button style={{ backgroundColor: "red" }} className="Boton">
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button onClick={() => window.close()}>Volver</button>
      </Link>
    </>
  );
};
