const { Model } = require("objection");
const Employee = require("./Employee");
const HoursWorked = require("./HourWorked");

class HourlyPayment extends Model {
  static get tableName() {
    return "hourly_payments";
  }
  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "employeeId",
        "weekWorkedId",
        "regularHoursPayment",
        "overtimeHoursPayment",
      ],
      properties: {
        id: { type: "string", format: "uuid" },
        employeeId: { type: "string" },
        weekWorkedId: { type: "integer" },
        regularHoursPayment: { type: "number" },
        overtimeHoursPayment: { type: "number" },
      },
    };
  }
  static get idColumn() {
    return "id";
  }

  $beforeInsert() {
    this.id = uuidv4();
    return Promise.resolve();
  }
  static get relationMappings() {
    return {
      employee: {
        relation: Model.BelongsToOneRelation,
        modelClass: Employee,
        join: {
          from: "hourly_payments.employeeId",
          to: "employees.id",
        },
      },
      hoursWorked: {
        relation: Model.BelongsToOneRelation,
        modelClass: HoursWorked,
        join: {
          from: "hourly_payments.hoursWorkedId",
          to: "hours_worked.id",
        },
      },
    };
  }
}

module.exports = HourlyPayment;
