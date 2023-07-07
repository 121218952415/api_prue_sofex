const Employee = require("../schemas/Employee");
const WeekWorked = require("../schemas/WeekWorked");
const HourWorked = require("../schemas/HourWorked");
const moment = require("moment");

const checkout = async (employeeId) => {
  try {
    // Verificar la existencia del empleado en la base de datos
    const empleado = await Employee.query().findById(employeeId);
    if (!empleado) {
      return { mensaje: 'El empleado no existe' };
    }

    // Obtener la fecha actual
    const fechaActual = moment().format('YYYY-MM-DD');

    // Obtener la semana de trabajo correspondiente a la fecha actual
    const semanaTrabajo = await WeekWorked.query()
      .where('startDate', '<=', fechaActual)
      .andWhere('endDate', '>=', fechaActual)
      .andWhere('employeeId', employeeId)
      .first();

    if (!semanaTrabajo) {
      return { mensaje: 'No hay una semana de trabajo activa para la fecha actual' };
    }

    // Obtener el registro de entrada correspondiente a la semana de trabajo actual
    const registroEntrada = await HourWorked.query()
      .where('employeeId', employeeId)
      .andWhere('weekWorkedId', semanaTrabajo.id)
      .andWhereNull('checkOut')
      .first();

    if (!registroEntrada) {
      return { mensaje: 'No has registrado la entrada para esta semana' };
    }

    // Obtener la hora de entrada y calcular la duración del turno
    const horaEntrada = moment(registroEntrada.checkIn, 'HH:mm:ss');
    const horaSalida = moment();
    const duracionTurno = moment.duration(horaSalida.diff(horaEntrada)).asHours();

    // Actualizar el registro de entrada con la hora de salida y la duración del turno
    await HourWorked.query().findById(registroEntrada.id).patch({
      checkOut: horaSalida.format('HH:mm:ss'),
      duration: duracionTurno,
    });

    return { mensaje: 'Registro de salida exitoso', duracionTurno };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  checkout,
};
