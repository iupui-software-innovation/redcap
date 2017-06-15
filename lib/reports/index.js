'use strict';

module.exports = function(utilRef) {
	const utils = utilRef;

	return {
		exportReports: require('./export.js')(utils)
	}
}
