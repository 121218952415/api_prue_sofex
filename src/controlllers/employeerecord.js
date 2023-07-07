const Employee = require("../schemas/Employee");
const { generateUniqueId } = require("./generateid");
const Joi = require("@hapi/joi");

const employecreate = async (name, lastName, cargo) => {
    try {
      // Definir el esquema de validación utilizando Joi
      const schema = Joi.object({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        cargo: Joi.string().required(),
      });
  
      // Validar los parámetros utilizando el esquema
      const { error } = schema.validate({ name, lastName, cargo });
  
      if (error) {
        // Si hay un error de validación, lanzar una excepción
        throw new Error('Invalid parameters');
      }
  
      // Resto del código para generar el ID único y crear el empleado
  
      // Genera un nuevo ID único
      let id = generateUniqueId();
  
      // Verifica que el ID no esté duplicado en la base de datos
      let employee = await Employee.query().findOne({ id });
      while (employee) {
        // Genera otro ID único
        id = generateUniqueId();
        employee = await Employee.query().findOne({ id });
      }
  
      // Crea un nuevo objeto de empleado utilizando el modelo y el ID generado
      const newEmployee = await Employee.query().insert({
        id,
        name,
        lastName,
        cargo,
      });
  
      // Retorna la respuesta con el nuevo empleado creado
      return "Successfully created user.";
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  

module.exports = {
  employecreate,
};
