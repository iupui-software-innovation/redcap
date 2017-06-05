'use strict';

var redcap = {};

redcap.PACKAGE_VERSION = require('../package.json').version;

var config = require('./config.json');

redcap.project = require('./modules/project.js');
redcap.users = require('./modules/users.js');

module.exports = redcap;
