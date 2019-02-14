//MODULES
const express = require('express');
const setupMiddelware = require('./middleware/appMiddleware');
const pg = require("pg");
//MIDDLEWARE
const app = express();
setupMiddelware(app);
require('dotenv').config()


//Setup Database
const client = new pg.Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})

client.connect((err) => {
  if(err) return console.log(err);
  else console.log("Connected to dataabse")

})

app.get("/school", (req, res) => {
  try {
    client.query("select * from school", (err, result) => {
      if(err) {
        console.log(err);
      }

      else {
        res.status(200).send(result.rows)
      }
    })
  } catch(error) {console.log(error)}
})


// create table school (
//   school_id serial PRIMARY KEY,
//   name varchar(100),
//   address varchar(100),
//   postal_code int,
//   students int
// );


// Test insert query for get request above ^
// insert into school(name, address, postal_code, students) values ("Mission Hills", "San Marcos", 92069, 3000);





app.get("/", (req, res) => {res.status(200).send("Hello")})


app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Resource not found',
  });
});

module.exports = app;
