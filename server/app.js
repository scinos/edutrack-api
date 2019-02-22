// MODULES
const express = require('express');
const setupMiddelware = require('./middleware/appMiddleware');
const db = require('./data');

const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res))
    .then(next)
    .catch(next);

const init = async () => {
  // MIDDLEWARE
  const app = express();
  setupMiddelware(app);

  app.get(
    '/school',
    asyncHandler(async (req, res) => {
      const schools = await db.models.school.findAll();
      res.send(JSON.stringify(schools));
    }),
  );

  app.get('/', (req, res) => {
    res.status(200).send('Hello');
  });

  app.use((req, res) => {
    res.status(404).json({
      status: 404,
      message: 'Resource not found',
    });
  });

  return app;
};

module.exports = { init };
