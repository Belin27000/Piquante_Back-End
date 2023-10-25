const http = require('http');
const app = require('./app.js')
const dotenv = require('dotenv').config();


app.set('port', process.env.PORT || 3000)
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);