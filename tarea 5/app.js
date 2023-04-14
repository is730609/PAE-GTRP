const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const tareasRoutes = require("./routes/tareas");

const app = express();

mongoose.connect("MONGODB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API de administración de tareas");
  });

app.use("/tareas", tareasRoutes);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

