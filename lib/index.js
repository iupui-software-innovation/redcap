'use strict';

module.exports = function(token, options) {
	var apiData = {
		token: token,
		host: options.host,
		path: options.path
	}
	var utils = require('./utils')(apiData);

	return {
		PACKAGE_VERSION: require('../package.json').version,
		users: require('./users')(this.utils)
    }

}