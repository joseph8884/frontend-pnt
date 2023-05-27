import { useState } from "react";
export const FormularioPracticas = ({ practicas, setPracticas }) => {
  //useState para Empresa
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [sitioWebEmpresa, setSitioWebEmpresa] = useState("");
  const [direccionEmpresa, setDireccionEmpresa] = useState("");
  const [numeroTelefonicoEmpresa, setNumeroTelefonicoEmpresa] = useState("");
  const [correoElectronicoEmpresa, setCorreoElectronicoEmpresa] = useState("");

  //useState para Supervisor
  const [nombreCompletoSupervisor, setNombreCompletoSupervisor] = useState("");
  const [cargoSupervisor, setNombreSupervisor] = useState("");
  const [telefonoSupervisor, setTelefonoSupervisor] = useState("");

  //useState Tareas
  const [descripcionTarea, setDescripcionTarea] = useState("");
  const [importanciaTarea, setImportanciaTarea] = useState("");
  const [fechaRealizacionTarea, setFechaRealizacionTarea] = useState("");
  const [horasDedicadaTarea, sethorasDedicadaTarea] = useState("");

  const guardarPractica = (event) => {
    if (nombreEmpresa === "") {
      return alert("INGRESE UN VALOR EN NOMBRE");
    }
    if (sitioWebEmpresa === "") {
      return alert("INGRESE UN VALOR EN SITIOWEB");
    }
    if (direccionEmpresa === "") {
      return alert("INGRESE UN VALOR EN DIRECCION");
    }
    if (numeroTelefonicoEmpresa === "") {
      return alert("INGRESE UN VALOR EN NUMERO");
    }
    if (correoElectronicoEmpresa === "") {
      return alert("INGRESE UN VALOR EN CORREOELECTRONICO");
    }
    if (nombreCompletoSupervisor === "") {
      return alert("INGRESE UN VALOR EN EL NOMBRE DEL SUPERVISOR");
    }
    if (cargoSupervisor === "") {
      return alert("INGRESE UN VALOR EN CARGO SUPERVISOR");
    }
    if (telefonoSupervisor === "") {
      return alert("INGRESE UN VALOR EN TELEFONO SUPERVISOR");
    }
    if (descripcionTarea === "") {
      return alert("INGRESE UN VALOR EN DESCRIPCION TAREA");
    }
    if (importanciaTarea === "") {
      return alert("INGRESE UN VALOR EN IMPORTANCIA TAREA");
    }
    if (fechaRealizacionTarea === "") {
      return alert("INGRESE UN VALOR EN FECHA REALIZACION TAREA");
    }
    if (horasDedicadaTarea === "") {
      return alert("INGRESE UN VALOR EN HORAS DEDICADA A TAREA");
    }
    let practica = {
      nombreEmpresa: nombreEmpresa,
      sitioWebEmpresa: sitioWebEmpresa,
      direccionEmpresa: direccionEmpresa,
      numeroTelefonicoEmpresa: numeroTelefonicoEmpresa,
      correoElectronicoEmpresa: correoElectronicoEmpresa,
      descripcionEmpresa: descripcionEmpresa,

      nombreCompletoSupervisor: nombreCompletoSupervisor,
      cargoSupervisor: cargoSupervisor,
      telefonoSupervisor: telefonoSupervisor,

      descripcionTarea: descripcionTarea,
      importanciaTarea: importanciaTarea,
      fechaRealizacionTarea: fechaRealizacionTarea,
      horasDedicadaTarea: horasDedicadaTarea,
    };
    setPracticas(practica);
  };
  const [seccion, setSeccion] = useState(1);
  const avanzarSeccion = (event) => {
    event.preventDefault();
    setSeccion((prevSeccion) => prevSeccion + 1);
  };
  const renderSeccion = () => {
    switch (seccion) {
      case 1:
        return (
          <div className="seccion">
            <h2>Información de la Empresa</h2>
            {
              /* Campos para la información de la empresa */
              <div className="campo">
                <label htmlFor="nombreEmpresa">Nombre de la empresa:</label>
                <input
                  type="text"
                  id="nombreEmpresa"
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                />
              </div>
            }
            {
              <div className="campo">
                <label htmlFor="sitioWebEmpresa">
                  Sitio web de la empresa:
                </label>
                <input
                  type="text"
                  id="sitioWebEmpresa"
                  value={sitioWebEmpresa}
                  onChange={(e) => setSitioWebEmpresa(e.target.value)}
                />
              </div>
            }
            {<div className="campo">
            <label htmlFor="direccionEmpresa">Dirección de la empresa:</label>
            <input
              type="text"
              id="direccionEmpresa"
              value={direccionEmpresa}
              onChange={(e) => setDireccionEmpresa(e.target.value)}
            />
          </div>}
          {
            <div className="campo">
            <label htmlFor="numeroTelefonicoEmpresa">Numero telefonico de la empresa:</label>
            <input
              type="text"
              id="numeroTelefonicoEmpresa"
              value={numeroTelefonicoEmpresa}
              onChange={(e) => setNumeroTelefonicoEmpresa(e.target.value)}
            />
          </div>
          }
          {
            <div className="campo">
            <label htmlFor="correoElectronicoEmpresa">Correo electronico de la empresa:</label>
            <input
              type="text"
              id="correoElectronicoEmpresa"
              value={correoElectronicoEmpresa}
              onChange={(e) => setCorreoElectronicoEmpresa(e.target.value)}
            />
          </div>
          }
            <button onClick={avanzarSeccion}>Siguiente</button>
          </div>
          
        );
      case 2:
        return (
          <div className="seccion">
            <h2>Información del Supervisor</h2>
            {/* Campos para la información del supervisor */}
            <button onClick={avanzarSeccion}>Siguiente</button>
          </div>
        );
      case 3:
        return (
          <div className="seccion">
            <h2>Información de la Tarea</h2>
            {/* Campos para la información de la tarea */}
            <button onClick={guardarPractica}>Guardar</button>
          </div>
        );
      default:
        return null;
    }
  };
  return <form className="formulario">{renderSeccion()}</form>;
};
