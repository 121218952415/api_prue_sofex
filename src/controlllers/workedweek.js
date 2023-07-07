const Employee = require("../schemas/Employee");
const WeekWorked = require("../schemas/WeekWorked");

const weeksworked = async (employeeId) => {
  try {
    // Verificar la existencia del empleado en la base de datos
    const empleado = await Employee.query().findById(employeeId);
    if (!empleado) {
      return { mensaje: 'El empleado no existe' };
    }

    // Reiniciar la semana de trabajo del empleado
    const fechaActual = moment().format('YYYY-MM-DD'); // Obtener la fecha actual en formato "YYYY-MM-DD"
    const startDate = obtenerPrimerDiaSemana(fechaActual); // Función para obtener el primer día de la semana actual
    const endDate = obtenerUltimoDiaSemana(fechaActual); // Función para obtener el último día de la semana actual

    // Eliminar los registros anteriores de weeks_worked para el empleado
    await WeekWorked.query().where('employeeId', employeeId).delete();

    // Crear un nuevo registro de weeks_worked con las fechas reiniciadas
    await WeekWorked.query().insert({
      employeeId,
      startDate,
      endDate,
    });

    return { mensaje: 'Se ha reiniciado la semana de trabajo' };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  weeksworked,
};
