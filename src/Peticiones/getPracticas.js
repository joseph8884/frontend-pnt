export const getPracticas = async() => {
    const url='http://localhost:8080/practicas/todas'
    const resp=await fetch(url);
    const data=await resp.json();
    const practicasLista=data.map((practica)=>({
        nombreEmpresa: practica.empresa.nombreEmpresa,
        sitioWebEmpresa: practica.empresa.sitioWebEmpresa,
        direccionEmpresa: practica.empresa.direccionEmpresa,
        numeroTelefonoEmpresa: practica.empresa.numeroTelefonoEmpresa,
        descripcionEmpresa: practica.empresa.descripcionEmpresa,

        nombreCompletoSupervisor: practica.supervisor.nombreCompletoSupervisor,
        cargoSupervisor: practica.supervisor.cargoSupervisor,
        telefonoSupervisor: practica.supervisor.cargoSupervisor,

        descripcionTarea: practica.tarea.descripcionTarea,
        importanciaTarea: practica.tarea.importanciaTarea,
        fechaRealizacionTarea: practica.tarea.fechaRealizacionTarea,
        horasDedicadaTarea: practica.tarea.fechaRealizacionTarea
    }))
return practicasLista;
}
