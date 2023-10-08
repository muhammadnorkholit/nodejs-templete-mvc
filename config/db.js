const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST, // or the host of your database server
  dialect: "mysql", // or the dialect for your database (e.g., 'mysql', 'sqlite', etc.)
});

module.exports = db;
