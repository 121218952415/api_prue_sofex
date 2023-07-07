const Knex = require("knex");
const { Model } = require("objection");
const { config } = require("dotenv");
const knexConfig = require("../../knexfile");
config();



// Obtiene la configuración para el entorno de desarrollo
const knex = Knex(knexConfig.development);


// Configuración de Objection.js para utilizar Knex.js como el query builder
Model.knex(knex);
Model.createNotFoundError = () => { throw new Error('No se encontró el modelo'); };



module.exports = knex;
