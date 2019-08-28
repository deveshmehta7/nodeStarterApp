var express = require('express'),
    app = express(),
    config = require('./app/config/config');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const server = app.listen(config.port);

// timeout of server to 15 minutes
server.timeout = 1000 * 60 * 15;

console.log('Node starter application ' + config.port);
