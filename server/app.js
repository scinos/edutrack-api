const express = require('express');
const api = require('./api/api');
const startDatabase = require('./database');
const setupMiddelware = require('./middleware/appMiddleware');

const app = express();
startDatabase();
setupMiddelware(app);

app.use('/api', api);

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Resource not found',
  });
});

module.exports = app;
