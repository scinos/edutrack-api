const Sequelize = require('sequelize');

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = require('../services/config');

let sequelize;

const init = () => {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  const School = sequelize.define(
    'school',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: true,
    },
  );

  return School.sync();
};

module.exports = {
  init,
  get models() {
    return sequelize.models;
  },
};
