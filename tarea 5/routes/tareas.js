const express = require("express");
const tareaController = require("../controllers/tareaController");

const router = express.Router();

router.get("/", tareaController.getTareas);
router.get("/:id", tareaController.getTarea);
router.post("/", tareaController.createTarea);
router.put("/:id", tareaController.updateTarea);
router.delete("/:id", tareaController.deleteTarea);

module.exports = router;