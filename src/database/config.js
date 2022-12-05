require('dotenv').config();
const { Sequelize } = require('sequelize');

const configMysql = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
}

const sequelize = new Sequelize( configMysql.database, configMysql.username, configMysql.password, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  define: {
    // Does not create the time it was created and modified
    timestamps: false
  }
});

module.exports = sequelize;
