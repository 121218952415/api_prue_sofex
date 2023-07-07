exports.up = function(knex) {
    return knex.schema.createTable("weeks_worked", (table) => {
      table.increments("id").primary();
      table.string("employeeId").notNullable().references("id").inTable("employees");
      table.date("startDate").notNullable();
      table.date("endDate").notNullable();
      table.decimal("hoursWorked").notNullable();
      table.decimal("overtimeHours").notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("weeks_worked");
  };
  