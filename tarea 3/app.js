const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/inicio.html'));
});

app.get('/hobbies', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/hobbies.html'));
});

app.get('/fotos', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/fotos.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/contacto.html'));
});

// Manejo de error 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'src/views/404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});