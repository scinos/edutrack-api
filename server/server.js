require('dotenv').config();

const http = require('http');
const app = require('./app');
const db = require('./data');

const main = async () => {
  await db.init();
  const server = http.createServer(await app.init());
  server.listen(8080);
  console.log('server running');
};

main();
