/*jslint node: true, nomen: true, plusplus: true*/
"use strict";
var config = require('./config/config'),
    shortestPathFinder = require('./app/shortestPathFinder'),
    utils = require('./utils/utilityService');

/**
 * Gets the shortest path from the given input
 * @param req the input request
 * @param res response to send now we are not using this
 */
exports.getShortestPath = function (req, res) {

  // reads the input file
  utils.readFromJson(config.inputFile, function (err, file) {
    if (err) {
      console.log('readFromJson(): Error reading from json file. ', err.toString());
      return err;
    } else {
      shortestPathFinder.shortestPath(file);
      return file;
    }
  });
};