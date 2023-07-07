const Employee = require("../schemas/Employee");
const WeekWorked = require("../schemas/WeekWorked");

const checkout = async (req, res) => {
  try {
    const { employeeId } = req.body;

    // Verificar la existencia del empleado en la base de datos
    const empleado = await Employee.query().findById(employeeId);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    // Obtener la semana de trabajo correspondiente a la fecha actual
    const fechaActual = new Date();
    const semanaTrabajo = await WeekWorked.query()
      .where("startDate", "<=", fechaActual)
      .andWhere("endDate", ">=", fechaActual)
      .andWhere("employeeId", employeeId)
      .first();

    if (!semanaTrabajo) {
      return res
        .status(404)
        .json({ error: "No has iniciado una semana de trabajo" });
    }

    // Obtener el registro de entrada correspondiente a la semana de trabajo actual
    const registroEntrada = await HourWorked.query()
      .where("employeeId", employeeId)
      .andWhere("weekWorkedId", semanaTrabajo.id)
      .andWhereNull("checkOut")
      .first();

    if (!registroEntrada) {
      return res
        .status(404)
        .json({ error: "No has registrado la entrada para esta semana" });
    }

    // Calcular la duración del turno
    const checkOut = new Date();
    const duration = checkOut - registroEntrada.checkIn;

    // Actualizar el registro de entrada con la hora de salida y la duración del turno
    await HourWorked.query().findById(registroEntrada.id).patch({
      checkOut,
      duration,
    });

    return res.json({ message: "Registro de salida exitoso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
module.exports = {
    checkout,
  };