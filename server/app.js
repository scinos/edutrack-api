const express = require('express');
const setupMiddelware = require('./middleware/appMiddleware');
const db = require("./queries");

const app = express();
setupMiddelware(app);


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
