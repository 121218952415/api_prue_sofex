const { Model } = require("objection");

class Employee extends Model {
  static get tableName() {
    return "employees";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["id", "name", "lastName", "salary"],
      properties: {
        id: {
          type: "string",
          pattern: "^[A-Za-z0-9!@#$%^&*()_]{12}$",
        },
        name: { type: "string" },
        lastName: { type: "string" },
        salary: { type: "number" },
        // Otros campos del empleado
      },
    };
  }
}

module.exports = Employee;
