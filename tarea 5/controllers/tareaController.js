const Tarea = require("../models/Tarea");

exports.getTareas = async (req, res) => {
  const tareas = await Tarea.find();
  res.send(tareas);
};

exports.getTarea = async (req, res) => {
  const tarea = await Tarea.findById(req.params.id);
  if (!tarea) return res.status(404).send("Tarea no encontrada");
  res.send(tarea);
};

exports.createTarea = async (req, res) => {
  const tarea = new Tarea(req.body);
  await tarea.save();
  res.send(tarea);
};

exports.updateTarea = async (req, res) => {
  const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!tarea) return res.status(404).send("Tarea no encontrada");
  res.send(tarea);
};

exports.deleteTarea = async (req, res) => {
  const tarea = await Tarea.findByIdAndRemove(req.params.id);
  if (!tarea) return res.status(404).send("Tarea no encontrada");
  res.send(tarea);
};