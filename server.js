var express = require('express'),
    app = express(),
    config = require('./config/config'),
    route = require('./route');

app.use('/api/v1/getShortestPath', route.getShortestPath);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const server = app.listen(config.port);

// timeout of server to 15 minutes
server.timeout = 1000 * 60 * 15;
console.log('Cloud Cover assignment ' + config.port);
route.getShortestPath();


var utils = require('./utils/utilityService');

/*var source = {latitude: 0, longitude: 1.5708};
var destination = {latitude: 1.22173, longitude: 0.785398};*/
console.log(utils.calculateDistance(source, destination));