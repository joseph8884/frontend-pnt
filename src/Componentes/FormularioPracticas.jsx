import { json, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState} from "react"
export const FormularioPracticas=({setPracticas})=>{

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
  const [importanciaTarea, setImportanciaTarea] = useState("Baja");
  const [fechaRealizacionTarea, setFechaRealizacionTarea] = useState("");
  const [horasDedicadaTarea, sethorasDedicadaTarea] = useState("1hr");


  const navigate = useNavigate();
  const guardarPractica = (event) => {
    event.preventDefault();
    const form = event.target.form;
    const isValid = form.checkValidity();
  
    if (!isValid) {
      form.reportValidity();
    } else {
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
      navigate('/');
    }
  };
  const [seccion, setSeccion] = useState(1);
    const avanzarSeccion = (event) => {
        event.preventDefault();
      
        const form = event.target.form;
        const isValid = form.checkValidity();
      
        if (!isValid) {
          form.reportValidity();
        } else {
          setSeccion((prevSeccion) => prevSeccion + 1);
        }
      };
      const retrocederSeccion = (event) => {
        event.preventDefault();
        setSeccion((prevSeccion) => prevSeccion - 1);
      };
      
      const fechaActual = new Date().toISOString().split('T')[0]; //Obtener la fecha actual con el formato YYYY-MM-DD
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
                  minLength={3}
                  maxLength={20}
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
                  minLength={3}
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
                  placeholder="Dirección, EJ: carrera 11 #8-20,Bogotá,Colombia "
                  minLength={3}
                  maxLength={30}
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
                  maxLength={11}
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
                  type="email"
                  id="correoElectronicoEmpresa"
                  value={correoElectronicoEmpresa}
                  onChange={(e) => setCorreoElectronicoEmpresa(e.target.value)}
                  placeholder="Correo electronico de la empresa"
                  minLength={3}

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
              placeholder="Nombre del supervisor"
              minLength={3}
              required
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
                placeholder="Cargo del supervisor"
                minLength={3}
                required
              />
            </div>
            }
            {
               <div className="campo">
               <label htmlFor="telefonoSupervisor">Telefono del supervisor:</label>
               <input
                 type="tel"
                 id="telefonoSupervisor"
                 value={telefonoSupervisor}
                 onChange={(e) => setTelefonoSupervisor(e.target.value)}
                 placeholder="123-4567890; Numero telefonico del supervisor "
                  pattern="[0-9]{3}-[0-9]{7}"
                  max={11}
                  maxLength={11}
                  required
               />
             </div>
            }
            <button className="retrocederboton" onClick={retrocederSeccion}>Atrás</button>
            <button  onClick={avanzarSeccion}>Siguiente</button>
            
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
               placeholder="Descripcion de la tarea, max 100 caracteres"
               minLength={3}
              maxLength={100}
               required
             />
              </div>
            }
            {
              <div className="campo">
              <label htmlFor="importanciaTarea">Importancia de la tarea </label>
              <select
                name="importanciaTarea"
                className="form-control"
                id="importanciaTarea"
                value={importanciaTarea}
                onChange={(event) => setImportanciaTarea(event.target.value)}
                required
              >
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
              </select>
              </div>
            }
            {
            <div className="campo">
                <label htmlFor="fechaRealizacionTarea"
                  >Fecha de realizacion de la tarea:
                  <input type="date" name="fechaRealizacionTarea" min="2017-04-01" max={fechaActual} 
                  id="fechaRealizacionTarea"
                  value={fechaRealizacionTarea}
                  onChange={(e) => setFechaRealizacionTarea(e.target.value)}   
                  required
                  />
                </label>
            </div>
            }
            {
              <div className="campo">
              <label htmlFor="horasDedicadaTarea">Horas dedicadas a la tarea </label>
              <select
                name="horasDedicadaTarea"
                className="form-control"
                id="horasDedicadaTarea"
                value={horasDedicadaTarea}
                onChange={(event) => sethorasDedicadaTarea(event.target.value)}
                required
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
            <button className="retrocederboton" onClick={retrocederSeccion}>Atrás</button>
            <button onClick={guardarPractica}>Guardar</button>
          </div>
        );
      default:
        return null;
    }
  };

return (
        <>
     <form className="formulario">{renderSecciones()}</form>
        <Link to="/"><button>Volver al menu principal</button></Link>
        </>
    )
};

