// Importar dependencias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Inicializar app
const app = express();
app.use(cors());
app.use(express.json());

// Modelo User
const User = require("./models/User");

// Rutas para comprobar el funcionamiento
app.get("/", (req, res) => {
  res.send("✅ Servidor funcionando correctamente");
});

// Función para crear un usuario de prueba
const crearUsuario = async () => {
  try {
    const nuevo = new User({
      username: "",//Rellenar los 3 para hacer pruebas
      email: "",//
      password: "",//
    });
    await nuevo.save();
    console.log(" Usuario creado:", nuevo);
  } catch (err) {
    console.error("❌ Error creando usuario:", err.message);
  }
};

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI) // ya no necesitas useNewUrlParser ni useUnifiedTopology
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");

    // Iniciar servidor  
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
      console.log(`Servidor funcionando en http://localhost:${PORT}`)
    );

    // Crear usuario de prueba (se ejecuta SOLO si hay conexión)
    crearUsuario();
  })
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));
