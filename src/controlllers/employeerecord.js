const Employee = require("../schemas/employees");

const employecreate = async (req, res) => {
    try {
     
       // Obtén los datos del empleado del cuerpo de la solicitud
    const { name, salary } = req.body;

    // Crea un nuevo objeto de empleado utilizando el modelo
    const newEmployee = await Employee.query().insert({ name, salary });

    // Retorna la respuesta con el nuevo empleado creado
    return res.status(200).json(newEmployee);
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  module.exports = {
    employecreate ,
  };