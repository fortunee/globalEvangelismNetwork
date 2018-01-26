
export function up(knex, Promise) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.integer('upvote').notNullable().defaultTo(0);
    table.integer('downvote').notNullable().defaultTo(0);
    table.timestamps();
  });
}

export function down(knex, Promise) {
  return knex.schema.dropTable('questions');
}
