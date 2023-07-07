const { Model } = require("objection");
const { v4: uuidv4 } = require("uuid");
const Employee = require("./Employee");
const HourWorked = require("./HourWorked");

class WeekWorked extends Model {
  static get tableName() {
    return "weeks_worked";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["employeeId", "startDate", "endDate"],
      properties: {
        id: { type: "string", format: "uuid" },
        employeeId: { type: "string" },
        startDate: { type: "string", format: "date" },
        endDate: { type: "string", format: "date" },
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
          from: "weeks_worked.employeeId",
          to: "employees.id",
        },
      },
      hoursWorked: {
        relation: Model.HasManyRelation,
        modelClass: HourWorked,
        join: {
          from: "weeks_worked.id",
          to: "hours_worked.weekWorkedId",
        },
      },
    };
  }
}

module.exports = WeekWorked;
