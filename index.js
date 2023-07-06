// Importaciones de las dependencias
const app = require("./src/config/app");
const knex = require("./src/config/db")
const { config } = require("dotenv");

// Lee las variables de entorno desde el archivo .env
config();

// Puerto del servidor
const PORT = process.env.PORT;
// Autentica la conexión a la base de datos
async function connectDatabase() {
  try {
    await knex.raw("SELECT 1");
    console.log("Postgres connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDatabase();

// Iniciar el servidor
async function startServer() {
  try {
    app.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("Unable to initiate", error);
  }
}
startServer();


