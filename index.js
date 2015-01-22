'use strict';

var _          = require('lodash');
var alfalfabet = require('node-alfalfabet');

module.exports = _.map(alfalfabet, function (c) { return c.toUpperCase(); });
