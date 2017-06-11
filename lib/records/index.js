'use strict';

module.exports = function(utilRef) {
	return {
		exportRecords: require('./export.js')(utilRef),
	}
}
