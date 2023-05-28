import { Link } from "react-router-dom";
export const MostrarPracticas = ({
  buscar,
  setBuscar,
  FiltroListaPracticas,
}) => {
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
                Nombre: {Practicas.nombreEmpresa}
                <br />
                Correo: {Practicas.correoElectronicoEmpresa}
                <br />
                Teléfono: {Practicas.numeroTelefonicoEmpresa}
                <br />
                Dirección: {Practicas.direccionEmpresa}
              </td>
              <td>
                Nombre: {Practicas.nombreCompletoSupervisor}
                <br />
                Teléfono: {Practicas.telefonoSupervisor}
                <br />
                Cargo: {Practicas.cargoSupervisor}
              </td>
              <td>
                Descripción: {Practicas.descripcionTarea}
                <br />
                Fecha: {Practicas.fechaRealizacionTarea}
                <br />
                Importancia: {Practicas.importanciaTarea}
                <br />
                Horas: {Practicas.horasDedicadaTarea}
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
