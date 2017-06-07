'use strict';

function redcap(token, options) {
	this.PACKAGE_VERSION = require('../package.json').version;
	var apiData = {
		token: token,
		host: options.host,
		path: options.path
	};

	this.utils = require('./utils')(apiData);
	this.projects = require('./projects')(this.utils);
}

module.exports = function(token, options) {
	return new redcap(token, options);
}
