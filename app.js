require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarAchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquire");
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
        tareas.listadoCompleto()
        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
