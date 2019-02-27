const fs = require('fs').promises;
const path = require('path');

const baseDir = path.join(__dirname, 'models');

module.exports = async sequelize => {
  const files = await fs.readdir(baseDir);
  files.forEach(file => sequelize.import(path.join(baseDir, file)));
};
