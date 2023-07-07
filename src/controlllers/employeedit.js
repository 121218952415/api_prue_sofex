const Employee = require("../schemas/Employee");

const editemploye = async (req, res) => {
  try {
    const id = decodeURIComponent(req.params.id); // Obtener el ID del empleado a editar
    const updatedFields = req.body; // Obtener los datos actualizados del empleado

    
    // Realizar la actualización parcial del empleado en la base de datos utilizando el modelo Employee
    const numUpdated = await Employee.query().findById(id).patch(updatedFields);
  console.log(numUpdated)
    if (numUpdated === 1) {
      // Si se actualizó correctamente un registro
      res.status(200).json({ message: "Employee updated successfully" });
    } else {
      // Si no se encontró el empleado con el ID especificado
      res.status(404).json({ error: "Employee not found" });
      console.log({ error: "Employee not found" })
    }
  } catch (err) {
    //mandamos notificacion o error
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports ={
    editemploye,
  };