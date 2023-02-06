exports.up = function(knex) {
    return knex.schema.createTable('courses', (table) => {
      table.increments('id');
      table.string('name').notNull();
      table.string('hours').notNull();
  
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('courses');
  };