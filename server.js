/**
 * Created by rohaan on 4/25/15.
 */

var express = require('express');
require('./config/setup')(express);
require('./config/routes')(express);
var app = express();
module.exports = app;
