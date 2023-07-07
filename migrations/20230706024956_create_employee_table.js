exports.up = function(knex) {
    return knex.schema.createTable("employees", (table) => {
        table.string("id", 12).primary().unique().notNullable();
        table.string("name").notNullable();
        table.string("lastName").notNullable();
        table.float("salary").defaultTo(45);
        table.string("cargo");
        table.boolean("borrado").defaultTo(false);
      // Otros campos de la tabla
      // Aquí puedes agregar más columnas y definir su tipo y restricciones
  
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("employees");
  };
  

  exports.up = function(knex) {
    return knex.schema.createTable("employees", (table) => {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("lastName").notNullable();
      table.decimal("salary").defaultTo(45);
      table.string("cargo");
      table.boolean("borrado").defaultTo(false);
      // Otros campos de la tabla
      // Aquí puedes agregar más columnas y definir sus propiedades
  
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("employees");
  };
  