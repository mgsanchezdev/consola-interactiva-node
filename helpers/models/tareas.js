const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc); 
    this._listado[tarea.id] = tarea; //Aca guardo la tarea dentro del objeto _listado
  }
}
module.exports = Tareas;
