const { Model } = require("objection");
const { v4: uuidv4 } = require("uuid");
const Employee = require("./Employee");
const WeekWorked = require("./WeekWorked");

class HourWorked extends Model {
  static get tableName() {
    return "hour_worked";
  }
  static get idColumn() {
    return "id";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["employeeId", "hoursWorked", "overtimeHours"],
      properties: {
        id: { type: "string", format: "uuid" },
        employeeId: { type: "string", format: "uuid" },
        weekWorkedId: { type: "string", format: "uuid" },
        checkIn: { type: "date-time" },
        checkOut: { type: "date-time" },
        duration: { type: "number" },
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
          from: "hours_worked.employeeId",
          to: "employees.id",
        },
      },
      weekWorked: {
        relation: Model.BelongsToOneRelation,
        modelClass: WeekWorked,
        join: {
          from: "hours_worked.weekWorkedId",
          to: "weeks_worked.id",
        },
      },
    };
  }
}

module.exports = HourWorked;
