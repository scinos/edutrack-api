const express = require('express');
const api = require('./api/api');
const startDatabase = require('./database');
const setupMiddelware = require('./middleware/appMiddleware');
const db = require("./queries");

const app = express();
// startDatabase();
setupMiddelware(app);

// app.use('/api', api);

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Resource not found',
  });
});

module.exports = app;
