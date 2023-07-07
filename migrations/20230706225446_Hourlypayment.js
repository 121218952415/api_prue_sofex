exports.up = function(knex) {
    return knex.schema.createTable("hourly_payments", (table) => {
      table.increments("id").primary();
      table.string("employeeId").notNullable().references("id").inTable("employees");
      table.integer("weekWorkedId").notNullable().references("id").inTable("weeks_worked");
      table.decimal("regularHoursPayment").notNullable();
      table.decimal("overtimeHoursPayment").notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("hourly_payments");
  };
  