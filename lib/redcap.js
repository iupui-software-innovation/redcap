'use strict';

var redcap = {};

redcap.PACKAGE_VERSION = require('../package.json').version;

var config = require('./config.json');

redcap.metadata = require('./modules/metadata.js');

module.exports = redcap;
