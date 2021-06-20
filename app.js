require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarAchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
} = require("./helpers/inquire");
const Tareas = require("./helpers/models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    //Cargar  tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    //Print menu
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        //create option
        const desc = await leerInput(" Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3": //Listar completadas
        tareas.listarPendientesCompletadas(true);
        break;
      case "4": //Listar pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if(id !== '0'){
            const ok = confirmar("Está seguro");
            if (ok) {
              tareas.borrarTarea(id);
              console.log('Tareas Borrada')
            }
        }
        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
