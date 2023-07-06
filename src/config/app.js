const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("../routes");
const app = express();

// Configuración de middlewares
app.use(cors()); // Habilita el uso de CORS
app.use(morgan("dev")); // Registra las solicitudes HTTP en la consola
app.use(cookieParser()); // Analiza las cookies de las solicitudes
app.use(express.json()); // Analiza el cuerpo de las solicitudes con formato JSON
app.use(routes); // Carga las rutas del servidor

module.exports = app;
