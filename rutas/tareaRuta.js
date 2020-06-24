const express = require("express");
const TareaControl = require("../control/tareaControl");

var api = express.Router();


//Ruta agregar Tareass
api.post("/", TareaControl.crearTarea);
//Ruta Consultar Tareas
api.get("/", TareaControl.obtenerTarea);
//Ruta Actualizar Tareas
api.put("/:id", TareaControl.actualizarTarea);
//Ruta Eliminar Registros
api.delete("/:id", TareaControl.eliminarTarea);

module.exports = api;   