const Sequelize = require('sequelize');
const Umzug = require('umzug');
const path = require('path');
const loadModels = require('./loadModels');
const { development: dbConfig } = require('./config');

let sequelize;

const init = async () => {
  sequelize = new Sequelize({
    ...dbConfig,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  loadModels(sequelize);

  const umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
      sequelize,
      tableName: '_meta',
    },
    logging: console.log,
    migrations: {
      path: path.resolve(__dirname, 'migrations'),
      params: [sequelize.getQueryInterface(), sequelize.Sequelize],
    },
  });
  await umzug.up();
};

module.exports = {
  init,
  get models() {
    return sequelize.models;
  },
};
