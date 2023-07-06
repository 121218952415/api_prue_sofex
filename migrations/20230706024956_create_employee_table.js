exports.up = function (knex) {
    return knex.schema.createTable("employees", (table) => {
      table.string("id", 12).primary();
      table.string("name").notNullable();
      table.string("lastName").notNullable();
      table.decimal("salary").notNullable();
      // Otros campos de la tabla
      // ...
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("employees");
  };
  