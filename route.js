/*jslint node: true, nomen: true, plusplus: true*/
"use strict";
var config = require('./app/config/config');

app.get("/", homeController.index);
app.get("/login", userController.getLogin);
