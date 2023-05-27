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
    if (seccion === 1) {
        if (seccion === 1) {
            const form = event.target.form;
            const esValid = form.checkValidity();
            if (!esValid) {
              form.reportValidity();
            } else {
              setSeccion((prevSeccion) => prevSeccion + 1);
            }
          }
    }
  };
  const renderSecciones = () => {
    switch (seccion) {
      case 1:
        return (
          <div className="seccion">
            <h2>Información de la Empresa</h2>
            {
              <div className="campo">
                <label htmlFor="nombreEmpresa">Nombre de la empresa:</label>
                <input
                  type="text"
                  id="nombreEmpresa"
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  placeholder="Nombre de la empresa"
                  required
                />
              </div>
            }
            {
              <div className="campo">
                <label htmlFor="sitioWebEmpresa">
                  Sitio web de la empresa:
                </label>
                <input
                  type="url"
                  id="sitioWebEmpresa"
                  value={sitioWebEmpresa}
                  onChange={(e) => setSitioWebEmpresa(e.target.value)}
                  placeholder="Sitio web de la empresa"
                  required
                />
              </div>
            }
            {
              <div className="campo">
                <label htmlFor="direccionEmpresa">
                  Dirección de la empresa:
                </label>
                <input
                  type="text"
                  id="direccionEmpresa"
                  value={direccionEmpresa}
                  onChange={(e) => setDireccionEmpresa(e.target.value)}
                  required
                />
              </div>
            }
            {
              <div className="campo">
                <label htmlFor="numeroTelefonicoEmpresa">
                  Numero telefonico de la empresa:
                </label>
                <input
                  type="tel"
                  id="numeroTelefonicoEmpresa"
                  value={numeroTelefonicoEmpresa}
                  onChange={(e) => setNumeroTelefonicoEmpresa(e.target.value)}
                  placeholder="123-4567890, Numero telefonico de la empresa sin prefijo "
                  pattern="[0-9]{3}-[0-9]{7}"
                  max={11}
                  maxLength={12}
                  required
                />
              </div>
            }
            {
              <div className="campo">
                <label htmlFor="correoElectronicoEmpresa">
                  Correo electronico de la empresa:
                </label>
                <input
                  type="text"
                  id="correoElectronicoEmpresa"
                  value={correoElectronicoEmpresa}
                  onChange={(e) => setCorreoElectronicoEmpresa(e.target.value)}
                  placeholder="Correo electronico de la empresa"
                  required
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
  return <form className="formulario">{renderSecciones()}</form>;
};
