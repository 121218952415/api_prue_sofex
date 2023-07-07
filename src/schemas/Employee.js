const { Model } = require("objection");
const shortid = require("shortid");
const WeekWorked = require("./WeekWorked");
const HourWorked = require("./HourWorked");
const PayHour = require("./HourlyPayment");

class Employee extends Model {
  static get tableName() {
    return "employees";
  }

  static get jsonSchema() {
    return {
      type: "object",
      // Propiedades requeridas del objeto
      required: ["name", "lastName", "cargo"],

      properties: {
        id: {
          type: "string",
          minLength: 12,
          maxLength: 12,
        },

        name: {
          type: "string",
          // El campo 'name' es una cadena que representa el nombre del empleado
        },
        lastName: {
          type: "string",
          // El campo 'lastName' es una cadena que representa el apellido del empleado
        },
        salary: {
          type: "number",
          default: 45,
          // El campo 'salary' es un número que representa el salario del empleado
        },
        cargo: {
          type: "string",
          // El campo 'cargo' es una cadena que representa el cargo o posición del empleado
        },
        borrado: {
          type: "boolean",
          // El campo 'borrado' es un valor booleano que indica si el empleado ha sido marcado como borrado o no
        },
        // Otros campos del empleado
        // Aquí puedes agregar más propiedades y describir para qué se utilizan
      },
    };
  }
  static get relationMappings() {
    return {
      weeksWorked: {
        relation: Model.HasManyRelation,
        modelClass: WeekWorked,
        join: {
          from: "employees.id",
          to: "weeks_worked.employeeId",
        },
      },
      hoursWorked: {
        relation: Model.HasManyRelation,
        modelClass: HourWorked,
        join: {
          from: "employees.id",
          to: "hours_worked.employeeId",
        },
      },
      payHours: {
        relation: Model.HasManyRelation,
        modelClass: PayHour,
        join: {
          from: "employees.id",
          to: "pay_hours.employeeId",
        },
      },
    };
  }
}

module.exports = Employee;
