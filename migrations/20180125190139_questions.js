
export function up(knex, Promise) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.string('question').notNullable();
    table.timestamps();
  });
}

export function down(knex, Promise) {
  return knex.schema.dropTable('questions');
}
