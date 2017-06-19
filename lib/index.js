'use strict';

module.exports = function(token, options) {
	if (token === undefined || token === "") {
		throw "No API token specified";
	}

	if (options === undefined) {
		throw "No options provided";
	}

	if (options.host === undefined) {
		throw "Host undefined (options.host)";
	}

	if (options.path === undefined) {
		throw "Path undefined (options.path)";
	}

	var apiData = {
		token: token,
		host: options.host,
		path: options.path
	}
	var utils = require('./utils')(apiData);

	return {
		PACKAGE_VERSION: require('../package.json').version,
		metadata: require('./metadata')(utils),
		redcapVersion: require('./redcapVersion')(utils),
		projects: require('./projects')(utils),
		fieldNames: require('./fieldNames')(utils),
		reports: require('./reports')(utils),
		survey: require('./survey')(utils)
	}
}
