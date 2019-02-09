const config = require('./config/config');


const getUsers = (request, response) => {
  config.query('select * from users', (err, res) => {
    if(err) {
      console.log('got here')
      throw error
    }
    response.status(200).json(res.rows)
  })
}

module.exports = getUsers;