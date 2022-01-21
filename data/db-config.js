const knex = require("knex");
const configurations = require("../knexfile");
const environment = process.env.NODE_ENVIRONMENT;

module.exports = knex(configurations);
