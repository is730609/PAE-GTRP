const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  status: { type: String, enum: ["pendiente", "en_progreso", "completa"], default: "pendiente" },
  fechaCreacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tarea", tareaSchema);
