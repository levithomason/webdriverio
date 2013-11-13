var merge = require('lodash.merge');

var env = process.env.TEST_ENV || 'local';

var defaults = require('./defaults.js');
var asked = require('./' + env + '.js');

module.exports = merge(defaults, asked);