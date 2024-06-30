const express = require('express');
const cors = require('cors');
const app = express();

// Configura CORS
app.use(cors());

// Middleware para parsear cuerpos JSON
app.use(express.json());

// Define tus rutas
app.post('/login', (req, res) => {
  // Lógica de autenticación
  res.json({ access_token: 'your_generated_token' });
});

app.post('/user', (req, res) => {
  // Lógica de registro de usuario
  res.json({ success: true });
});

// Inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
