'use strict';

var redcap = {};

redcap.PACKAGE_VERSION = require('../package.json').version;

var config = require('./config.json');

redcap.project = require('./modules/project.js');

module.exports = redcap;
