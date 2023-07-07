const Employee = require("../schemas/Employee");
const WeekWorked = require("../schemas/WeekWorked");
const HourWorked = require("../schemas/HourWorked");
const moment = require("moment");

const checkin = async (employeeId) => {
  try {
    // Verificar la existencia del empleado en la base de datos
    const empleado = await Employee.query().findById(employeeId);
    if (!empleado) {
      return { mensaje: 'El empleado no existe' };
    }

    // Obtener la fecha actual
    const fechaActual = moment().format('YYYY-MM-DD');

    // Obtener o crear la semana de trabajo correspondiente a la fecha actual
    const semanaTrabajo = await WeekWorked.query()
      .where('startDate', '<=', fechaActual)
      .andWhere('endDate', '>=', fechaActual)
      .andWhere('employeeId', employeeId)
      .first();

    if (!semanaTrabajo) {
      // Si no existe la semana de trabajo, crear una nueva
      const nuevaSemanaTrabajo = await WeekWorked.query().insert({
        employeeId,
        startDate: fechaActual,
        endDate: fechaActual,
      });

      // Registrar la hora de entrada en la base de datos
      const hourWorked = await HourWorked.query().insert({
        employeeId,
        weekWorkedId: nuevaSemanaTrabajo.id,
        checkIn: moment().format('HH:mm:ss'),
        checkOut: null,
        duration: null,
      });

      return { mensaje: 'Registro de entrada exitoso', hourWorked };
    } else {
      // Si la semana de trabajo ya existe, verificar si hay un registro de entrada sin salida
      const registroEntrada = await HourWorked.query()
        .where('employeeId', employeeId)
        .andWhere('weekWorkedId', semanaTrabajo.id)
        .andWhereNull('checkOut')
        .first();

      if (registroEntrada) {
        return { mensaje: 'Ya has registrado la entrada para esta semana' };
      } else {
        // Registrar la hora de entrada en la base de datos
        const hourWorked = await HourWorked.query().insert({
          employeeId,
          weekWorkedId: semanaTrabajo.id,
          checkIn: moment().format('HH:mm:ss'),
          checkOut: null,
          duration: null,
        });

        return { mensaje: 'Registro de entrada exitoso', hourWorked };
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  checkin,
};
