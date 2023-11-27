const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');

const app = express();
const server = http.createServer(app);

// Serve the favicon.ico file
app.get('/favicon.ico', (req, res) => {
  res.sendFile(`${__dirname}/../client/dist/favicon.ico`);
});

app.use('/', express.static(`${__dirname}/../client/dist`));

server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});