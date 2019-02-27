const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = require('../services/config');

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    operatorsAliases: false,
    migrationStorageTableName: '_meta',
  },
};
