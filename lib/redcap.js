'use strict';

var redcap = {};

redcap.PACKAGE_VERSION = require('../package.json').version;

var config = require('./config.json');

redcap.users = require('./modules/users.js');

module.exports = redcap;
