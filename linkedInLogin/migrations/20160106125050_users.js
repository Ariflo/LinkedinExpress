
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('users', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('linkin_id');
		table.string('name');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('users'); 
};