'use strict';

function redcap(token, options) {
	this.PACKAGE_VERSION = require('../package.json').version;
	this.token = token;
	this.host = options.host;
	this.path = options.path;
	this.users = require('./users');
}

module.exports = function(token, options) {
	return new redcap(token, options);
}
