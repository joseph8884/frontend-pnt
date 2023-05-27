
import { Link } from 'react-router-dom'
import { useState } from "react"
export const FormularioPracticas=({practicas, setPracticas})=>{

  //useState para Empresa
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [sitioWebEmpresa, setSitioWebEmpresa] = useState("");
  const [direccionEmpresa, setDireccionEmpresa] = useState("");
  const [numeroTelefonicoEmpresa, setNumeroTelefonicoEmpresa] = useState("");
  const [correoElectronicoEmpresa, setCorreoElectronicoEmpresa] = useState("");

  //useState para Supervisor
  const [nombreCompletoSupervisor, setNombreCompletoSupervisor] = useState("");
  const [cargoSupervisor, setcargoSupervisor] = useState("");
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
            {/* Campos para la información del supervisor */
            <div className="campo">
            <label htmlFor="nombreCompletoSupervisor">Nombre del supervisor:</label>
            <input
              type="text"
              id="nombreCompletoSupervisor"
              value={nombreCompletoSupervisor}
              onChange={(e) => setNombreCompletoSupervisor(e.target.value)}
            />
          </div>
            }
            {
              <div className="campo">
              <label htmlFor="cargoSupervisor">Cargo del supervisor:</label>
              <input
                type="text"
                id="cargoSupervisor"
                value={cargoSupervisor}
                onChange={(e) => setcargoSupervisor(e.target.value)}
              />
            </div>
            }
            {
               <div className="campo">
               <label htmlFor="telefonoSupervisor">Telefono del supervisor:</label>
               <input
                 type="text"
                 id="telefonoSupervisor"
                 value={telefonoSupervisor}
                 onChange={(e) => setTelefonoSupervisor(e.target.value)}
               />
             </div>
            }
            <button onClick={avanzarSeccion}>Siguiente</button>
          </div>
        );
      case 3:
        return (
          <div className="seccion">
            <h2>Información de la Tarea</h2>
            {/* Campos para la información de la tarea */
             <div className="campo">
             <label htmlFor="descripcionTarea">Describa brevemente la tarea:</label>
             <input
               type="text"
               id="descripcionTarea"
               value={descripcionTarea}
               onChange={(e) => setDescripcionTarea(e.target.value)}
             />
              </div>
            }
            {
              <div className="campo">
              <label htmlFor="importanciaTarea">Importancia de la tarea </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="importanciaTarea"
                className="form-control"
                id="importanciaTarea"
                value={importanciaTarea}
                onChange={(event) => setImportanciaTarea(event.target.value)}
              >
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
              </select>
              </div>
            }
            {
            <div className="campo">
              <form>
                <label htmlFor="fechaRealizacionTarea"
                  >Fecha de realizacion de la tarea:
                  <input type="date" name="fechaRealizacionTarea" min="2017-04-01" max="2023-12-31" 
                  id="fechaRealizacionTarea"
                  value={fechaRealizacionTarea}
                  onChange={(e) => setFechaRealizacionTarea(e.target.value)}   
                  />
                </label>
              </form>
            </div>
            }
            {
              <div className="campo">
              <label htmlFor="horasDedicadaTarea">Horas dedicadas a la tarea </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="horasDedicadaTarea"
                className="form-control"
                id="horasDedicadaTarea"
                value={horasDedicadaTarea}
                onChange={(event) => sethorasDedicadaTarea(event.target.value)}
              >
                <option>1hr</option>
                <option>2hr</option>
                <option>3hr</option>
                <option>4hr</option>
                <option>5hr</option>
                <option>6hr</option>
                <option>+6hr</option>
              </select>
              </div>
            }

            <button onClick={guardarPractica}>Guardar</button>
          </div>
        );
      default:
        return null;
    }
  };
return (
        <>
     <form className="formulario">{renderSecciones()}</form>;
        <Link to="/"><button>Volver</button></Link>
        </>
    )
};

