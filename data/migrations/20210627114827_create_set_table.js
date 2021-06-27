
exports.up = function(knex) {
  return knex.schema
    .createTable('sets', (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.string("creator_name").notNullable();
      table.string("statement").notNullable();
    }).createTable('card', (table) => {
      table.increments();
      table.integer('sets_id').unsigned();
      table.foreign('sets_id').references('sets.id').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('term').notNullable();
      table.string('definition').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("card").dropTableIfExists("sets");
};
